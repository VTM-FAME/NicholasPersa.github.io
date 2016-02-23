$(document).ready (function() {

	/*$("#zoom").elevateZoom({
		zoomType:"lens",
		lensShape:"round",
		lensSize:200});*/
	
/*	$("#centerBlock").click(function(){
		$(this).animate({step:function(){
			$(this).css("-webkit-transform", "rotate(0deg) translateY(0%)");
			}, duration:"slow"},"linear");
		});*/
	$("#videos").hover(function() {
		$("#centerBlock").addClass("disappear");
	}, function(){
		$("#centerBlock").removeClass("disappear");
	});
	
	$("#whatIs").hover(function() {
		$("#videos").addClass("disappear");
	}, function(){
		$("#videos").removeClass("disappear");
	});
	
	$(".nav1").click(function(){
		location.reload();
	});
	
	$("#centerBlock").click(function(){
	
		$(".buttons").addClass("minimize");
		document.getElementsByClassName("navText")[0].style.color = "transparent";
		document.getElementsByClassName("navText")[1].style.color = "transparent";
		$("#titleSquare").fadeTo("fast",0);
		$("#titleOfVideo").fadeTo("fast",0);
		$("#playVideo").fadeTo("fast",0);
		$(this).removeClass("hoverAttr");


		
		window.setTimeout(function() {
			
			$("#centerBlock").addClass("rotate45 videoWindow");

			window.setTimeout(function() {
				$("#panelHom2").insertBefore("#panelHom1");
				$("#panelHom2").addClass("twelve");
				$("#panelHom2").removeClass("eight");
				
				window.setTimeout(function() {
					document.getElementById("header").style.display = "block";
					document.getElementById("filmRing1").style.display = "block";
					document.getElementById("theater").style.display = "block";
					//alert($("#film").attr("offsetHeight"));
					//$("#theater").css("height", $("#film").attr("offsetHeight"));
					document.getElementById("centerBlock").style.display = "none";
					//document.getElementById("backgroundHolder").style.opacity = "0";
					
					window.setTimeout(function () {
						//$("#film").addClass("slideUp");
						//document.getElementById("backgroundHolder").style.display = "none";
						document.getElementById("panelHom1").style.display = "none";
						document.getElementById("panelHom2").style.display = "none";
						document.getElementById("panelHom3").style.display = "none";
						document.getElementById("panelVid1").style.display = "block";
						document.getElementById("panelVid2").style.display = "block";
						document.getElementsByClassName("container")[0].style.height = "auto";
						//document.getElementsByClassName("container")[0].style.top = "20%";
						PlayRing();
						
					},1000);
				},300);
				
			},1200);
			

			/*document.body.style.background="black";
			document.getElementsByClassName("content")[0].style.background="black";
			document.getElementsByClassName("content")[1].style.background="black";
			document.getElementsByClassName("content")[2].style.background="black";
			document.getElementsByClassName("content")[3].style.background="black";*/

			//document.getElementById("Pane1").style.display = "none";
			
		},1000);//Inner Animation Control
		
	});//Main Animation Control
	
	
	//FUNCTION THAT RUNS THE RING FILM SERIES
	//Regulating variables
	var counter;
	var pickedUp;
	var pickCountTemp;
	
	var sceneID;
	var sceneFrequency;
	
	var goodSelected;
	var nonresponsive;
	var audioID;
	var audioFrequency;
	var audioIDBad;
	var audioFrequencyBad;
	var audioIDGood;
	var audioFrequencyGood;
	
	function PlayRing() {
		
		//Reset, prepare, and intialize variables for starting scene.
		var introDuration = $("#filmRing1").get(0).duration *1000;
		$("#filmRing1").get(0).currentTime = 0;
		document.getElementById("filmRing1").style.display = "block";
		document.getElementById("pickUp").style.display = "block";
		$("#counter").animate({width:"80%"}, 0);
		$("#counter").animate({width:"0px"}, introDuration);

		//$("#counter").addClass("countdownScroll");
		document.getElementById("counter").style.display = "block";
		document.getElementById("seconds").style.display = "inline-block";
		//$("#counter").addClass("flash");
		
		//Assign values to regulating variables.
		counter = 8;
		pickedUp = false;
		goodSelected = true;
		nonresponsive = true;
		
		sceneID = [2, 3, 4];
		sceneFrequency = [.6, .2, .2];
		
		audioFrequency = [.4, .1, .1, .2, .2];
		audioID = [1, 2, 3, 4, 5];
		audioIDBad = [1, 5];
		audioFrequencyBad = [.4, .6];
		audioIDGood = [2, 3, 4];
		audioFrequencyGood = [.2, .4, .4];

		
		//Setup stop condition for when user has clicked UI.
		$("#pickUp").click( function() {
			pickedUp=true;
		});
		$("#leftHemi").click( function() {
			goodSelected=true;
			nonresponsive=false;
			$("#leftHemi").addClass("selected");
			$("#rightHemi").removeClass("selected");
		});
		$("#rightHemi").click( function() {
			goodSelected=false;
			nonresponsive=false;
			$("#rightHemi").addClass("selected");
			$("#leftHemi").removeClass("selected");
		});


		//Countdown loop for starting scene, the film officially starts.
		var ticker = setInterval(function() {
			
			//Check to see if user has interacted, and load next clip if true.
			if(pickedUp){
				//var randomClip = 2;
				var clipDuration;
				var random_clip = getRandomClip(sceneID, sceneFrequency);
				var random_audio = getRandomClip(audioID, audioFrequency);
				var random_audioBad = getRandomClip(audioIDBad, audioFrequencyBad);
				var random_audioGood = getRandomClip(audioIDGood, audioFrequencyGood);

				clearInterval(ticker);
				//$("#counter").removeClass("countdownScroll");
				//$("#counter").removeClass("flash");
				document.getElementById("filmRing1").style.display = "none";
				document.getElementById("pickUp").style.display = "none";
				document.getElementById("counter").style.display = "none";
				document.getElementById("filmRing"+random_clip).style.display = "block";
				$("#filmRing1").get(0).pause();
				if(random_clip == 2){
					document.getElementById("selectResponse").style.display = "block";
					//Timer for UI Response
					document.getElementById("responseCountdown").style.display = "inline-block";
					var time = 0;
					var i = 7;
					var interval = setInterval(function() {
						$("#responseCountdown").text(i);
						if (i == time) {
							clearInterval(interval);
							document.getElementById("responseCountdown").style.display = "none";
							$("#responseCountdown").text(7);

						}
						i--;
					}, 1000);
					
					window.setTimeout(function(){
						if(nonresponsive){
							$("#trackRing"+random_audio).get(0).play();}
						else{
							if(goodSelected){
								$("#trackRing"+random_audioGood).get(0).play();
							}
							else{
								$("#trackRing"+random_audioBad).get(0).play();
							}
						}
					}, 8000);
					
				}else{}
				
				$("#filmRing"+random_clip).get(0).currentTime = 0;
				$("#filmRing"+random_clip).get(0).play();
				clipDuration = $("#filmRing"+random_clip).get(0).duration * 1000;
				
				//Reload the film and play another scene.
				window.setTimeout(function(){
					document.getElementById("filmRing"+random_clip).style.display = "none";
					document.getElementById("selectResponse").style.display = "none";
					document.getElementById("seconds").innerHTML = "8";
					$("#leftHemi").removeClass("selected");
					$("#rightHemi").removeClass("selected");
					PlayRing();
				}, clipDuration);

			}else{
				//Upon first pass, play starter scene.
				if(counter == 8){
					//audioVizzy($('#filmRing1 source:nth-child(1)').attr('src'));
					$("#filmRing1").get(0).play();
				}else{}
				
				//Countdown.
				counter--;
				
				//Check stop condition of countdown and load next scene if true.
				if(counter <= 0) {
					clearInterval(ticker);
					document.getElementById("seconds").style.display = "none";
					document.getElementById("seconds").innerHTML = "8";
					//$("#counter").removeClass("countdownScroll");
					//$("#counter").removeClass("flash");
					
					//When finished with countdown reset if no response in UI.
					PlayRing();
				} else {
					/*if(counter%2 == 0){
							//$("#counter").addClass("flash");
					}else {
							//$("#counter").removeClass("flash");
					}*/
					//Update the countdown timer.
					document.getElementById("seconds").innerHTML = counter.toString();
				}
			}
			//1000 == 1 second timing for countdown.
		}, 1000);
	}

//Random function to choose next scene.
var randomSelection = function(min, max) {
	return Math.random() * (max - min) + min;
	};
	
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




});//Ready Function