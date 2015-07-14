var oDiv = document.getElementById('wrap'); 
var oUl = document.getElementById('changed');
var aLi = oUl.getElementsByTagName('li');
var oDiv1 = document.getElementById('select');
var oUl1 = document.getElementById('add');
var aLi1 = oUl1.getElementsByTagName('li');
var index = -1;//div1里面li的索引
var row = 1;//当前显示的有几行
var bFlag = false;

//div1显示且随之移动
oDiv.onclick = function(){
	oDiv1.className = "show";
	document.onkeydown = function(e){
		e = e || e.target;
		var keyCode = e.which || e.keyCode;
		switch(keyCode){
			case 40:
				if(index == aLi1.length-1){
					index = -1;
				}
				index++;
				$('#add li').css('background','#FFF0F5');
				// $('#changed:last-child').remove();
				aLi1[index].style.background = "#FFC0CB";
				// $('#wrap').append("<li>"+aLi1[index].innerHTML+"</li>");
				if(index == aLi1.length-1){
					index = -1;
				}
				console.log(index);
			break;

			case 38:
				if(index == 0 || index == -1){
					index = aLi1.length;
				}
				index--;
				$('#add li').css('background','#FFF0F5');
				aLi1[index].style.background = "#FFC0CB";
				console.log(index);
			break;

			case 13:
				$('#changed').append("<li>"+aLi1[index].innerHTML+"</li>");
				aLi1[index].remove();	
				oDiv1.className = "hidden";
				index = -1;
			break;
		}
	}
	if(aLi.length == 9*row && !bFlag){
		row ++;
		oDiv.style.height = oDiv.offsetHeight + 40;
		bFlag = true;	
	}
	if(aLi.length<9 && bFlag){
		row --;
		oDiv.style.height = 42 + "px";
		bFlag = false;
	}
	oDiv1.style.left = 390 + (aLi.length - 9*(row-1))*55 + "px"; 
}

//div1隐藏
document.onclick = function(e){
	e = e || e.target;
	var target = e.srcElement || e.target;
	if(target.tagName == "BODY"){
		oDiv1.className = "hidden";
		index = -1;
	}
}

//append进去元素 同时div1消失
oUl1.onclick = function(e){
	e = e || e.target;
	var target = e.srcElement || e.target;
	if(target.tagName == "LI"){
		$('#changed').append("<li>"+target.innerHTML+"</li>");
		target.remove();
		oDiv1.className = "hidden";
		index = -1;
	}
}

//删除元素
oUl.onclick = function(e){
	e = e || e.target;
	var target = e.srcElement || e.target;
	if(target.tagName == "LI"){
		target.remove();
		$('#add').prepend('<li>'+ target.innerHTML +'</li>');
	}
}