$(document).ready(function(){
    $('header').data('size','big');
});

$(window).scroll(function(){

	var banner = 200;
	var name = 200;
	//alert($(document).scrollTop());
	
	if($(window).width() >= 944 && $(window).height() >= 600){
		if($(document).scrollTop() > 100)
		{
			if($('header').data('size') == 'big')
			{
				$('header').data('size','small');
				$('header').stop().animate({
				height:'30px',
					},banner);
				
				document.getElementById("logo").innerHTML = '<a href="home.html"><img src="image/LuccaSm.jpg" height="100%" width="118.5" style="position:relative; left:10px; z-index:110;" /></a>';
				
			}
		}
		else
		{
			if($('header').data('size') == 'small')
			{
				$('header').data('size','big');
				$('header').stop().animate({
				height:'110px'
					},banner);
				document.getElementById("logo").innerHTML = '<a href="home.html"><img src="image/Lucca.jpg" height="100% z-index:110;" /></a>';
				
			}
		}
	}
});


$(window).resize(function(){

	var banner = 200;
	var name = 200;
	
    if($(window).width() < 944 || $(window).height() < 600)
    {
        if($('header').data('size') == 'big')
        {
            $('header').data('size','small');
            $('header').stop().animate({
                height:'30px',
            },banner);
			
			document.getElementById("logo").innerHTML = '<a href="home.html"><img src="image/LuccaSm.jpg" height="100%" width="118.5" style="position:relative; left:10px; z-index:110;" /></a>';
			
			try{document.getElementById("banner").style.visibility='hidden';}catch(e){console.log("not on home page");}

        }
    }
    else
    {
        if($('header').data('size') == 'small')
        {
            $('header').data('size','big');
            $('header').stop().animate({
                height:'110px'
            },banner);
			document.getElementById("logo").innerHTML = '<a href="home.html"><img src="image/Lucca.jpg" height="100% z-index:110;"/></a>';
			
			try{document.getElementById("banner").style.visibility='visible';}catch(e){console.log("not on home page");}

        }  
    }
});