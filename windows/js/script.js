/*$(document).ready(function(){
	$('.top-control-1').click(function(e){
		e.preventDefault();
		$('.top-carousel').find('.top-slide-1').addClass('slide-visible');
		$('.top-carousel').find('.top-slide-2').removeClass('slide-visible');
	});
	$('.top-control-2').click(function(e){
		e.preventDefault();
		$('.top-carousel').find('.top-slide-2').addClass('slide-visible');
		$('.top-carousel').find('.top-slide-1').removeClass('slide-visible');
	});
});*/
$(document).ready(function(){
	$('.top-control').click(function(e){
		e.preventDefault();
		var a_href = $(this).attr('href');
		$('.top-carousel').find('.top-slide').removeClass('slide-visible');
		$('.top-carousel').find(a_href).addClass('slide-visible');
		
	});
});