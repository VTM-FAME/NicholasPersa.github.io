$(document).ready (function() {
	
	//Scroll to top of page on load
	$("body").scrollTop(0);
	
	function InitializePage () {

		if(Math.random() > 0.7){
			document.getElementById("titleOfVideo").innerHTML = "The Cookie";
			document.getElementById("headerText").innerHTML = "The <span class='standout'>Cookie</span>";
			document.getElementById("contextInfo").innerHTML = "Experimental film, <em>Cookie</em>, recreates the living world in a prerecorded shot sequence. In this series, cookies can be eaten by one of three ways. <span class='embolden tighten'>YOU</span> will have total control over your cookie eating. Imagination required.";
		}
		else{
			playRing = true;
			document.getElementById("titleOfVideo").innerHTML = "The Ring";
			document.getElementById("headerText").innerHTML = "The <span class='standout'>Ring</span>";
			document.getElementById("contextInfo").innerHTML = "Experimental film, <em>RING</em>, recreates the living world in a prerecorded shot sequence. In this series, a number of phone calls are recieved and <span class='embolden tighten'>YOU</span> are able to play a role in controlling the responses. Imagination required.";
		}
	}
	
	var playRing = false;
	InitializePage();
	
	
	//CSS Hover
	//Mobile resolution
	$("#videos").hover(function() {
		$("#centerBlock").addClass("disappear");

	}, function(){
		$("#centerBlock").removeClass("disappear");
	});
	
	//Desktop resolution
	$("#whatIs").hover(function() {
		$("#nowWhat").addClass("appear");
		$("#titleOfVideo").addClass("hiddenBlock");
		$("#titleSquare").addClass("hiddenBlock");
		$("#playVideo").addClass("hiddenBlock");
		$("#centerBlock").addClass("whatIsBk");

	}, function(){
		$("#nowWhat").removeClass("appear");
		$("#titleOfVideo").removeClass("hiddenBlock");
		$("#titleSquare").removeClass("hiddenBlock");
		$("#playVideo").removeClass("hiddenBlock");
		$("#centerBlock").removeClass("whatIsBk");
	});
	
	$(".nav2").hover(function() {
		$("#filmInfo").addClass("appear");
		
		if(runImg){
		
			runImg = false;
			for(var i = 0; i < 6; i++){
				//OperateEd();
			}
	
		}else{}
		
	}, function(){
		$("#filmInfo").removeClass("appear");
		runImg = true;
		
	});
	
	//CSS Animation for UI
	$("#pickUp").hover(function() {
		document.getElementById("radiance").style.display = "none";
	}, function(){
		document.getElementById("radiance").style.display = "block";
	});
	
	$("#dunk").hover(function() {
		$("#dunk").velocity({top:"-=20px"}, 200);
	}, function(){
		$("#dunk").velocity({top:"+=40px"}, 200).velocity({top:"-=30px"}, 200).velocity({top:"+=10px"}, 200);
	});
	
	$("#devour").hover(function() {
		$("#devour").velocity({top:"-=20px"}, 200);
	}, function(){
		$("#devour").velocity({top:"+=40px"}, 200).velocity({top:"-=30px"}, 200).velocity({top:"+=10px"}, 200);
	});
	
	$("#twist").hover(function() {
		$("#twist").velocity({top:"-=20px"}, 200);
	}, function(){
		$("#twist").velocity({top:"+=40px"}, 200).velocity({top:"-=30px"}, 200).velocity({top:"+=10px"}, 200);
	});
	
	//Reload page (go home)
	$(".nav1").click(function(){
		location.reload();
	});
	
	//Load another film
	$("#playAnother").click(function() {
		playRing = false;
		InitializePage();
		PrepareTheater();
		document.getElementById("playAnother").style.display = "none";
	});
	
	//Load film based on navigation UI
	$(".ringVideo").click(function() {
		if($(window).width() >= 750){
			document.getElementById("videos").style.display = "none";}else{}
		NavigationSelect(false);
	});
	$(".cookieVideo").click(function() {
		if($(window).width() >= 750){
			document.getElementById("videos").style.display = "none";}else{}
		NavigationSelect(true);
	});
	
	//Load theater
	$("#centerBlock").click(function(){
		PrepareTheater();
	});
	
	//UI for cookie film
	$("#dunk").click(function(){
		if ( $('#dunk').attr('disabled') == "disabled" ) {
			return false;
		}
		else {
			$("#dunk").attr('disabled','disabled');
			$("#devour").attr('disabled','disabled');
			$("#twist").attr('disabled','disabled');
			DunkClick();
			$("#devour").animate({height:"0"}, 1000);
			$("#twist").animate({height:"0"}, 1000);
		}

	});
	
	$("#devour").click(function(){
		if ( $('#devour').attr('disabled') == "disabled" ) {
			return false;
		}
		else {
			$("#dunk").attr('disabled','disabled');
			$("#devour").attr('disabled','disabled');
			$("#twist").attr('disabled','disabled');
			DevourClick();
			//$("#cookieUI").animate({height:"0vw"}, 1000); //NO LONGER USED
			$("#dunk").animate({height:"0"}, 1000);
			$("#twist").animate({height:"0"}, 1000);
		}
	});
	
	$("#twist").click(function(){
		if ( $('#twist').attr('disabled') == "disabled" ) {
			return false;
		}
		else {
			$("#dunk").attr('disabled','disabled');
			$("#devour").attr('disabled','disabled');
			$("#twist").attr('disabled','disabled');
			TwistClick();
			$("#devour").animate({height:"0"}, 1000);
			$("#dunk").animate({height:"0"}, 1000);
		}
	});
	
	//Prepares DIV elements for theater operation
	function PrepareTheater(){
		//Animates buttons to zero width
		if($(window).width() >= 750){//Stubborn DIV fix
			document.getElementById("videos").style.display = "none";}else{}
		$(".buttons").addClass("minimize");
		
		//Makes text transparent for stubborn div
		//Artistic text makes animating DIV BK difficult
		document.getElementsByClassName("whatIsText")[0].style.display = "none";
		document.getElementsByClassName("videoNavText")[0].style.color = "transparent";
		
		document.getElementsByClassName("navVideo")[0].style.display = "none";
		document.getElementsByClassName("navVideo")[1].style.display = "none";
		$("#titleSquare").fadeTo("fast",0);
		$("#titleOfVideo").fadeTo("fast",0);
		$("#playVideo").fadeTo("fast",0);

		window.setTimeout(function() {
			
			$("#centerBlock").addClass("rotate45 minimizeWindow");

			window.setTimeout(function() {

				document.getElementById("backgroundHolder").style.display = "none";
				document.getElementById("centerBlock").style.display = "none";
				
				window.setTimeout(function() {
				
					document.getElementById("header").style.display = "block";
					document.getElementById("theater").style.display = "block";
					
					window.setTimeout(function () {

						//Hide homepage grid
						document.getElementById("panelHom1").style.display = "none";
						document.getElementById("panelHom2").style.display = "none";
						//document.getElementById("panelHom3").style.display = "none";
						
						//Enable theater grid
						document.getElementById("timerBar").style.display = "block";
						document.getElementById("theaterNav").style.display = "block";
						document.getElementsByClassName("container")[0].style.height = "6vw";
						
						if(playRing){
							document.getElementById("filmRing1").style.display = "block";
							PlayRing();
						}else{
							CookieDisplay();
							PlayCookie();
						}
						
					},1000); //Swap to theater grid from homepage grid
					
				},300);//Make theater visible
				
			},1200);//Disable centerBlock
			
		},1000);//Animation: theater and grid
		
	}//Begin moving to theater from homepage
	
	
	//Initial variables for cookie code
	var cookieScene =[
		"Cookie 3 Stack",//0
			"Devour 3 Stack", "Dunk 3 Stack", "Twist 3 Stack",//1 2 3
		"Cookie 2 Stack",//4
			"Devour 2 Stack", "Dunk 2 Stack", "Twist 2 Stack",//5 6 7
		"Cookie 1 Stack",//8
			"Devour 1 Stack", "Dunk 1 Stack", "Twist 1 Stack",//9 10 11
		"Cookie End"];//12
	
	var currentCookie = 0;
	var currentStack = 0;
	var cookieVideo;
	var cookieSrc;
	var clicked = false;
	
	function PlayCookie () {
		console.log("playing: "+cookieScene[currentCookie]);
		LoadCookie();
	}
	
	function LoadCookie () {

		cookieVideo = document.getElementById('filmCookie');
		cookieSrc = document.getElementsByClassName('SOURCE')[2];
		
		console.log("clicked: "+clicked);
		
		if(clicked == false && currentStack == 0){
			currentCookie = 0;
			cookieSrc.src = "HTML Clips/Cookie/" + cookieScene[currentCookie] + ".mp4";
		}
		
		else if(currentStack == 0){
			currentStack = 4;
			cookieSrc.src = "HTML Clips/Cookie/" + cookieScene[currentCookie] + ".mp4";
			currentCookie = 4;
		}
		else if(clicked == false && currentStack == 4){
			cookieSrc.src = "HTML Clips/Cookie/" + cookieScene[currentCookie] + ".mp4";
		}
		else if(currentStack == 4){
			currentStack = 8;
			cookieSrc.src = "HTML Clips/Cookie/" + cookieScene[currentCookie] + ".mp4";
			currentCookie = 8;
		}
		else if(clicked == false && currentStack == 8){
			cookieSrc.src = "HTML Clips/Cookie/" + cookieScene[currentCookie] + ".mp4";
		}
		else if(currentStack == 8){
			cookieSrc.src = "HTML Clips/Cookie/" + cookieScene[currentCookie] + ".mp4";
			currentCookie = 12;
			currentStack = 12;
		}
		else{//currentStack == 12
			cookieSrc.src = "HTML Clips/Cookie/" + cookieScene[currentCookie] + ".mp4";
			currentCookie = 13;
			currentStack = 13;
		}
		
		console.log("Next2load: "+cookieScene[currentCookie]);

		cookieVideo.load();
		
		cookieVideo.oncanplay = function () {
			
			if(Math.random() > .5){
				for(var i = 0; i < 3; i++){//OperateEd();//NO LONGER USED
				}
			}else{}
			
			cookieVideo.play();
			
			if(clicked == false){OperateTimer();}
			else{ ClearTimer();}
			
			$(cookieVideo).bind("ended", function () {
			
				$(this).unbind("ended");
				
				clicked = false;
				
				$("#dunk").removeAttr('disabled');
				$("#devour").removeAttr('disabled');
				$("#twist").removeAttr('disabled');
				
				if(currentCookie < 12){
					document.getElementById("cookieUI").style.display = "block";
					$("#dunk").animate({height:"100%"}, 1000);
					$("#devour").animate({height:"100%"}, 1000);
					$("#twist").animate({height:"100%"}, 1000);
				}
				else{
					$("#dunk").animate({height:"0"}, 1000);
					$("#devour").animate({height:"0"}, 1000);
					$("#twist").animate({height:"0"}, 1000);
				}
				
				if(currentCookie > 12){
					document.getElementById("header").style.display = "none";
					document.getElementById("filmCookie").style.display = "none";
					document.getElementById("timerBar").style.display = "none";
					document.getElementById("theaterNav").style.display = "none";
					
					document.getElementById("playAnother").style.display = "block";
					document.getElementById("backgroundHolder").style.display = "block";

				}
				else{
					NextCookie();}
			});
			
		};
	}
	
	function CookieDisplay () {
	
		console.log("animation");
		document.getElementById('filmRing1').style.display = "none";
		document.getElementById('filmCookie').style.display = "block";
		document.getElementById("cookieUI").style.display = "block";
		$("#cookieUI").animate({height:"15vw"}, 1000);
		
	}
	
	function NextCookie() {
	
		console.log("next scene");
		PlayCookie();
		
	}
	
	function DevourClick () {
			clicked = true;
			currentCookie+=1;
			PauseCookie();
			PlayCookie();
	}
	
	function DunkClick () {
			clicked = true;
			currentCookie+=2;
			PauseCookie();
			PlayCookie();
	}
	
	function TwistClick () {
			clicked = true;
			currentCookie+=3;
			PauseCookie();
			PlayCookie();
	}
	
	function OperateTimer () {
	
		document.getElementById("counter").style.display = "block";
		$("#counter").animate({width:"80%"}, 0);
		$("#counter").animate({width:"0px"}, cookieVideo.duration*1000);
		console.log("timer: "+cookieVideo.duration*1000);
		
	}
	
	function ClearTimer () {
	
		$("#counter").animate({width:"80%"}, 0);
		document.getElementById("counter").style.display = "none";
		
	}
	
	function PauseCookie() {
	
		var temp = document.getElementById('filmCookie');
		$(temp).unbind("ended");
		temp.pause();
		
	}
	
	
	//CODE THAT RUNS THE RING FILM SERIES
	//Regulating variables
	var ticker;
	var interval;
	var counter;
	var pickedUp;
	var pickCountTemp;
	
	var sceneID;
	var sceneFrequency;
	var sceneNames;

	var goodSelected;
	var nonresponsive;
	
	var audioID;
	var audioFrequency;
	var audioIDBad;
	var audioFrequencyBad;
	var audioIDGood;
	var audioFrequencyGood;
	var audioNames;
	
	var random_clip;
	var random_audio;
	var random_audioBad;
	var random_audioGood;
	
	function PlayRing() {
		
		//Assign values to regulating variables.
		counter = 9;
		pickedUp = false;
		goodSelected = true;
		nonresponsive = true;
		
		sceneID = [0, 1, 2];
		sceneFrequency = [.2, .6, .2];
		sceneNames = ["PBJ", "Pickup", "WalMart"];
		
		audioFrequency = [.4, .1, .1, .2, .2];
		audioID = [1, 2, 3, 4, 5];
		audioIDBad = [1, 5];
		audioFrequencyBad = [.4, .6];
		audioIDGood = [2, 3, 4];
		audioFrequencyGood = [.2, .4, .4];
		audioNames = ["Ass", "Clouds", "Golf", "Tuba", "Who"];

		
		//Setup stop condition for when user has clicked UI.
		$("#pickUp").click( function() {
		
			pickedUp = true;
			
		});
		
		$("#leftHemi").click( function() {
		
			goodSelected = true;
			nonresponsive = false;
			$("#leftHemi").addClass("selected");
			$("#rightHemi").removeClass("selected");
			
		});
		
		$("#rightHemi").click( function() {
		
			goodSelected = false;
			nonresponsive = false;
			$("#rightHemi").addClass("selected");
			$("#leftHemi").removeClass("selected");
			
		});


		//Countdown loop for starting scene; the film officially starts.
		ticker = setInterval(function() {
			
			//Check to see if user has interacted, and load next clip if true.
			if(pickedUp){
			
				random_clip = getRandomClip(sceneID, sceneFrequency);
				random_audio = getRandomClip(audioID, audioFrequency);
				random_audioBad = getRandomClip(audioIDBad, audioFrequencyBad);
				random_audioGood = getRandomClip(audioIDGood, audioFrequencyGood);

				clearInterval(ticker);
				pauseVideo();
				
				if(random_clip == 1){
				
					loadVideo(sceneNames[random_clip], true, false, 1);
					
				}else{
				
					loadVideo(sceneNames[random_clip], true, false, 2);

				}
		
			}else{
				//Upon first pass, play starter scene.
				if(counter == 9){
				
					loadVideo("Intro Loop", true, true, 0);
					
				}else{}
				
				//Countdown.
				counter--;
				
				//Check stop condition of countdown and load next scene if true.
				if(counter <= 0) {
				
					//When finished with countdown, reset if no response in UI.
					clearInterval(ticker);
					PlayRing();
					
				} else {
				
					//Update the countdown timer.
					//NO LONGER USED
					//document.getElementById("seconds").innerHTML = counter.toString();
				}
			}
			//1000 == 1 second timing for countdown.
		}, 1000);
	}
	
	function responseAnimation () {
	
		document.getElementById("selectResponse").style.display = "block";
		$("#selectResponse").animate({height:"20vw"}, 1000);
		document.getElementById("responseCountdown").style.display = "inline-block";
		
		var time = 0;
		var i = 7;
		
		interval = setInterval(function() {
		
			$("#responseCountdown").text(i);
			if (i == time) {
				clearInterval(interval);
				document.getElementById("responseCountdown").style.display = "none";
				$("#responseCountdown").text(7);
				
			}
			else if (i == 1){
				$("#selectResponse").animate({height:"0vw"}, 1000);
			}
			i--;
			
		}, 1000);
		
		window.setTimeout(function(){
		
			if(nonresponsive){
				audio = new Audio("HTML Clips/Ring/Audio "+audioNames[random_audio-1]+".mp3");
				audio.play();
			}
			else{
				if(goodSelected){
					audio = new Audio("HTML Clips/Ring/Audio "+audioNames[random_audioGood-1]+".mp3");
					audio.play();
				}
				else{
					audio = new Audio("HTML Clips/Ring/Audio "+audioNames[random_audioBad-1]+".mp3");
					audio.play();
				}
			}
		}, 8000);
	}
	
	function switchAnimation () {
	
		document.getElementById("filmRing1").style.display = "none";
		document.getElementById("pickUpText").style.display = "none";
		$("#pickUp").animate({height:"0"}, 500, function() {
			document.getElementById("pickUp").style.display = "none";
		});
		document.getElementById("counter").style.display = "none";
		document.getElementById("filmRing2").style.display = "block";
	}
	
	function introAnimation () {
	
		document.getElementById("filmRing1").style.display = "block";
		document.getElementById("pickUp").style.display = "block";
		$("#pickUp").animate({height:"10vw"},500, function(){
			document.getElementById("pickUpText").style.display = "block";
		});
		
		$("#counter").animate({width:"80%"}, 0);
		$("#counter").animate({width:"0px"}, 9000);
		
		if(Math.random() > .5){
		
			for(var i = 0; i < 3; i++){//OperateEd();//NO LONGER USED
			}
			
		}else{}
		
		document.getElementById("counter").style.display = "block";
	
	}

	function loadVideo(id, play, intro, sceneType)
	{
		if(intro){
			var video = document.getElementById('filmRing1');
			var mp4 = document.getElementsByClassName('SOURCE')[0];
		}
		else{
			var video = document.getElementById('filmRing2');
			var mp4 = document.getElementsByClassName('SOURCE')[1];
		}
		
		
		mp4.src = "HTML Clips/Ring/Ring " + id + ".mp4";
		
		video.load();
		
		if(play){
			
			if(!intro){
				video.oncanplay = function () {
					video.play();
					switchAnimation();
					if(sceneType == 1){responseAnimation();}
					else{}
				};
			}
			else {
				video.oncanplay = function () {
					video.play();
					introAnimation();
				};
			}
		}
		else{}
	}
	
	function pauseVideo() {
		var temp = document.getElementById('filmRing1');
		temp.pause();
	}
	
	function playVideo () {
		var temp = document.getElementById('filmRing1');
		temp.play();
	}
	
	//Function to choose next scene randomly.
	var randomSelection = function(min, max) {
	
		return Math.random() * (max - min) + min;
		
	};
	
	//Get random element from arrays
	var getRandomClip = function(list, weight) {
	
		var total_weight = weight.reduce(function(previous, current, i, array){
			return previous + current;
		});
		
		var random_num = randomSelection(0, total_weight);
		var weight_sum = 0;
		
		for(var i = 0; i < list.length; i++) {
		
			weight_sum += weight[i];
			weight_sum = +weight_sum.toFixed(2);
			
			if(random_num <= weight_sum){
				return list[i];
			}
		}
	};
	
	function SelectPage (ifTrue) {
	
		if(ifTrue){
			CookieDisplay();
			document.getElementById("titleOfVideo").innerHTML = "The Cookie";
			document.getElementById("headerText").innerHTML = "The <span class='standout'>Cookie</span>";
			document.getElementById("contextInfo").innerHTML = "Experimental film, <em>Cookie</em>, recreates the living world in a prerecorded shot sequence. In this series, cookies can be eaten by one of three ways. <span class='embolden tighten'>YOU</span> will have total control over your cookie eating. Imagination required.";
		}
		else{
			playRing = true;
			document.getElementById("titleOfVideo").innerHTML = "The Ring";
			document.getElementById("headerText").innerHTML = "The <span class='standout'>Ring</span>";
			document.getElementById("contextInfo").innerHTML = "Experimental film, <em>RING</em>, recreates the living world in a prerecorded shot sequence. In this series, a number of phone calls are recieved and <span class='embolden tighten'>YOU</span> are able to play a role in controlling the responses. Imagination required.";
		}
	}
	
	function NavigationSelect (whichVideo) {
	
		playRing = false;
		SelectPage(whichVideo);
		PrepareTheater();
		
	}
	
	//ED related variables //NO LONGER USED
	var runImg = true;
	var stopImg = false;
	var backAndForth = true;
	var number;
	var timeouts = [];
	var type;

	function OperateEd () {//NO LONGER USED
		
			if($(window).width() < 586){return false;}
			
			StopTracked();
			$("#scrolling2D").fadeTo(0,1);
			type = playRing ? "person" : "oreo";
		
			number = Math.random();
			var imgID = Math.round(number * 1200);
			console.log(type);
			$("#scrolling2D").append("<img id = "+imgID+" src='images/"+type+".gif' />");
		
			document.getElementById("scrolling2D").style.display = "block";
		
			var height = number * (300 - 60) + 60;
			if(type == "person"){
				var height = number * (250 - 60) + 60;
			}
			var time = number * (8000 - 4500) + 4500;
			var layer = Math.round(number * 100);
			//var top = (10 + (number * 120)) + "px";
		
			document.getElementById(imgID).style.height = height +"px";
			document.getElementById(imgID).style.zIndex = layer;
			//document.getElementById("ED").style.marginTop = top;//NO LONGER USED
		
			if(backAndForth){
				backAndForth = !backAndForth;
				//$("#"+EDD).removeClass("flipped");//NO LONGER USED
				$("#"+imgID).velocity({left:"-100%"}, 0);
				$("#"+imgID).velocity({left:"100%"}, time);
			}
			else{
				backAndForth = !backAndForth;
				//$("#"+EDD).addClass("flipped");//NO LONGER USED
				$("#"+imgID).velocity({left:"100%"}, 0);
				$("#"+imgID).velocity({left:"-100%"}, time);
			}
		
			if(!runImg){
				setTimeout(OperateEd, time);
			}
			else{
			
				timeouts.push(setTimeout(function(){
					
					$("#scrolling2D").fadeTo(2000,0);
					
					setTimeout(function(){
						$("#scrolling2D").empty();
					},2000);
					
				}, 5000));
					
			}
	}
	
	function StopTracked () {
	
		for(var i = 0; i < timeouts.length; i++)
		{
			clearTimeout(timeouts[i]);
		}
		
		timeouts = [];
	}
	

});//Ready Function WOOT WHAT A LOT OF CODE






