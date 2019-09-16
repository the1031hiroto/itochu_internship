$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

var ua = navigator.userAgent;
if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
	$(function() {
		$(window).on('load scroll', function() {
		var value = $(this).scrollTop();

		if ( value > $('#block2').offset().top ) {
			$('nav').addClass('d-block');
		}
		});
	});
}