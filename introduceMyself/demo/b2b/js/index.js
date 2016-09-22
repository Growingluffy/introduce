

$(document).ready(function(){


	//切换搜索框
	(function(){
		   var oLi = $("#menu-tab li");
		   var oText = $("#search").find('form .text');

		   var arrText = [
		   	'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
		   	'例如：昌平区育新站龙旗广场2号楼609室',
		   	'例如：万达影院双人情侣券',
		   	'例如：东莞出事了，大老虎是谁？',
		   	'例如：北京初春降雪，天气变幻莫测'
		   ];
		   var arr = 0;
		   var iNow = 0;
		   oText.val(arrText[arr]);

           //遍历点击切换
		   oLi.each(function(index) {

			   	$(this).click(function() {
			   		oLi.removeClass('active');
			   	    $(this).addClass('active');
			   	    oText.val(arrText[index]);
			   	    iNow=index;
			   	});
		   
		   });

		   //光标事件
		   oText.focus(function(){
		   	 if (oText.val()==arrText[iNow]) {
		   	 	oText.val("");
		   	 }
		   })
		   
		   oText.blur(function(){
		   	 if (oText.val()=="") {
		   	 	oText.val(arrText[iNow]);
		   	 }
		   })
			   		
	})();

	//搜索区信息更新
	(function(){

		var oUl = $("#search").find('.update ul');
        
        //添加数据
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.w3school.com.cn/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.w3school.com.cn/' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.w3school.com.cn/' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.w3school.com.cn/' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.w3school.com.cn/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.w3school.com.cn/' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.w3school.com.cn/' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.w3school.com.cn/' }
		];
		var str = "";

		for (var i = 0; i < arrData.length; i++) {
			str += '<li><a href="' +arrData[i].url+ '"><strong>' + arrData[i].name + '</strong>&nbsp;<span>' +arrData[i].time+ '分钟</span>&nbsp;&nbsp;写了一篇新文章：' +arrData[i].title+ '</a></li>' ;
		}
        
        oUl.html(str);
        
        //动画效果
        var oHi = $("#search").find('.update li').height();
        var oUp = $("#search").find('#up');
        var oDown = $("#search").find('#down');
        var oUpdate = $("#search").find('.update');
        var oHnow = 0 ;
        var timer;


        	
        oDown.click(function () {
        	if (oHnow==210) {
        		oHnow=-30;
        	}
        	updown(-1);

        })
        oUp.click(function () {
        	if (oHnow==0) {
        		oHnow=240;
        	}
    		updown(1);
        
        })
        function updown(num){
        	oHnow=oHnow-oHi*num;
        	
        	oUl.stop().animate({top: -oHnow},2000,'elasticOut');
        }
        
        function play(){
        	timer = setInterval(function(){
        		oDown.click();
        	},4000)

        }

       play();
       /*timer=setInterval(function(){
        		oDown.click();
        	},1500);*/
       oUpdate.hover(function() {
       	  clearInterval(timer);
       }, function() {
       	  play();
       });


	})();

  //options选项卡
	(function(){

       optionTab($('.section_one .tab'),$('.section_one .con'),"click",300);
       optionTab($('.section_four .tab'),$('.section_four .con'),"click",600);
       optionTab($('.section_six .tab_sm ul'),$('.section_six .con_sm'),"mouseover");
       optionTab($('.side_section_four .tab_sm ul'),$('.side_section_four .con_sm'),"mouseover"); //调用函数运动

       //切换运动函数
       function optionTab(oTab, aCon,eve,time){
          var oElem =  oTab.children();
          var aElem = aCon.children();

          aElem.hide().eq(0).show();
          
          oElem.each(function(index) {
          	 
          	 $(this).on(eve,function() {

          	 	oElem.removeClass('active');
                $(this).addClass('active');
                oElem.find('a').attr('class', 'triangle_down_gray');
                $(this).find('a').attr('class', 'triangle_down_red');

                /*aElem.css('display', 'none');
                aElem.eq(index).css('display', 'block');*/
                aElem.hide(time).eq(index).show(time);

          	 });
          });
       }


	})();

  //焦点图播放
  (function(){

    	var oDiv = $('.section_three').find('.pic_tab');
    	var aUlli = oDiv.find('ul li');
    	var aOlli = oDiv.find('ol li');
    	var aP = oDiv.find('p');
    	var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
    	var iNow = 0;
    	var timer;
    	ofade();


    	aOlli.click(function() {
    		iNow = $(this).index();
    		ofade();
    	});
        
        //显示第一张图片
    	function ofade(){
    		aUlli.each(function(index) {
    			if (index!=iNow) {
    				$(this).fadeOut();
    				aOlli.eq(index).removeClass('active');

    			}else{
    				$(this).fadeIn();
    				aOlli.eq(index).addClass('active');
    			}
    		});
    		aP.text(arr[iNow]);
    	}

    	//自动播放
    	function autoPlay(){
    		timer = setInterval(function(){
                iNow++;
                if (iNow==arr.length) {
                	iNow=0;
                }

                ofade();
    		},2000);
    	}

    	autoPlay();

    	//鼠标移入移出
    	oDiv.hover(function() {
    		clearInterval(timer);
    	}, function() {
    		autoPlay();
    	});


    })();


  //日历提示
  (function(){

       var oDiv = $('.section_three .calendar');
       var oImg = oDiv.find('.img');
       var oInfo = oDiv.find('.today_info');
       var infoImg = oInfo.find('img');
       var infoP = oInfo.find('p');
       var oSpan = oDiv.find('h4 span');
       var otitle = oDiv.find('strong');



       oImg.hover(function() {

         var aTop = $(this).parent().position().top-28;
         var aLeft = $(this).parent().position().left+55;
         var index = $(this).parent().index()%oSpan.size();

       	 oInfo.show().css({top: aTop,left: aLeft});  // 提示框
       	 infoImg.attr({src:$(this).attr('src')});   // 内容图片
       	 infoP.text($(this).attr('info'));    //内容信息
       	 otitle.text(oSpan.eq(index).text()); //内容标题

       }, function() {

       	 oInfo.hide();
       	
       });

	
    })();


  //BBS高亮效果
  (function(){

    	var aLi = $('.section_four ol').find('li');

    	aLi.mouseover(function(){
           aLi.removeClass('active');
           $(this).addClass('active');
    	});


    })();


  //hot鼠标提示
  (function(){

    	var arr = [
    		'',
    		'用户1<br />人气1',
    		'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
    		'用户3<br />人气3',
    		'用户4<br />人气4',
    		'用户5<br />人气5',
    		'用户6<br />人气6',
    		'用户7<br />人气7',
    		'用户8<br />人气8',
    		'用户9<br />人气9',
    		'用户10<br />人气10'
    	];
    	var oLi = $('.hot li');

    	oLi.find('p').remove();
    	oLi.hover(function() {

    		var index = $(this).index();

    		if (index==0) {
    			return;
    		}else{
    			oLi.find('p').remove();
    		    $(this).append('<p>'+arr[index]+'</p>');
    		}
    		

    	}, function() {

    		oLi.find('p').remove();
    	});

    
  })()
   
   


})