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
	/*var intervalID;
var k=0;
$("#example").mousedown(function(){
intervalID = setInterval(function(){
k++;
alert(k);
}, 1000)
});

$("#example").mouseup(function(){
clearInterval(intervalID);
});

	$('.mid-carousel').hover(function(){
		clearInterval(slidesleft());
	}, function() {
		$('.mid-carousel').css("background","red");
	});
	$('.mid-carousel').mouseover(function() {
		clearInterval(intervalId);
	});
	$('.mid-carousel').mouseout(function() {
		var intervalId = setInterval(function(){slidesleft()}, 1000);
	});
*/	var click_left = 0;
	var click_right = 0;
	var intervalId = setInterval(function(){slide()}, 4000);
	function slide() {
		if (click_left == 0 && click_right == 0) {
		$('.mid-slide').animate({left:'-=300px'}, 500, function() {
		$('.mid-slide').each(function () {
        if($(this).position().left == -600){
			$(this).css('left','900px');
        }
      });
	});
		} else if (click_left == 1 && click_right == 0) {
		$('.mid-slide').animate({left:'-=300px'}, 500, function() {
		$('.mid-slide').each(function () {
        if($(this).position().left == -600){
			$(this).css('left','900px');
        }
      });
	});
		} else if (click_left == 0 && click_right == 1){
		$('.mid-slide').animate({
		left:'+=300px'}, 500, function() {
		$('.mid-slide').each(function () {
        if($(this).position().left == 1200){
			$(this).css('left','-300px');
        }
      });
	});
		}
	}
	$('.mid-carousel').hover(function() {
		clearInterval(intervalId);
	},function() {
		intervalId = setInterval(function(){slide()}, 4000);
	});
	$('.mid-left-control').click(function(c){
		c.preventDefault();
		click_left = 1;
		click_right = 0;
		if($(".mid-slide:animated").length == 0){
		$('.mid-slide').animate({
			left:'-=300px'}, 500, function() {
		$('.mid-slide').each(function () {
        if($(this).position().left == -600){
			$(this).css('left','900px');
        }
      });
	});
}
});
	$('.mid-right-control').click(function(e){
		e.preventDefault();
		click_left = 0;
		click_right = 1;
		if($(".mid-slide:animated").length == 0){
		$('.mid-slide').animate({
			left:'+=300px'}, 500, function() {
		$('.mid-slide').each(function () {
        if($(this).position().left == 1200){
			$(this).css('left','-300px');
        }
      });
	});
	}
});
	$('.discount-item').hover(function() {
		$(this).find('.discount-item-outer').css('border-color','#d21300');
	}, function() {
		$(this).find('.discount-item-outer').css('border-color','#ffc000')
	});
	$('.navigation a').click( function(){
	    var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900);
        }
	    return false;
    });
	//Кнопка возвращения наверх
	var visible_control = 720;
	   $(window).scroll(function(){
		if ($(document).scrollTop() >= visible_control) {
			$('.back-control').fadeIn();
		}
		else {
			$('.back-control').fadeOut();
		};
	});
		$('.back-control').mouseover( function(){
		$(this).animate({opacity: 1}, 100);
	}).mouseout( function(){
		$(this).animate({opacity: 0.65}, 100);
	}).click( function(){
		$('html, body').animate({ scrollTop: 0 }, 500);
		return false;
	});
	//Галерея
	var gallery_size = function() {
    	$('.gallery-view-outer').height($('.gallery-view-inner').height());
	}
	$('.gallery-item').hover(function() {
		$(this).css('opacity','0.5');
	}, function() {
		$(this).css('opacity','1');
	});
	$('.gallery-img').hide();
	$('.gallery-img:nth-child(1)').show();
	var click_count = 1;
	$('.gallery-item').click(function() {
    	$('.gallery-view-outer').show().focus();
		var items_count = $('.gallery-items').find('.gallery-item').length;
		for(var i = 1; i <= items_count; i++) {
			if($(this).hasClass('gallery-item-' + i)) {
			   $('.gallery-slides').hide();
			   $('.gallery-slides-' + i).show();
			   album_count = i;
			   }
		}
		gallery_size();
  	});
	$('.gallery-view-outer').blur(function() {
  		$('.gallery-view-outer').hide();
		click_count = 1;
		$('.gallery-img').hide();
		$('.gallery-img:nth-child(' + click_count + ')').show();
	});
	$('.gallery-right').click(function() {
		var slides_count = $('.gallery-slides-' + album_count).find('.gallery-img').length;
		if (click_count == slides_count) {
			click_count = 0;
		}
		click_count++;
		$('.gallery-img').hide();
		$('.gallery-img:nth-child(' + click_count + ')').show();
		gallery_size();
	});
	$('.gallery-left').click(function() {
		var slides_count = $('.gallery-slides-' + album_count).find('.gallery-img').length;
		click_count--;
		if (click_count == 0) {
			click_count = slides_count;
		}
		$('.gallery-img').hide();
		$('.gallery-img:nth-child(' + click_count + ')').show();
		gallery_size();
	});
	$('.footer-logo').click( function(){
		$('html, body').animate({ scrollTop: 0 }, 500);
		return false;
	});
});
/*
Галлерея
__________
	$('.gallery-item').click(function() {
    	$('.gallery-view-outer').show().focus();
		var items_count = $('.gallery-items').find('.gallery-item').length;
		for(var i = 1; i <= items_count; i++) {
			if($(this).hasClass('gallery-item-' + i)) {
			   $('.gallery-slides').hide();
			   $('.gallery-slides-' + i).show();
			   }
		}
  	});
	$('.gallery-view-outer').blur(function() {
  	$('.gallery-view-outer').hide();
});
	var click_count = 1;
	$('.gallery-img').hide();
	$('.gallery-img:nth-child(1)').show();
	$('.gallery-left').click(function() {
		var slides_count_1 = $('.gallery-slides-1').find('.gallery-img').length;
		//var slides_count_2 = $('.gallery-slides-2').find('.gallery-img').length;
		//var slides_count_3 = $('.gallery-slides-3').find('.gallery-img').length;
		click_count++;
		$('.gallery-img').hide();
		$('.gallery-img:nth-child(' + click_count + ')').show();
		if (click_count == slides_count_1) {
			click_count = 0;
		}
	});
_______________

$('.gallery-item').click(function() {
    	$('.gallery-view').addClass('display-gallery');
		$('.gallery-view').focus();
  	});
	$('.gallery-view').blur(function() {
  	$('.gallery-view').removeClass('display-gallery');
});

$(document).ready(function() {
    $(document).on('click',function(e){
        e.stopPropagation();
        if (e.target.className == 'gallery-item') {
            $('.gallery-view').addClass('display-gallery');
            } else {
            $('.gallery-view').removeClass('display-gallery');   
        }      
    })
});
best variant
______________
var click_left = 0;
	var click_right = 0;
	var intervalId = setInterval(function(){slide()}, 1000);
	function slide() {
		$('.mid-slide').animate({left:'-=300px'}, 300, function() {
		$('.mid-slide').each(function () {
        if($(this).position().left == -600){
			$(this).css('left','900px');
        }
      });
	});
	}
	$('.mid-carousel').hover(function() {
		clearInterval(intervalId);
	},function() {
		intervalId = setInterval(function(){slide()}, 1000);
	});
	$('.mid-left-control').click(function(c){
		c.preventDefault();
		click_left = 1;
		click_right= 0;
		if($(".mid-slide:animated").length == 0){
		$('.mid-slide').animate({
			left:'-=300px'}, 300, function() {
		$('.mid-slide').each(function () {
        if($(this).position().left == -600){
			$(this).css('left','900px');
        }
      });
	});
}
});
	$('.mid-right-control').click(function(e){
		e.preventDefault();
		click_left = 0;
		click_right= 1;
		if($(".mid-slide:animated").length == 0){
		$('.mid-slide').animate({
			left:'+=300px'}, 300, function() {
		$('.mid-slide').each(function () {
        if($(this).position().left == 1200){
			$(this).css('left','-300px');
        }
      });
	});
	}
});
});
___________________
	if($('.mid-slide:nth-child(5)').position().left == 1200){
				$('.mid-slide:nth-child(5)').css('left','-300px');
		};
$('.mid-left-control').click(function(c){
		c.preventDefault();
		$('.mid-slide').animate({
			left:'-=300px'}, 400);
		$('.mid-slide').each(function (i) {
			alert($(this).position().left);
        if($(this).position().left == -600){
			$(this).css('left','900px');
        }
      });
});
$('.mid-left-control').click(function(c){
		c.preventDefault();
		$('.mid-slide').animate({
			left:"-=300px"}, 400, function() {
			if($('.mid-slide:nth-child(1)').position().left == -600){
				$('.mid-slide:nth-child(1)').css('left','900px');
		};
			if($('.mid-slide:nth-child(2)').position().left == -600){
				$('.mid-slide:nth-child(2)').css('left','900px');
		};
			if($('.mid-slide:nth-child(3)').position().left == -600){
				$('.mid-slide:nth-child(3)').css('left','900px');
		};
			if($('.mid-slide:nth-child(4)').position().left == -600){
				$('.mid-slide:nth-child(4)').css('left','900px');
		};
			if($('.mid-slide:nth-child(5)').position().left == -600){
				$('.mid-slide:nth-child(5)').css('left','900px');
		};
	});
});
	$('.mid-right-control').click(function(c){
		c.preventDefault();
		$('.mid-slide').animate({
			left:"+=300px"}, 400, function() {
			if($('.mid-slide:nth-child(5)').position().left == 1200){
				$('.mid-slide:nth-child(5)').css('left','-300px');
		};
			if($('.mid-slide:nth-child(4)').position().left == 1200){
				$('.mid-slide:nth-child(4)').css('left','-300px');
		};
			if($('.mid-slide:nth-child(3)').position().left == 1200){
				$('.mid-slide:nth-child(3)').css('left','-300px');
		};
			if($('.mid-slide:nth-child(2)').position().left == 1200){
				$('.mid-slide:nth-child(2)').css('left','-300px');
		};
			if($('.mid-slide:nth-child(1)').position().left == 1200){
				$('.mid-slide:nth-child(1)').css('left','-300px');
		};
	});
});
	if($('.mid-slide:nth-child(5)').position().left == 1200){
				$('.mid-slide:nth-child(5)').css('left','-300px');
		};
*/
/*
$('.mid-left-control').click(function(c){
		c.preventDefault();
		var elem = $('.mid-slide:first-child').detach();
		elem.appendTo('.mid-slides');
					if($('.mid-slide').position().left == 0px) {
				$('.mid-slide').remove();
     		};
	});
	*/
/*$( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});*/
/*$(document).ready(function(){
	$('.top-control').click(function(e){
		e.preventDefault();
		var a_href = $(this).attr('href');
		$('.top-carousel').find('.top-slide').removeClass('slide-visible');
		$('.top-carousel').find(a_href).slideDown().addClass('slide-visible');
	});*/