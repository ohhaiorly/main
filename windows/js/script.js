$(document).ready(function(){
	$('.top-control').click(function(e){
		e.preventDefault();
		var a_href = $(this).attr('href');
		$('.top-carousel').find('.top-slide').fadeOut(300);
		$('.top-carousel').find(a_href).fadeIn(300);
	});
	$('.top-control').hover(function() {
		$(this).css({"font-size":"+=2px"});
	}, function() {
		$(this).css({"font-size":"-=2px"});
	}
	);
	$('.top-control').focusin(function() {
  		$(this).css({"color":"#e2554a"});
		$(this).find('.top-slide-spinner').addClass('slide-visible');
		});
	$('.top-control').focusout(function() {
  		$(this).css({"color":"#3e5f6f"});
		$(this).find('.top-slide-spinner').removeClass('slide-visible');
		});
});
/*$(document).ready(function(){
	$('.top-control').click(function(e){
		e.preventDefault();
		var a_href = $(this).attr('href');
		$('.top-carousel').find('.top-slide').removeClass('slide-visible');
		$('.top-carousel').find(a_href).slideDown().addClass('slide-visible');
	});*/