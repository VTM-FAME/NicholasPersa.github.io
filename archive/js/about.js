$(document).ready(function(){
	
	//Style loading bar
	document.body.style.background = "#fff";
	
	//UI for loading contact info over about info
	var counter = true;
	$("#contact").click(function(){
		
		if(counter){
			document.getElementById("paraText").innerHTML = "<p>Twitter:@NicholasPersa</p><p>Email:neptunes.bb@gmail.com</p>";
			document.getElementById("contactButton").innerHTML = "revert";
		}else{
			document.getElementById("paraText").innerHTML = "<p class='firstPara'>I have wanted to build this collection for quite some time.</p><p>Over the years, I have seen this building as I go to school, work, run errands, party, drive aimlessly, or any other reason for travel.</p><p>I&apos;ve had every expression right before I see this building: happy, dreary, aloof, angry, zombified, and so on.</p><p class='lastPara'>I can&apos;t imagine what it&apos;ll be like to move one day. Will it be replaced?</p>";
			document.getElementById("contactButton").innerHTML = "contact";
		}
		counter = !counter;
	});
	
	//About box animation functions
	function FadeIn (element, time){
		$("#"+element).velocity("fadeIn", {duration:500, delay:time});
	}
	
	function BounceIn(element, height, time, dropHeight, delay) {
		
			//var currentHeight = $("#"+element).offset().top;
			//document.getElementById(element).style.display = "none";
		$("#"+element).css("top",dropHeight);
		document.getElementById(element).style.display = "block";
		$("#"+element).velocity({top:height},{duration:time,easing:"easeSineIn", delay:delay});
	}
	
	//Execute functions when window loads
	window.onload = function(){
		BounceIn("aboutSheet", "10%", 1500,"100%", 3000)
	};
	
});