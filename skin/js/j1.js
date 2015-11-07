


$(function(){	

		$(".top-nav li .down").hide();

if(!$(".top-nav li .down").is(":animated")){
	$(".top-nav li").mouseover(

		function(){
			
				$(this).children(".top-nav li .down").stop(false,true).slideDown(500)
		})
		$(".top-nav li").mouseleave(
		function(){
				$(this).children(".top-nav li .down").stop(false,true).slideUp(500)
			
		})}

	
	$(".PS ul li").eq(2).addClass("PS ul RT");
	

			
			
			
		
})
$(function(){	
		
		$(".access ul li").hover(function(){
			
                   $(this).children(".access ul li .li_img").css("height","174px")
				    $(this).children(".access ul li h1").css("margin-top","35px")
                    },function(){
						
                    $(this).children(".access ul li .li_img").css("height","114px")
					 $(this).children(".access ul li h1").css("margin-top","59px")
                });
				
				
				
				
				
				
				$(".banner img").hide();
	$(".banner img").eq(0).fadeIn();
	$(".button a").hover(function(){
		$(".button a").removeClass("white");
		$(this).addClass("white");
		var x=$(".button a").index(this);
		$(".banner img").hide();
		$(".banner img").eq(x).show();
	
	
		})



	
	var n=0
	function run(){
		if(n>1){
			n=0;
		}else{
			n=n+1;
		}
		
		$(".banner img").hide();
		$(".banner img").eq(n).fadeIn(2000);
		$(".button a").removeClass("white");
		$(".button a").eq(n).addClass("white");
		
	}
	var timer=setInterval(run,5000);
	$(".banner").hover(function(){
		clearInterval(timer);	
	},function(){
		timer=setInterval(run,5000);
		
	})			
				
				
				
})

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