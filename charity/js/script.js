$(document).ready(function() {
	$(".event-prev").hover(function() {
		$(this).find(".event-prev__date-main").css({"background":"#9b242d"});
		$(this).find(".event-prev__date-decor").css({"border-top-color":"#9b242d"});
	}, function() {
		$(this).find(".event-prev__date-main").css({"background":"#373838"});
		$(this).find(".event-prev__date-decor").css({"border-top-color":"#373838"});
	}
	);
	$(".nav-button").click(function() {
		$(this).toggleClass("nav-button-active");
		$(".header .nav").toggle(500);
	});
	$(window).resize(function() {
		$(".nav-button").removeClass("nav-button-active");
    	var page_w = $(window).width();
		if (page_w >= 624) {
			$(".header .nav").css({"display":"block"});
		} else {
			$(".header .nav").css({"display":"none"});
		}
	});
});