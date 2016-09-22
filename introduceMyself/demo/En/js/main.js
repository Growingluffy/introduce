// JavaScript Document

/*
  如何在一个网站或者一个页面去书写你的js代码
  1.js的分层（功能）:jq、组件、应用、mvc。
  2.js的规划（管理）:避免全局变量和方法，采用命名空间、闭包、面向对象、模块化。
*/
window.onload=function(){
     mv.app.toBanner();
     mv.app.toRun();
     mv.app.toSel();
}

var mv = {};  //命名空间

 //工具方法
mv.tools = {}; 

    // 获取类名工具
	mv.tools.getByClass = function(oParent,oClass){
		var arr = [];
		var iElement =  oParent.getElementsByTagName('*');
		for (var i = 0; i < iElement.length; i++) {
			if (iElement[i].className == oClass) {
				arr.push(iElement[i]);
			}
		}

		return arr;
		
	}


//组件方法
mv.ui = {};

    //淡出
	mv.ui.fadeOut = function (obj) {
	    if (obj.style.opacity == 0) {
	    	return false;
	    }
		
		var value = 100;
	    var ispeed = 5;
        clearInterval(obj.timer);
	    obj.timer = setInterval(function(){
	    	if (value == 0) {
	    		clearInterval(obj.timer);
	    	}else{
	    		value = value - ispeed;
		        obj.style.opacity = value/100;
	    	}
	       
	    },50);
		

	};
    //淡入
	mv.ui.fadeIn = function(obj){
		if (obj.style.opacity == 1) {
	    	return false;
	    }
	    var ispeed = 5;
	    var value = 0;
        clearInterval(obj.timer);
	    obj.timer = setInterval(function(){
	    	if (value == 100) {
	    		clearInterval(obj.timer);
	    	}else{
	    		value = value + ispeed;
		        obj.style.opacity = value/100;
	    	}
	       
	    },50);

	};

	//无缝切换
	mv.ui.moveLeft = function(obj,old,now){
		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var iSpeed = (now-old)/10;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if(now == old){
			clearInterval(obj.timer);
			}else{
				old=old+iSpeed;
				obj.style.left = old+"px";
			}
			
		},30);
		console.log(obj.style.left);
		

	}



//应用函数
mv.app = {};

	//淡入淡出
	mv.app.toBanner = function(){

		var oAd = document.getElementById('ad');
		var oLi = oAd.getElementsByTagName('li');

		var oPrev = mv.tools.getByClass(oAd,'prev')[0];
		var oNext = mv.tools.getByClass(oAd,'next')[0];
	    var iNow = 0;
		var timer;

		//自动播放
		timer = setInterval(auto, 3000);
		function auto() {
			if (iNow == oLi.length-1) {
	            iNow = 0;
			}else{
				iNow++;
			}
			
			for (var i = 0; i < oLi.length; i++) {
				mv.ui.fadeOut(oLi[i]);
			}
			mv.ui.fadeIn(oLi[iNow]);
		}

		//点击切换
		oPrev.onclick = function () {
			clearInterval(timer);
			autoPrev();
		}
		oNext.onclick = function () {
			clearInterval(timer);
			auto();
			timer = setInterval(auto, 3000);
		}

		function autoPrev(){

			if(iNow == 0){
				iNow = oLi.length-1;
			}
			else{
				iNow--;
			}
	        for (var i = 0; i < oLi.length; i++) {
				mv.ui.fadeOut(oLi[i]);
			}
			mv.ui.fadeIn(oLi[iNow]);
			timer = setInterval(auto, 3000);
		}


	}

	//无缝切换
    mv.app.toRun = function(){
       
    	var oDiv = document.getElementById('scroll_list');
    	var oUl = oDiv.getElementsByTagName('ul')[0];
    	var oLi = oUl.getElementsByTagName('li');

    	var aPrev = mv.tools.getByClass(oDiv,"prev")[0];
    	var aNext = mv.tools.getByClass(oDiv,"next")[0];
    	var iNow = 0;

    	oUl.innerHTML += oUl.innerHTML;
    	oUl.style.width = oLi.length * oLi[0].offsetWidth + 'px';
        
        //点击切换
    	aPrev.onclick = function(){
    		if(iNow == 0){
			iNow = oLi.length/2;
			oUl.style.left = -oUl.offsetWidth/2 + 'px';
			}
			mv.ui.moveLeft(oUl,-iNow*oLi[0].offsetWidth,-(iNow-1)*oLi[0].offsetWidth);
            iNow--;
			
            
    	}

    	aNext.onclick = function(){
    		if(iNow == oLi.length/2){
			iNow = 0;
			oUl.style.left = 0+"px";
			}
			mv.ui.moveLeft(oUl,-iNow*oLi[0].offsetWidth,-(iNow+1)*oLi[0].offsetWidth);
			
			iNow++;
			
	    		
    	}

    }

    //点击选择
    mv.app.toSel = function(){
    	var oSel = document.getElementById('select');
    	var aDd = oSel.getElementsByTagName('dd');
		var aUl = oSel.getElementsByTagName('ul');
		var aH2 = oSel.getElementsByTagName('h2'); 


		for(var i=0;i<aDd.length;i++){
			aDd[i].index = i; 
			aDd[i].onclick = function(ev){
				var ev = ev || window.event;
				var This = this;
				
				for(var i=0;i<aUl.length;i++){
					aUl[i].style.display = 'none';
				}
				
				aUl[this.index].style.display = 'block';
				
				document.onclick = function(){
					aUl[This.index].style.display = 'none';
				};
				
				ev.cancelBubble = true;
				
			};
			
		}
		
		for(var i=0;i<aUl.length;i++){
			
			aUl[i].index = i;
			
			(function(ul){
				
				var aLi = ul.getElementsByTagName('li');
				
				for(var i=0;i<aLi.length;i++){
					aLi[i].onmouseover = function(){
						this.className = 'active';
					};
					aLi[i].onmouseout = function(){
						this.className = '';
					};
					aLi[i].onclick = function(ev){
						var ev = ev || window.event;
						aH2[this.parentNode.index].innerHTML = this.innerHTML;
						ev.cancelBubble = true;
						this.parentNode.style.display = 'none';
					};
				}
				
			})(aUl[i]);
		}

    }