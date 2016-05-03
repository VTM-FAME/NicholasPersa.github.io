$(document).ready(function(){
	
	//Enable the text for page
	$("#homeMenu").click(function(){
		$("#introSheet").toggleClass("displayThis");
	});
	
	//Enable parallax on background
	var scene = document.getElementById('homeBackground');
	var parallax = new Parallax(scene);
	
	//Begin the title animations
	HomeAnimationStart();
	
	function HomeAnimationStart() {
		window.onload = function(){
			BounceIn("homeTitle","0px",500, "-100%", 4000);
			SwipeIn("hello", "50%", 500, "-100%", 4400);
			SwipeIn("homeMenu", "50%", 500, "150%", 4800);
		};
	}
	
	//Animation functions
	function BounceIn(element, height, time, dropHeight, delay) {
		$("#"+element).css("top",dropHeight);
		document.getElementById(element).style.display = "block";
		$("#"+element).velocity({top:height},{duration:time,easing:"spring", delay:delay});
	}
	
	function SwipeIn(element, swipe, time, dropHeight, delay){
		$("#"+element).css("left",dropHeight);
		document.getElementById(element).style.display = "block";
		$("#"+element).velocity({left:swipe},{duration:time,easing:"spring", delay:delay});
	}
	
});
