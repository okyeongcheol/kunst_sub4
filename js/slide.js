$(function(){
    Start ();
      var imgs = 2;
    //슬라이드  갯수 -1만큼 설정
     var now = 0;
     function Start(){
         $("#slide li").eq(0).siblings().css({"top":"-300px"});
         setInterval(function(){
             slide ();
         },2000);
     };
     function slide(){
         now = now==imgs ? 0 : now+=1;
         $("#slide li").eq(now-1).css({"top":"-300px"});
         $("#slide li").eq(now).css({"top":"0px"});
     };
});