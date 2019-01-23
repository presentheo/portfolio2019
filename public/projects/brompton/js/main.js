//스크립트 소스는 여기에

$(function(){
	// gallery
	$('#menu-all').click(function(){
		$('#featured .row>li').css('display', 'block');
		event.preventDefault();
	});
	$('#menu-standard').click(function(){
		$('#featured .row>li').css('display', 'none');
		$('#featured .row .standard').css('display', 'block');
		event.preventDefault();
	});
	$('#menu-special').click(function(){
		$('#featured .row>li').css('display', 'none');
		$('#featured .row .special').css('display', 'block');
		event.preventDefault();
	});
	$('#menu-colored').click(function(){
		$('#featured .row>li').css('display', 'none');
		$('#featured .row .colored').css('display', 'block');
		event.preventDefault();
	});
	$('#menu-mono').click(function(){
		$('#featured .row>li').css('display', 'none');
		$('#featured .row .mono').css('display', 'block');
		event.preventDefault();
	});

	$('#navi .navi-btn a').click(function(){
		$('#navi .gnb-mobile').slideToggle();
		event.preventDefault();
	});

	$('.flickerplate').flicker({
		auto_flick: true,
		auto_flick_delay: 5,
		theme: 'light',
		flick_animation: 'transition-slide',
		dot_navigation: false
	});


});
