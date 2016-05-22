$(document).ready(function(){

//Hover functions for work example images
$(".workImageSecond").hover(function(){
	
	//prevents mobile hover
	if($(window).width() > 650){
			//console.log("check");
		var targetToMove = $(this).data("paired");
		$("."+targetToMove).removeClass("selected");
		$("."+targetToMove).addClass("inactive");
		
		$("."+targetToMove).velocity({left:"-33.33334%"});
		/*$("."+targetToMove).css({
		 "filter":"grayscale(100%)",
		 "-webkit-filter":"grayscale(100%)"
		 });*/
		
		$(this).css({
			"filter":"grayscale(0%)",
			"-webkit-filter":"grayscale(0%)"
			});
		
	}
	
},function(){

	if($(window).width() > 650){
		var targetToMove = $(this).data("paired");
		$("."+targetToMove).velocity({left:"0%"});
			//$("."+targetToMove).css({
			//	"filter":"grayscale(0%)",
			//	"-webkit-filter":"grayscale(0%)"
			//});
		$(this).css({
			"filter":"grayscale(100%)",
			"-webkit-filter":"grayscale(100%)"
			});
	}
	
});

//Add color to active target
$(".imageClip").hover(function(){
	$(this).removeClass("inactive");
	$(this).addClass("selected");
},function(){
	$(this).removeClass("selected");
	$(this).addClass("inactive");
});

//Operation of tabs for experience info
$(".expTab").click(function(){
	if($(this).data("experience") == "jobs")
	{
		document.getElementById("jobs").style.display = "block";
		document.getElementById("phd").style.display = "none";
		document.getElementById("bs").style.display = "none";
	}
	else if($(this).data("experience") == "phd")
	{
		document.getElementById("jobs").style.display = "none";
		document.getElementById("phd").style.display = "block";
		document.getElementById("bs").style.display = "none";
	}
	else {
		document.getElementById("jobs").style.display = "none";
		document.getElementById("phd").style.display = "none";
		document.getElementById("bs").style.display = "block";
	}
});

//gmail copy address
function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Press Enter to Close", text);
}

$("#boxSplitMail").click(function(){
	copyToClipboard('neptunes.bb@gmail.com');
});

//unused concept of adding colors at mouse location behind clickables
function hoverClick (){

	var isHovered = $("#navigation").is(":hover");
	var mousePostion = [event.pageX, event.pageY];
	
}

//smooth scrolls for anchor tags
$('#navigation a').click(function(){
    //$('html, body').animate({
    //    scrollTop: $( $.attr(this, 'href') ).offset().top
    //}, 500);
	$('html, body').velocity('scroll', {
            duration: 800,
            offset: $( $.attr(this, 'href') ).offset().top,
            easing: 'ease-in-out'
        });
	
    return false;
});




});