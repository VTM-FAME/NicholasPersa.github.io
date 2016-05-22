$(document).ready(function(){
    $('#navigationBar').data('size','big');
});

	var scrollUpTick = 0;
	var scrollDownTick = 0;
	var scrollLast = 0;

$(window).scroll(function(){
	
	if($(window).scrollTop() + $(window).height() >= $(document).height()){
		$('#superWow').addClass('foundIt');
	}
	else{
		$('#superWow').removeClass('foundIt');
	}
	
	var banner = 200;
	var name = 200;

	if($(window).width() >= 1070 && $(window).height() >= 600){
		if($(document).scrollTop() > 100)
		{
			if($('#navigationBar').data('size') == 'big')
			{
				$('#navigationBar').data('size','small');
				$('header nav a').stop().animate({
				height:"60px"
					},banner);
				$('#rainName').stop().animate({
					"font-size":".5em",
					"letter-spacing": "-.13em",
					"line-height":"25px",
					"padding-top":"20px",
					"padding-bottom":"5px"
					},name);
			$('#projectSelect').stop().animate({
				"margin-top": "60"},name);
				$('#navigationBar').stop().animate({
				height:'60px',
					},banner);
			}
		}
		else
		{
			if($('#navigationBar').data('size') == 'small')
			{
				$('#navigationBar').data('size','big');
				$('header nav a').stop().animate({
				height:"110px"
					},banner);
				$('#rainName').stop().animate({
					"font-size":"100%",
					"letter-spacing": "-.13em",
					"line-height":"60px",
					"padding-top":"25",
					"padding-bottom":"0px"
					},name);
			$('#projectSelect').stop().animate({
				"margin-top": "110"},name);
				$('#navigationBar').stop().animate({
				height:'110px'
					},banner);
			}
		}
	}
	
	var scrollDirection = $(this).scrollTop();
	if(scrollDirection > scrollLast){
		scrollUpTick=0;
		scrollDownTick++;
		if(scrollDownTick > 50 || Math.abs(scrollDirection - scrollLast) > 40){
			$('header').addClass('headerGhost');
		}
	}
	else{
		scrollDownTick=0;
		scrollUpTick++;
		if(scrollUpTick > 50 || scrollDirection==0 || Math.abs(scrollDirection - scrollLast) > 40){
			$('header').removeClass('headerGhost');
		}
	}
	scrollLast = scrollDirection;

});

$(window).resize(function(){

	var banner = 200;
	var name = 200;

	if($(window).width() < 1070 || $(window).height() < 847){
		if($('#navigationBar').data('size') == 'big')
		{
			$('#navigationBar').data('size','small');
			$('header nav a').stop().animate({
			height:"60px"
				},banner);
			$('#rainName').stop().animate({
				"font-size":".5em",
				"letter-spacing": "-.13em",
				"line-height":"25px",
				"padding-top":"20px",
				"padding-bottom":"6px"
				},name);
			$('#projectSelect').stop().animate({
				"margin-top": "60"},name);
			$('#navigationBar').stop().animate({
			height:'60px',
				},banner);
		}
	}
	else
	{
		if($('#navigationBar').data('size') == 'small')
		{
			$('#navigationBar').data('size','big');
			$('header nav a').stop().animate({
			height:"110px"
				},banner);
			$('header h1 a').stop().animate({
				"font-size":"100%",
				"letter-spacing": "-.13em",
				"line-height":"60px",
				"padding-top":"25",
				"padding-bottom":"0px"
				},name);
			$('#projectSelect').stop().animate({
				"margin-top": "110"},name);
			$('#navigationBar').stop().animate({
			height:'110px'
				},banner);
		}
	}
});


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 200);
    return false;
});

/* this is not a mobile friendly choice $(window).on('mousemove', function(isAtTop) {
    clearTimeout($(this).data('timer'));

    if ( isAtTop.pageY < 60 ) {
        $(this).data('timer',
            setTimeout(function() {
				$('header').removeClass('headerGhost');
            }, 1000)
        );
    }
});*/





