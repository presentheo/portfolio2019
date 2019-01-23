$(function(){

	//sub2-isotope 적용
	$('#portfolio .grid').isotope({
	  // set itemSelector so .grid-sizer is not used in layout
	  itemSelector: '.grid-item',
	  masonry: {
	    // use element for option
	    columnWidth: 387
	  }
	});

	var grid = $('.grid');

	// filtering
	$('#m1').click(function(){
		grid.isotope({filter: '.grid-item'});
		event.preventDefault();
	});
	$('#m2').click(function(){
		grid.isotope({filter: '.branding'});
		event.preventDefault();
	});
	$('#m3').click(function(){
		grid.isotope({filter: '.web'});
		event.preventDefault();
	});
	$('#m4').click(function(){
		grid.isotope({filter: '.print'});
		event.preventDefault();
	});
	$('#m5').click(function(){
		grid.isotope({filter: '.photo'});
		event.preventDefault();
	});



});