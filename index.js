//先实现点击上和下的按键就可以变到下一张图
var pre = document.getElementById('pre');
var next = document.getElementById('next');
var ul = document.getElementById('list');
var lis = document.getElementsByClassName('banner');
var dot = document.getElementsByClassName('dot');
var imgCon = document.getElementById('img-container');
var nownum = 0;
var weizhi = -1000;
var index = 0;


/**
 * 点击上下键照片变化的函数
 */
function changeImg(){
   next.addEventListener('click',function(){ 
       weizhi += -1000;

       ul.style.left = weizhi + 'px';
       if(weizhi < -6000){
           weizhi = -1000;
           ul.style.left = weizhi +'px';
       }

       //点的变化
       if(index < dot.length-1){
           index++;
       }else{
           index = 0;
       }
       dotChange(index);
       
   })

   pre.addEventListener('click',function(){
      weizhi += 1000;
      ul.style.left = weizhi +'px';
      if(weizhi > -1000 ){
          weizhi = -6000;
          ul.style.left = weizhi + 'px';
      }

      //点的变化
      if(index > 0){
        index--;
        
      }else{
        index = 5;
      }
      dotChange(index);
   })
}

/**
 * 设置定时器
 */

var timer;
function play(){
    timer = setInterval(function(){
    weizhi += - 1000;
    ul.style.left = weizhi + 'px';   
    if(weizhi < -6000){
     weizhi = -1000;
     ul.style.left = weizhi +'px';
    }

    //点的变化
    if(index < dot.length-1){
        index++;
    }else{
        index = 0;
    }
    dotChange(index);
 },1000);
 
}
//设置停止定时器
function stop(){
    clearInterval(timer)
}


//鼠标移入ul元素时，定时停止，移除时，打开定时器
  imgCon.addEventListener('mouseover',function(){
       stop()
   })
  imgCon.addEventListener('mouseout',function(){
       play()
   })
 
/**
 * 给小圆点加当图片变动，小圆点就跟着变化
 */
function dotChange(a){
    for(var i = 0; i < dot.length;i++){
        dot[i].style.background = '';
    }
    index = a;
    dot[index].style.background ='red';
 }

 /**
  * 点击点会调到相应的图片
  */
 
 for(var i = 0;i<dot.length;i++){
    ( function(i){
     dot[i].addEventListener('click',function(){
      var now = (i+1) * -1000;
    //   console.log(i);
      weizhi = now;
      ul.style.left = weizhi + 'px';
      dotChange(i);
     })
     })(i)
 }


//调用点击函数
changeImg();
//开启定时器
play();
//开启点的变化
