$(document).ready(function() {
    $('.js--section-form').waypoint(function(direction) {
        if (direction == "down") {
            $('#header').addClass('section-header');
			$('#header').removeClass('section-header-before');
        } else {
             $('#header').addClass('section-header-before');
			$('#header').removeClass('section-header');
        }
    }, {
      offset: '60px;'
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
	
	
	
	

    var columns    = 3,
        setColumns = function() { columns = $( window ).width() > 640 ? 3 : $( window ).width() > 320 ? 2 : 1; };
 
    setColumns();
    $( window ).resize( setColumns );
 
    $( '#list' ).masonry(
    {
        itemSelector: '.item',
        columnWidth:  function( containerWidth ) { return containerWidth / columns; }
    });

	
	
	
	
	
	
	
	
	
	
});
    