
$(function(){
	var BarB = $("#bar_bg"),
		BarC = $("#bar_click"),
		BarP = $("#bar_percent"),
		BarI = $("#bar_input"),
		BarBW = BarB.width(),
		BarCMove=false,
		BarCX;
	BarC.mousedown(function(e){
		BarCMove=true;
		var BarBX = parseInt(BarC.css("left"));
		BarCX=e.pageX-BarBX;
	});
	$(document).mousemove(function(e){
		if(BarCMove){
			var PageX = e.pageX;
			var CX=PageX-BarCX;
			if(CX<=0){
				CX=0
			}else if(CX>=BarBW){
				CX = BarBW
			}else{
				CX = PageX - BarCX;
			};
			BarC.css({"left":CX});
			BarP.css({"width":parseInt(CX/BarBW*100)+"%"});
			BarI.text(parseInt(CX)+"MB");
		}
	}).mouseup(function(){
		BarCMove=false;
	});
});