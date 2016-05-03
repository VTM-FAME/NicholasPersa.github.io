$(document).ready(function(){
	//style loading bar color
	document.body.style.background = "#40bf80";
	
	//Initialize the radar pins
	function PinLayout () {
		$(".imgCircle").each(function(){
			$(this).velocity({width:"3.2vh", height:"3.2vh"},{duration:400, delay:3000+(150*($(this).index()-8)),easing:"spring"});
		});
	}
	
	//run animation of pins on load
	window.onload = function(){
		PinLayout();
	};
	
	//Warning message if user is navigating away from map
	$(window).on('beforeunload', function(){
		return "MAP PROGRESS WILL RESET. Use POV button to navigate";
	});
	
	//Setup function for radar pin transition to POV window
	$(".imgCircle").bind("click", DisplayPov);
	
	//Construct view of POV, pass data values, and add viewed class
	function DisplayPov () {
		document.getElementById("mapOverlay").style.display = "none";
		document.getElementById("screenOverlay").style.display = "block";
		document.getElementById("povBackground").style.backgroundImage = "url('image/"+$(this).data("location")+".jpg')";
		document.getElementById("pageTitle").innerHTML = $(this).data("page");
		document.getElementById("distance").innerHTML = $(this).data("miles")+" Miles";
		document.getElementById("poemContain").innerHTML = poemArray[$(this).data("page")];
		$(this).addClass("viewed");
	}
	
	//Reveal navigation
	$('#miniUI').click(function(){
		SwirlIn("povUI", 2000);
	});
	
	//Hide navigation
	$("#hidePoem").click(function(){
		SwirlOut("povUI", "13%", 1000);
	});
	
	//Transition from POV window back to map view
	$("#povTab").click(function(){
		document.getElementById("mapOverlay").style.display = "block";
		document.getElementById("screenOverlay").style.display = "none";
	});
	
	//Display red line and mile marker only on element hover
	$('#outerCircle').hover(function(){
		document.getElementById('svg').style.display = "block";
		document.getElementById('milesBox').style.display = "block";
		
	}, function(){
		document.getElementById('svg').style.display = "none";
		document.getElementById('milesBox').style.display = "none";
	});
	
	//Add UI feedback for hover on radar pin
	$('.imgCircle').hover(function(){
		document.getElementById('outerCircle').style.background = "rgba(0,0,0,.3)";
	}, function(){
		document.getElementById('outerCircle').style.background = "rgba(255,255,255,.0)";
	});
	
	//Redraw line based on mouse location and status
	document.getElementById("outerCircle").onmousemove = function() {
		var isHovered = $('#outerCircle').is(":hover");
		if(isHovered){
			DrawLine();
		}
	};
	
	//Line code
	function DrawLine(){
		
		line1 = $('#line1');
		div1 = $('#centerCircle');
		var horizontalCenter = Math.floor(window.innerWidth/2);
		var verticalCener = Math.floor(window.innerHeight/2);
		
		var pos1 = [horizontalCenter, verticalCener];
		var pos2 = [event.pageX, event.pageY];
		line1.attr('x1',pos1[0]).attr('y1',pos1[1]).attr('x2',pos2[0]).attr('y2',pos2[1]);
		
		var outerRadius = $('#outerCircle').width() / 2;
		document.getElementById("miles").innerHTML = Math.round(20 *
			(Math.sqrt(
				Math.pow(pos2[0]-pos1[0],2) +
				Math.pow(pos2[1]-pos1[1],2)
				) / outerRadius)
			);
		
		//offset the miles box from mouse location
		$("#milesBox").css('top', pos2[1]+30);
		$("#milesBox").css('left', pos2[0]+75);
	}
	
	//Poem container for dynamic loading
	var poemArray = {};
	poemArray["Lantern"] = "<p>Storm. Rain. River. Stones.</p><p>Wet. Leaves. Tender. Bones.</p><p>Going, home. Going, home.</p>";
	poemArray["Beacon"] = "<p>Even after you move,</p><p>Your muscles still turn the steering wheel to your old house.</p><p>You tell your brain that the movements are wrong but still you do it,</p><p>In case you drive back to what used to be and find that it is still yours.</p>";
	poemArray["Guidepost"] = "<p>You are my secret home:</p><p>The quiet displacement, unraveling features,</p><p>A too warm bath on a too cold night.</p><p>I never want to leave.</p>";
	poemArray["Sentinel"] = "<p>They told me to think of home.</p><p>And home is usually a building or at least a town.</p><p>But I never thought that when they told me to think of home,</p><p>I would think of you.</p>";
	poemArray["Indication"] = "<p>How do I get back home?</p><p>#home #divorce #homesick</p>";
	
	poemArray["Landmark"] = "<p>When you realized my walls couldn't be knocked down,</p><p>You built a roof on them and called it home.</p>";
	poemArray["Crest"] = '<p>She didn'+"'"+'t take me to,</p><p>"Places I have never been before."</p><p>She took me home.</p><p></p>';
	poemArray["Handpost"] = "<p>You feel safe, darling.</p><p>Just like home,</p><p>When it's raining.</p><p></p>";
	poemArray["Pagoda"] = "<p>A home built in a hot climate,</p><p>Becomes the breeze.</p><p></p><p></p>";
	poemArray["Visage"] = "<p>Run through the rubble,</p><p>Floating on cigarette breath.</p><p>Keep me; I am home.</p><p></p>";
	
	poemArray["Peephole"] = "<p>A house is where you live.</p><p>Home is where you belong.</p>";
	poemArray["Patrol"] = "<p>I was nomadic,</p><p>But I found a home in you.</p><p></p><p></p>";
	poemArray["Watchtower"] = "<p>In your heart and your mind, venture to find,</p><p>A place of your own, a place called home.</p>";
	poemArray["Observatory"] = "<p>Seeking solace in roaring whispers.</p><p>The wild feels like home to me.</p><p></p>";
	poemArray["Outlook"] = "<p>Home is where you want to be.</p><p></p><p></p>";
	
	
	//Control functions for UI on POV screen
	function SwirlOut(element, time){
		
		$("#"+element).velocity("fadeOut",{duration:1500, easing:"linear", complete: function(){
			document.getElementById("povUI").style.display = "none";
			$("#miniUI").css("left","110%");
			document.getElementById("miniUI").style.display = "block";
			$("#miniUI").velocity({left:"85%"},{duration:1000, easing:"spring"});
		}});
	}
	function SwirlIn(element, place, time){
		
		document.getElementById("povUI").style.display = "block";
		document.getElementById("miniUI").style.display = "none";
		
		$("#"+element).velocity("fadeIn",{duration:time, easing:"spring"});
	}
	
});