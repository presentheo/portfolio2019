$(function(){

	// 포트폴리오, 팀 멤버 롤오버
	var imgItem = $("#portfolio .grid a, #team .col-md-4>div");

	imgItem.hover(
		function(){
			$(this).children('img').attr("src", $(this).children('img').attr("src").replace(/_off(\.gif|\.jpg|\.png)$/, "_on$1"));
		},
		function(){
			$(this).children('img').attr("src", $(this).children('img').attr("src").replace(/_on(\.gif|\.jpg|\.png)$/, "_off$1"));
		}
	);

});