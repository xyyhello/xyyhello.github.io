 window.onload = function(){
 setTimeout(function(){$("#pageMark").remove();
 $("body").append("<audio autoplay='autoplay' loop='-1' src='music/spring.mp3' ></audio>");
 $(".one").addClass('cur');
 var fk = false;
 var dk = true;
 var rotateArr = [function rotateTop(){$(".decorateTop").addClass("on")},function rotateBottom(){$(".decorateBottom").addClass("on")}];
 var removeRotate = [function removeTop(){$(".decorateTop").removeClass("on")},function removeTop(){$(".decorateBottom").removeClass("on")}]
 var fiaarr = [function homecontent() {$('#myTab a:last').tab('show').parents().siblings().find(".homecontent").animate({ "bottom": 121 });}, function() {
    $(".text").fadeIn(2000)}];
 var fioarr = [function homecontent() {$('#myTab a:last').tab('show').parents().siblings().find(".homecontent").animate({ "bottom": 0 })
 }, function text() {$(".text").css({ "top": 180, "display": "none" }) }];
 
 function delayshow(i) { setTimeout(function() { $(".project .pjMain li").eq(i).addClass("on") }, i * 300) };
 function addin(){$(".project .pjMain li").addClass("in")};
 function titleEnter(i){$(".about_time").eq(i).animate({"left":0},(i+1)*500)};
 function textEnter(i){$(".about_descripte").eq(i).animate({"right":0},(i+1)*500)};
 function slidedown(){$(".detail").slideDown(1000)};
 function slideup(){$(".detail").slideUp(1000)};
 (function() {
    $('#myTab').find("a").css({ "background-color": 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + 0 + ')', "border": "none", "color": "white" });
    fiaarr[0]();
    fiaarr[1]();
    rotateArr[0]();
    rotateArr[1]();
    $('#myTab a.four').click(function(e) {
       e.preventDefault();
       if (!dk) return;
       fioarr[0]();
       fioarr[1]();
       slideup();
       removeRotate[0]();
       removeRotate[1]();
       addin();
       $(this).tab('show');
       slidedown();
       $(this).addClass("cur").parent().siblings().find("a").removeClass("cur");
       fk = true;
       dk = false ;
    });
    $('#myTab a.three').click(function(e) {
       e.preventDefault();
       fioarr[0]();
       fioarr[1]();
        addin();
        slideup();
       removeRotate[0]();
       removeRotate[1]();
       $(this).tab('show');
       setTimeout(function(){for(var i=0;i<4;i++){textEnter(i);titleEnter(i)}}, 300);
       $(this).addClass("cur").parent().siblings().find("a").removeClass("cur");
       fk = true;
       dk = true ;
    });
    $('#myTab a.two').click(function(e) {
       e.preventDefault();
       fioarr[0]();
       fioarr[1]();
       slideup();
       removeRotate[0]();
       removeRotate[1]();
       $(this).tab('show');
       setTimeout(function() {
          for (var i = 0; i < 6; i++) {
             delayshow(i)
          }
       }, 200)
       $(this).addClass("cur").parent().siblings().find("a").removeClass("cur");
       fk = true;
       dk = true ;
    });

    $('#myTab a.one').click(function(e) {
       e.preventDefault();
        addin();
       if (!fk) return;
       fiaarr[0]();
       fiaarr[1]();
       $(this).tab('show');
       rotateArr[0]();
       rotateArr[1]();
       $(this).addClass("cur").parent().siblings().find("a").removeClass("cur");
       fk = false;
    });


 })()}, 800)
}
