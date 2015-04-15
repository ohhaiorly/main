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
	var intervalId = setInterval(function(){slide()}, 3000);
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
		intervalId = setInterval(function(){slide()}, 3000);
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
});
/*
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