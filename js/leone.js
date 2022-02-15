$(function() {

    $('.carousel').each(function(){
        $(this).carousel({
            interval: false,
            wrap: false
        });
    });

	/* Height slide home*/
	function setHeight() {
		var windowHeight = $(window).innerHeight();
		$('#home_container').css('height', window.innerHeight + 'px');
		$('#portfolio_container_nav').css('height', windowHeight);
		$('#cv_container_nav').css('height', windowHeight);

		var avatarContainerHeight = 1.9;
			
		$('#avatarContainer').css('height', windowHeight / avatarContainerHeight);

	};
	setHeight();

	$(window).resize(function() {
		setHeight();
	});


	/* Different height carousel bootstrap*/
	function bsCarouselAnimHeight() {
	    $('.carousel').carousel({
	        interval: 5000
	    }).on('slide.bs.carousel', function (e) {
	        var nextH = $(e.relatedTarget).height();
	        $(this).find('.active.item').parent().animate({	        	
	            height: nextH
	        }, 150);
	    });
	}

	bsCarouselAnimHeight();


	/* Touch devices slide 	*/	
	$(".carousel").on("touchstart", function(event){
	        var xClick = event.originalEvent.touches[0].pageX;
	    $(this).one("touchmove", function(event){
	        var xMove = event.originalEvent.touches[0].pageX;
	        if( Math.floor(xClick - xMove) > 5 ){
	            $(".carousel").carousel('next');
	        }
	        else if( Math.floor(xClick - xMove) < -5 ){
	            $(".carousel").carousel('prev');
	        }
	    });
	    $(".carousel").on("touchend", function(){
	            $(this).off("touchmove");
	    });
	});	




	/* Avatar Parallax */

      $('#avatarContainer').mousemove(function (e) {
          parallax(e, this, 0.19);
      });


      function parallax(e, target, layer) {
		var layer_coeff = 10 / layer;
		var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
		var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;

		

		var windowHeight = $(window).innerHeight();

		if (windowHeight <= 768){
				$(target).offset({ top: y + 50,left : x + 15});
			} else {	
				$(target).offset({ top: y ,left : x + 15});	
			}
		};   	


	var flag_slider = 0;

	$('.portfolio_button').click(function(){			
		flag_slider = 1;
		/*$('.carousel').removeClass('red-bg');*/
	});

	$('.cv_button').click(function(){			
		flag_slider = 1;
		/*$('.carousel').addClass('red-bg');*/
	});	

	$('.back_portfolio').click(function(){			
		flag_slider = 0;
	});

	$('.back_cv').click(function(){			
		flag_slider = 0;
	});


	$('#carousel-leone').on('slide.bs.carousel', function () {
		if (flag_slider == 1){
			$('#avatarContainer').addClass('avatar_fixed');
		}
	});

	$('#carousel-leone').on('slid.bs.carousel', function () {
		if (flag_slider == 0){
			$('#avatarContainer').removeClass('avatar_fixed');
		}		
	});


});