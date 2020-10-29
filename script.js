
$("video").css("opacity","0.5");


$("video").on("mouseenter",function(){
	$(this).trigger("play");
      $(this).autoplay = true;
      $(this).css("opacity","1");
});

$("video").on("mouseleave",function(){
	$(this).trigger("pause");
      $(this).autoplay = false;
      $(this).css("opacity","0.5");

});

$(".arrow1").on("click",function(){

location.href='index.html';
});

$(".arrow1").mouseenter(function(){

$("img").css("opacity","0.5");
});

$(".arrow1").mouseleave(function(){

$("img").css("opacity","1");
});