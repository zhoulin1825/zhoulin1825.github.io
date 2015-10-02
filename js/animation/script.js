$(document).ready(function() {
    /* For the sticky navigation */
    $('.js--section-form').waypoint(function(direction) {
        if (direction == "down") {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    }, {
      offset: '80px;'
    });

	/* Scroll */
    $('.js--scroll-to-reg').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000); 
    });
	
	
		$('.js--to-search').click(function () {
		if( $('#search').css('display')=='none')
		{
			$("#search").css("display", "block");
		} else {
			$("#search").css("display", "none");
		}
    });
	
	
		$('.js--joinfree').click(function () {
		if( $('.js--comfirm-password').css('display')=='none')
		{
			
			$('.js--remember-me').css("display", "none");
			$('.js--comfirm-password').css("display", "block");
			$('.js--joinfree').css("display", "none");
			$('.js--login').css("display", "none");
			$('.js--register').css("display", "block");
		} 
    });
	
			$('.js--login').click(function () {
	
			$('.section-form').css("display", "none");
				$('.section-lab').css("display", "block");
	
    });
				$('.js--register').click(function () {
	
			$('.section-form').css("display", "none");
				$('.section-lab').css("display", "block");
	
    });
	

});
    