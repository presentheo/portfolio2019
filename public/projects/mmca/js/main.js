(function($){
    $.aniPage=function(e,type){
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
            $("body, html").animate({
                scrollTop:$(window).scrollTop()-$(window).height()
            },400,function(){
                    $.aniOk = 0;
            });
        }else{
            $("body, html").animate({
                scrollTop:$(window).scrollTop()+$(window).height()
            },400,function(){
                    $.aniOk = 0;
            });
        }
    };
})(jQuery);
	if($('#main-contents').css('float') == 'left'){
	  $(function(){
	      $("#main-contents").height($(window).height());
	      $.aniOk=0;
	      $(window).scrollTop(0);
	  });

	  $('#main-contents').on("mousewheel DOMMouseScroll",function(e){
	      e.preventDefault();
	      if($.aniOk == 0){
	          $.aniPage(e,e.type);
	          $.aniOk = 1;
	      }
	  });
	  $('#etc-contents').on("mousewheel DOMMouseScroll",function(e){
	      e.preventDefault();
	      if($.aniOk == 0){
	          $.aniPage(e,e.type);
	          $.aniOk = 1;
	      }
	  });
	}


var utc = new Date().toJSON().slice(0,10).replace(/-/g,' / ');
document.getElementById('today-count').innerHTML = (utc);

$(function(){

	// lightbox 
	$('.gnb-btn').click(function(){
		$('#header').before('<div class="box-of-darkness"></div>');
		$('.box-of-darkness').css('display', 'block');
		$('#gnb-mobile').animate({'left' : '+=270px'}, 350);
	});
	$('#gnb-mobile>i').click(function(){
		$('#gnb-mobile').animate({'left' : '-=270px'}, 350);
		$('.box-of-darkness').remove();
	});
	$('.box-of-darkness').click(function(){
		$('#gnb-mobile').animate({'left' : '-=270px'}, 350);
		$('.box-of-darkness').remove();
	});




});