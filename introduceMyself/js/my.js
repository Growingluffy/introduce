//jq代码
$(document).ready(function(){

	//点赞icon
	(function(){
		$("#header .btn").on("click",function(){
			var $this = $(this).find('span');
			$this.addClass("btn-activated")
			setTimeout(function(){
				$this.removeClass("btn-activated")
			},1000);
			$this.css('color', '#f00');
		})
	})();

	//ad广告
	(function(){


        var btn = $('.sign button');
        btn.click(function() {
        	setTimeout(start,2000);
        });

        //开始运行
	    function start(){
	      	var bgImg = $ ("#ad").find('.img_bg');
			var smImg = $ ("#ad").find('.img_sm');
			var oSpan = $('#ad').find('span');
			var maxH= bgImg.height();
			var mixH= smImg.height();
	        var ih = 0; 
	        var step = 5 ; 
	         
	         //下拉函数 
			function adDown(){
				if (ih<maxH) {
					ih+=step;
					setTimeout(adDown,20);
				}else{
					setTimeout(adUp,2000);
				}
				$('#ad').css('display', 'block');
				$('#ad').height(ih) ;
			}
			setTimeout(adDown, 1000);

			//向上收起
			function adUp(){
				if (ih>mixH) {
					ih-=step;
					setTimeout(adUp,10);
				}else{
					bgImg.css('display', 'none');
					smImg.css('display', 'block');
					$('#ad').find('span').css('display', 'block');
				}
				$('#ad').height(ih);
			}

			//关闭广告
	        oSpan.click(function() {
	        	$('#ad').remove();
	        });
	      }  
			

	})();

	//轮播图
	(function(){
        var oBox =$('.carousel ');
		var oLi =$('.carousel').find('.carl-cont li');
		var iLi =$('.carousel').find('.carl-icon li');
		var timer;
		var timerr;
		var i=0;

		oLi.eq(0).css('display', 'block');
		iLi.each(function(index) {
            //小按钮切换
			iLi.mouseover(function() {
				var index = $(this).index();
				var athis = $(this);
				
				if (timer) {clearTimeout(timer);}
				timer=setTimeout(function () {
					iLi.removeClass('active');
					athis.addClass('active');
					oLi.css('display', 'none');
					oLi.eq(index).css('display', 'block');
					i = index;
					
				},400);	

			});

		});
		//鼠标移入移出
		oBox.mouseover(function () {
			clearInterval(timerr);
		})
		oBox.mouseout(function(){
			timerr = setInterval(go,3000);
		})
        //自动播放
		timerr = setInterval(go,3000);
		function go(){
                i++;
                if (i>4) {
                	i=0;
                }
                
                oLi.css('display', 'none');
				oLi.eq(i).css('display', 'block');
				iLi.removeClass('active');
				iLi.eq(i).addClass('active');

			}


	})();

	//info 文字高亮
	(function(){
		var oShow = $('#show-info');
		var text = $('.wrapCarl').find('.info-bar p');

        oShow.hover(function() {
        	text.css('color', '#fff');
        }, function() {
        	text.css('color', '');
        });
	})();


    //个人资料卡切换
    (function(){
    	var oLi = $('.carousel .info3d');
    	var oTitle = oLi.find('.list-title li');
    	var oCon = oLi.find('.list-con li');

    	oTitle.each(function(index) {
    		$(this).click(function() {
    			
    			oTitle.removeClass('active');
    			$(this).addClass('active');
    			oCon.removeClass('show');
    			oCon.eq(index).addClass('show');
    		
    		});
    	});

    })();
	
    //日历提示
    (function(){
    	var aLi = $('.calendar').find('li.active');
    	var aSpan = $('.calendar').find('h4 span');

    	var oDiv = $('.calendar').find('.today');
    	var oStrong = $('.calendar').find('.today strong');
    	var oP = $('.calendar').find('.today p');
    	var oEm = $('.calendar').find('.today em');
    	var oImg= $('.calendar').find('.today img');
    	var timer;


    	aLi.hover(showBox,hideBox);
    	function showBox() {
    		var that=$(this).find('img');
            var index=$(this).index()%aSpan.size()
            var aTop = $(this).position().top-25;
            var aLeft = $(this).position().left+75;
          
    		timer=setTimeout(function(){
    		
    		oDiv.stop().fadeIn(700);
    		oDiv.css({top: aTop,left: aLeft});
            oImg.attr('src', that.attr('src') );
            oP.html(that.attr('info'));
            oEm.html(that.attr('alt'));
            oStrong.html(aSpan.eq(index).html());
          
    		},400);
            
    	}

    	function hideBox() {
    		clearTimeout(timer);
    		oDiv.stop().fadeOut(500);
    	}

    })();


    //信息滚动
    (function(){

    	var roll = $('.inforoll');
    	var aCon = roll.find('.con');
    	
    	var timer;
    	var h = 0;
        
    	aCon.html(aCon.html()+aCon.html());
      
        timer=setInterval(scrollUp,50);
        function scrollUp(){
        	h++;
        	if (h>200) {
        		h=0;
        	}
           aCon.scrollTop(h);
           
        }
        roll.mouseover(function() {
        	clearInterval(timer);
        });
        roll.mouseout(function() {
        	timer=setInterval(scrollUp,50);
        });

    })();


    //第三板块手风琴
    (function(){

    	var oDiv = $('.work').find('.infobar');
    	var oLi = oDiv.find('li');

    	oLi.mouseenter(function() {
    		oLi.removeClass('on');
    		$(this).addClass('on');
    	});

    })();

   

    //侧栏滚动条定位
    (function(){

    	var oUp   = $('#sideBar').find('.bar .backup');
    	var Icon3   = $('#sideBar').find('.bar .icon3');
    	var Icon4   = $('#sideBar').find('.bar .icon4');
    	var Icon5   = $('#sideBar').find('.bar .icon5');
    	var Icon6   = $('#sideBar').find('.bar .icon6');
    	var Icon7   = $('#sideBar').find('.bar .icon7');
        var oElem = $('html,body');
        var oBar = $('#sideBar .myinfo');
    	var oDiv = $('.bar .icon1');

        var aCal  = $('.carousel').offset().top-100;
        var aSt   = $('.showtime').offset().top-100;
        var aSh   = $('.school').offset().top-100;
        var aWo   = $('.work').offset().top-100;
        var aWe   = $('.web').offset().top-100;
        var toggle = true;
        
        //回到顶部
        oUp.click(function Up(){

        	oElem.animate({scrollTop:0},400); 
        });
        //定位
        Icon3.click(function() {
        	oElem.animate({scrollTop:aCal}, 200)
        });
        Icon4.click(function() {
        	oElem.animate({scrollTop:aSt}, 200)
        });
        Icon5.click(function() {
        	oElem.animate({scrollTop:aSh}, 200)
        });
        Icon6.click(function() {
        	oElem.animate({scrollTop:aWo}, 200)
        });
        Icon7.click(function() {
        	oElem.animate({scrollTop:aWe}, 200)
        });

        //侧边栏显示
        oDiv.click(function() {
        	if (toggle) {
        		oBar.animate({width:240}, 300);
        		toggle = false;
        	}else{
        		oBar.animate({width:0}, 300);
                toggle = true;

        	}
    		

    	});

     
    })()



})


// js代码
window.onload=function(){

	//时间显示
	(function(){

	   var time = document.getElementById('header').getElementsByTagName('div')[0];
       var a = document.createElement("a");
       	  
          
       function autoTime(){
       	  var date = new Date();
       	  var y = date.getFullYear(),
       	      m = date.getMonth()+1,
       	      d = date.getDate(),
       	      h = date.getHours(),
       	      mi = date.getMinutes(),
       	      s = date.getSeconds();
       	  var nowTime = y + "年" + m +"月"+ d +"日"+h +":"+ mi + ":" + s;
          a.innerHTML = nowTime;
       }


       setInterval(function(){
       	 autoTime();
       },1000)
       time.appendChild(a);

    
	})();




	//video轮播图
	(function(){

		var str = [
		 "于2015年7月毕业于211工程郑州大学。",
		 "学历没有造假，四年全日制学士学位-",
		 "2011年高考！",
		 "专业所学偏重结构设计",
		 "郑大几年前的宣传片~"
		]

		var show = document.getElementById('video-show');
		var text = document.getElementById('text');
		var list = document .getElementById('video-list');
		var oLi = show.getElementsByTagName('li');
		var aUl = list.getElementsByTagName('ul')[0];
		var aLi = list.getElementsByTagName('li');
		var aSpanf = list.getElementsByTagName('span')[0];
		var aSpanr = list.getElementsByTagName('span')[1];
		var oDiv = show.getElementsByTagName('div')[0];
		var step = 5;
		var timer;
		var timerr;
		var animate = false;
		
		
        oDiv.innerHTML = str[4];
		aSpanr.onclick=function(){
			if (animate) {
				return;
			}
			
			play(500,-150,1,0,-1);
		}
		aSpanf.onclick=function(){
			if (animate) {
				return;
			}

			play(500,150,0,1,1);
		}

		//移动函数
		/*function foreward() {
		    animate=true;
			aUl.style.left = parseInt(aUl.style.left) - step +"px";
			timer=setTimeout(foreward,30);
			if (left==parseInt(aUl.style.left)) {
				clearInterval(timer);
				left=parseInt(aUl.style.left)-150;
				animate=false;
				if (parseInt(aUl.style.left)==-150*5) {
					aUl.style.left=0+"px";
					left = parseInt(aUl.style.left)-150;
				}
			}
			console.log(aUl.style.left);
		}
		function backward() {
			animate=true;
			aUl.style.left = parseInt(aUl.style.left) + step +"px";
			timer=setTimeout(backward,30);
			if (parseInt(aUl.style.left)==leftback) {
				clearInterval(timer);
				leftback=parseInt(aUl.style.left)+150;
				animate=false;
				if (parseInt(aUl.style.left)==0) {
					aUl.style.left=-150*5+"px";
					leftback = parseInt(aUl.style.left)+150;
				}
			}
			console.log(aUl.style.left);
		
		}*/
		function play(itime,iwidth,num1,num2,num) {

			var left = parseInt(aUl.style.left)+iwidth;
			var speed = itime/(150/step);


			function move() {
			    animate=true;
				aUl.style.left = parseInt(aUl.style.left) + num*step +"px";
				timer=setTimeout(move,speed);
				if (left==parseInt(aUl.style.left)) {
					clearInterval(timer);
					left=parseInt(aUl.style.left)+iwidth;
					animate=false;
					if (parseInt(aUl.style.left)==-150*5*num1) {
						aUl.style.left=-150*5*num2+"px";
						left = parseInt(aUl.style.left)+ iwidth;
					}
				}
			
			}
			move();

		}

		//定时器函数
        timerr=setInterval(aSpanr.onclick,3000);
        list.onmouseover=function () {
        	clearInterval(timerr);
        }
        list.onmouseout=function () {
        	timerr=setInterval(aSpanr.onclick,3000);
        }

        //显示函数
       
    	for (var i = 0; i < aLi.length; i++) {
        	aLi[i].onclick=function () {
        		var index = this.getAttribute("index");

        		for (var i = 0; i < oLi.length; i++) {
        			if( oLi[i].className == 'on'){
                        oLi[i].className = '';
                        break;
                    }
        		}
        		
        		oLi[index-1].className = 'on';
                oDiv.innerHTML = str[index-1];
        	}
        }
        
    
	})();


	//抽奖系统
	(function(){
		var data = ["5K~8K","html/css","JavaScript","jquery","Angularjs","bootstrap"]
        var oText = document.getElementById('bonus').getElementsByTagName('div')[0];
        var oplay = document.getElementById('btn').getElementsByTagName('span')[0];
        var ostay = document.getElementById('btn').getElementsByTagName('span')[1];
        var timer;

        oplay.onclick = play;
        ostay.onclick = stop;

        function play(){
           clearInterval(timer);
           timer = setInterval(function(){
	           var random = Math.floor(Math.random()*data.length);
	           oText.innerHTML = data[random];
           },100);
           oplay.style.background = "#999";
           
        }
        function stop(){
           clearInterval(timer);
           oplay.style.background = "blue";
        }

	})();


	//3dspace
	(function(){

		var curIndex = 1;
		var timer;

		function next(){

		   var date = new Date();
		   var second = date.getSeconds();
		   var curPage = document.getElementById("page"+curIndex);
		    curPage.style.webkitTransform = "rotateX(-180deg)";
		    curIndex +=1;
		    if (curIndex>6) {
		    	curIndex=1;
		    }
		    var nextPage = document.getElementById("page"+curIndex);
		    nextPage.style.webkitTransform = "rotateX(0deg)";
		    nextPage.innerHTML=second;
		}

	
		timer= setInterval(next,2000);
			
	
	})();


	//登陆弹窗
	(function(){
        var oDiv = document.getElementById('denglu');
		var box = document.getElementById('sign');
		var oShade = document.getElementById('shade');
		var oH = box.getElementsByTagName('h3')[0];
		var btn = box.getElementsByTagName('button')[0];
		var	winW=document.documentElement.clientWidth || document.body.clientWidth;
		var winH=document.documentElement.clientHeight || document.body.clientHeight;
        box.style.left =winW/2-200+"px";
		
		oH.onmousedown=fnDown;
		function fnDown(e) {
			e = event || window.event;
			var disX = e.clientX-box.offsetLeft;
			var disY = e.clientY-box.offsetTop;
		
			document.onmousemove=function(event) {
				event = event || window.event;
				var l = event.clientX - disX;
				var t = event.clientY - disY;

			    var maxW=winW-box.offsetWidth,
			        maxH=winH-box.offsetHeight;
			    if(l<0){
				    l=0;
				  }else if(l>maxW){
				    l=maxW;
				  }
				  if(t<0){
				    t=0;
				  }else if(t>maxH){
				    t=maxH;
				  }
				box.style.top = t + "px";
				box.style.left = l + "px";
			}

			document.onmouseup=function () {
			document.onmousemove=null;
		  	document.onmouseup=null;
			}
		}
		
		//打开和关闭登陆框
		oDiv.onclick=function () {
			box.style.display = "block";
		}
		btn.onclick = function () {
			box.style.display = "none";
			oShade.style.display="none";
		}

	})();





}