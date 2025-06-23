$(document).ready(function () {
  //탭버튼 동작 소스


  $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
  $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content:first").show();

  //On Click Event
  $("ul.tabs li").click(function () {

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_content").hide();

    var activeTab = $(this).find("span").attr("tabs");
    $(activeTab).fadeIn();
    return false;
  });

  //같은 페이지 내에서 동작하게 하는 코드
  $(".sub li").click(function () {
    var indexNo = $(this).index();
    $("ul.tabs li").removeClass("active");
    $(".tabs li").eq(indexNo).addClass("active");
    $(".tab_content").hide();
    var activeTab2 = $(".tabs li.active").find("span").attr("tabs");
    $(activeTab2).fadeIn();
    return false;
  });

});

$(function(){
	$(".notice> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
	});
});
$(function(){
	$(".notice> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});