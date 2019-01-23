//sticky js

$(function(){

	var navOffset = $('#navi').offset().top;
	//alert()navOffset;
	
	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		if(scrollPos>=navOffset){
			$('#navi').addClass('fixed');
			// $('#services').css('padding-top', 105);			
		}else{
			$('#navi').removeClass('fixed');
			// $('#services').css('padding-top', 0);
		}
	});
	
});