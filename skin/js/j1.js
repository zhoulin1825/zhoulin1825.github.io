

/*导航切换---------------------------------*/
$(function(){	
	$('.js-section-nav').waypoint(function(direction) {
			if (direction == "down") {
				$('#header').css("display", "none");
				$('.bottomLine').css("display", "block");
				
			} else {
				$('#header').css("display", "block");
				$('.bottomLine').css("display", "none");
			}
		}, {
		  offset: '60px;'
		});
		
		
	

})

/*button动态-----------------------------*/
$(function(){
	
	
	$(".l_box").hover(function(){
			
                  $(".l_hover").stop(false,true).animate({left:"300px"},500)
				   $(".l_img").stop(false,true).animate({left:"87px"},500)
				    
                    },function(){
						
                  $(".l_hover").stop(false,true).animate({left:"81px"},500)
				  $(".l_img").stop(false,true).animate({left:"-200px"},500)
                });
	
	
	$(".l_box1").hover(function(){
			
                  $(".l_hover1").stop(false,true).animate({left:"300px"},500)
				  $(".l_img1").stop(false,true).animate({left:"89px"},500)
				   
                    },function(){
						
                  $(".l_hover1").stop(false,true).animate({left:"56px"},500)
				  $(".l_img1").stop(false,true).animate({left:"-200px"},500)
                });
	$(".edit").hover(function(){
			
                  $(".edit a").stop(false,true).animate({left:"300px"},500)
				   $(".edit img").stop(false,true).animate({left:"71px"},500)
				   
                    },function(){
						
                  $(".edit a").stop(false,true).animate({left:"75px"},500)
				   $(".edit img").stop(false,true).animate({left:"-200px"},500)
                });
		
	})
	
	
	
/*图标变色----------------*/

$(function(){
		$(".s_box .li_1 img").eq(1).hide();
		$(".s_box .li_1").hover(function(){
		
				   $(".s_box .li_1 img").eq(0).hide();
				   $(".s_box .li_1 img").eq(1).show();
                    },function(){
						
                  $(".s_box .li_1 img").eq(1).hide();
				   $(".s_box .li_1 img").eq(0).show();
                });
				
		$(".s_box .li_2 img").eq(1).hide();
		$(".s_box .li_2").hover(function(){
		
				   $(".s_box .li_2 img").eq(0).hide();
				   $(".s_box .li_2 img").eq(1).show();
                    },function(){
						
                  $(".s_box .li_2 img").eq(1).hide();
				   $(".s_box .li_2 img").eq(0).show();
                });
				
	    $(".s_box .li_3 img").eq(1).hide();
		$(".s_box .li_3").hover(function(){
		
				   $(".s_box .li_3 img").eq(0).hide();
				   $(".s_box .li_3 img").eq(1).show();
                    },function(){
						
                  $(".s_box .li_3 img").eq(1).hide();
				   $(".s_box .li_3 img").eq(0).show();
                });	
				
	$(".s_box .li_4 img").eq(1).hide();
		$(".s_box .li_4").hover(function(){
		
				   $(".s_box .li_4 img").eq(0).hide();
				   $(".s_box .li_4 img").eq(1).show();
                    },function(){
						
                  $(".s_box .li_4 img").eq(1).hide();
				   $(".s_box .li_4 img").eq(0).show();
                });
		
		$(".s_box .li_5 img").eq(1).hide();
		$(".s_box .li_5").hover(function(){
		
				   $(".s_box .li_5 img").eq(0).hide();
				   $(".s_box .li_5 img").eq(1).show();
                    },function(){
						
                  $(".s_box .li_5 img").eq(1).hide();
				   $(".s_box .li_5 img").eq(0).show();
                });
				
		$(".s_box .li_6 img").eq(1).hide();
		$(".s_box .li_6").hover(function(){
		
				   $(".s_box .li_6 img").eq(0).hide();
				   $(".s_box .li_6 img").eq(1).show();
                    },function(){
						
                  $(".s_box .li_6 img").eq(1).hide();
				   $(".s_box .li_6 img").eq(0).show();
                });
				
				
				
				$(".access ul li").hover(function(){
			
                   $(this).children(".access ul li .li_img").stop(false,true).animate({top:"0"},500)
				    $(this).children(".access ul li h1").stop(false,true).animate({top:"223px"},500)
                    },function(){
						
                    $(this).children(".access ul li .li_img").stop(false,true).animate({top:"-60px"},500)
					 $(this).children(".access ul li h1").stop(false,true).animate({top:"173px"},500)
                });
				
				
})











