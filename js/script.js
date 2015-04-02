$(document).ready(function(){
	$('.shop').click(function() {
		$('.cart').fadeToggle().toggleClass('cartVisible');
	});
});
$(document).ready(function(){
	$('.sortProductsList a').click(function() {
		$(this).find('.sortListCheck').toggleClass('rotateCheck');
	});
});
$(document).ready(function(){
    $('a[href^="#"], a[href^="."]').click( function(){
	    var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900);
        }
	    return false;
    });
});