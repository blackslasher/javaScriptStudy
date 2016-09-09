

function Slider(){
    this.init.apply(this,arguments);
}
Slider.prototype={
    init:function (options) {
        /*options config*/
        var _this=this;
        this.wrap=$('.'+options.wrap);
        this.picList=$('.'+options.picList);
        this.btnList=$('.'+options.btnList);
        this.btnItem=$('.'+options.btnList).children('li');
        this.len=$('.'+options.picList).children('li').length+2;  /*for cloned both first and last to piclist,len should plus 2*/
        this.width=options.width;
        this.height=options.height;
        this.prevBtn=$('.'+options.prevBtn);
        this.nextBtn=$('.'+options.nextBtn);
        this.autoPlay=options.autoPlay || null;
        this.autoTime=options.autoTime || 3000;
        this.index=1; /*for cloned both first and last to piclist ,index should be 1*/
        this.timer=null;
        /*init start*/


        var firstEle=this.picList.children('li').eq(0).clone();
        var lastEle=this.picList.children('li').eq(this.len-3).clone();
        firstEle.appendTo(this.picList);
        lastEle.prependTo(this.picList);


        this.picList.css({
                'left':-_this.width+'px',
                'width':_this.width*_this.len
        });

        this.wrap.css({
            'width':_this.width+"px",
            'height':_this.height+"px"
        });

        for(var i=0;i<this.len;i++){
            this.picList.children('li').eq(i).css({
                'width':_this.width+"px",
                'height':_this.height+"px"
            })
        }



        this.prevBtn.on('click',function(){
            _this.prevMove();
        });

        this.nextBtn.click(function () {
            _this.nextMove();
        });

        /*autoPlay*/


        if(this.autoPlay){
            _this.timer=setInterval(function () {
                _this.nextBtn.click();
                console.log(1)
            },3000);

            this.wrap.on('mouseover',function () {
                clearInterval(_this.timer);
            });

           this.wrap.on('mouseout',function () {
                _this.timer=setInterval(function () {
                   _this.nextBtn.click();
                },3000);
            });
        }


        /*按钮列表点击切换*/

        this.btnList.click(function (e) {
            if(/^\d+$/.test(e.target.innerHTML)){
                _this.index=e.target.innerHTML;
                _this.doMove();
            }
        })

    },
    doMove:function () {
        var _this=this;
        if(!this.picList.is(":animated")){
            this.picList.animate({
                'left':-_this.width*_this.index+"px"
            },_this.time,function () {
                if(_this.index<=0){
                   _this.picList.css('left',-(_this.len-2)*_this.width+'px');
                    _this.index=_this.len-2;
                }

                if(_this.index >=_this.len-1){
                    _this.picList.css('left',-_this.width+'px');
                    _this.index=1;
                }
            });
            _this.showBtn();
        }
    },
    showBtn:function () {
        var _this=this;
        var index=0;

        if(_this.index==_this.len-1){
            index=1;
        }else if(_this.index==0){
            index=_this.len-2
        }else{
            index =_this.index;
        }
        index--;

        for(var i=0;i<_this.len-2;i++){
            _this.btnItem.eq(i).removeClass('z-cur');
        }
        _this.btnItem.eq(index).addClass('z-cur');
    },
    prevMove:function () {
        this.index--;
        this.doMove();
    },
    nextMove:function () {
        this.index++;
        this.doMove();
    }
};

var options={
    'wrap':'m-slider',
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
