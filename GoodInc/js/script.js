$('#myCarousel').carousel({
  interval: 40000
});

$('.second-slider .carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
 
      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
      
  }
  else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
     
  }
});

$(document).ready(function(){
	$('#accordion .panel').hover(function(){
		$(this).addClass('currenthover');
		$(this).find('div').addClass('currenthover');
		$(this).find('h4').addClass('currenthover');
	},
								function(){
		$(this).removeClass('currenthover');
		$(this).find('div').removeClass('currenthover');
		$(this).find('h4').removeClass('currenthover');
	});
});