 function Slider(){
            this.init.apply(this,arguments);
        }

        Slider.prototype={
          init:function(obj){

              /*config setting*/
              var _this=this;
              this.wrap=$('#'+obj.wrap);
              this.closeBtn=$('#'+obj.closeBtn);
              this.prevBtn=$('#'+obj.prevBtn);
              this.nextBtn=$('#'+obj.nextBtn);
              this.ul=$('#'+obj.ul);
              this.lis=this.ul.children('li');
              this.timer=1;  
              this.autoTime=3000;
              this.aSort=[];
              this.option=[
                            {'width':360,'height':250,'top':60,'left':0,zIndex:1,'opacity':.5},
                            {'width':400,'height':250,'top':20,'left':190,zIndex:2,'opacity':1},
                            {'width':360,'height':250,'top':60,'left':420,zIndex:1,'opacity':.5},
                          ];

              /*init behavior*/
              this.closeBtn.click(function(){
                  _this.wrap.css("display",'none');
              });


              this.prevBtn.click(function(){
                _this.doPrev();
              });


              this.nextBtn.click(function(){
                 
                _this.doNext();
              });


              if(this.timer){
                  this.timer=setInterval(function(){
                    _this.doNext();
                  },this.autoTime)


                  this.wrap.hover(function(){
                      clearInterval(_this.timer);                
                  },function(){
                      _this.timer=setInterval(function(){
                        _this.doNext();
                      },_this.autoTime)
                  })
              }
           
              for(var i=0;i<this.lis.length;i++){
                this.aSort[i]=this.lis.eq(i);
              }
             


          },
          doMove:function(){

              for(var i=0;i<this.lis.length;i++){
                  this.aSort[i].appendTo(this.ul)
                 
              }
           

              for(var i=0;i<this.lis.length;i++){
                  
                  this.ul.children('li').eq(i).stop(true,true).animate(this.option[i]);
              }   
          },
          doPrev:function(){


            this.aSort.unshift(this.aSort.pop());
            this.doMove();
          },
          doNext:function(){
            

            this.aSort.push(this.aSort.shift());
            this.doMove();
          },

        }

