# Demo1 层叠轮播图




使用方法:

引入jq和基础的轮播代码之后，在底部调用如下代码


    var obj=new Slider({
          'wrap':'sliderWrap',     //最外面的Wrap元素，传dom的id字符串    
          'closeBtn':'closeBtn',   //关闭轮播的按钮，传dom的id字符串 
          'prevBtn':'prevBtn',     //向前按钮，传dom的id字符串 
          'nextBtn':'nextBtn',    //向后按钮，传dom的id字符串 
          'ul':'ul',               //轮播的列表，传dom的id字符串 
          'timer':true          //是否开始自动轮播，true表示自动轮播，false表示不自动
        })
        
        

#Demo2 焦点轮播图

        配置如下的参数，创建一个slider对象并传入参数即可。
      
        var options={
			'wrap':'m-slider',                 //String Wrap  class
			'picList':'picList',              //string  picList class
			'width':1000,                      // number  picListItem width
			'height':200,                      // number  picListItem height
			'prevBtn':'u-btn-prev',              //string prevBtn class
			'nextBtn':'u-btn-next',              //string nextBtn class
			'btnList':'btnList',             //string btnList class
			'autoPlay':true,                 //boolean true is autoplay false not play
			'autoTime':3000                  //number autoPlay interval
		};
		/*
		 *  @params String Wrap  class
		 *  @params String picList class
		 *  @params Number picListItem width
		 *  @params Number picList height
		 *  @params String prevBtn class
		 *  @params String nextBtn class
		 *  @params String btnList class
		 *  @params Boolean true is autoplay false not play
		 *  @params Number autoPlay interval
		 *
		 *
		 * */
		var obj=new Slider(options);


        
        

