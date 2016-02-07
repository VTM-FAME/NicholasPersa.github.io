
var audioTrack1, audioTrack2, audioTrack3, audioTrack4;
var audioLibrary = [];
var playlist = [];
var set1, set2, set3;
var x = [20, 190, 360, 530];
var randomOrder = [0,1,2,3];
var degreeShift = [-5,5,-5,5];

function InitBoard () {
	//initialize beginning scenes
	$(".scenes").draggable({stack:".scenes", stop: ShiftDrop});
	$(".scenes").data('dropped', false);
	$(".scenes").data('correct', false);
	$(".dropBox").data('whoTouched', 0);
	$(".dropBox").droppable({hoverClass:'dropHover', drop: OnDrop, out:DataReset});
	
	for( var i = 0; i < 4; i++)
	{
		$($(".scenes").get(i)).data("sceneNumber", i+1);
		$($(".dropBox").get(i)).data("boxNumber", i+1);
	}
	
	Shuffle(randomOrder);
	RandomPlace();
	ResetCursor();
}

function CheckDropStatus () {
	
	var dropped = true;

	for(var i = 0; i < 4; i++)
	{
		if(!$($(".scenes").get(i)).data('dropped'))
		{
			dropped = false;
		}
	}
	return dropped;
}

function CheckVictory() {
	
	var success = true;
	
	for(var i = 0; i < 4; i++)
	{
		if(!$($(".scenes").get(i)).data('correct'))
		{
			success = false;
		}
	}
	
	if(CheckDropStatus())
	{
		var audioOrder = [];
		
		for(var i = 0; i < 4; i++)
		{
			audioOrder.push($($(".dropBox").get(i)).data('whoTouched'));
		}
		
		var time = [];
		for(var i = 0; i < 4; i++){
			time.push(1000 * audioLibrary[audioOrder[i]-1].duration);
		}
		
		PauseOtherAudio();
		PlayAudio(audioLibrary[audioOrder[0]-1]);
		MoveCursor(audioOrder[0]);
		set1 = setTimeout( function(){
			if(CheckDropStatus()){
				PlayAudio(audioLibrary[audioOrder[1]-1]);
				MoveCursor(audioOrder[1]);
				}
			}, time[0]);
		
		set2 = setTimeout( function(){
			if(CheckDropStatus()){
				PlayAudio(audioLibrary[audioOrder[2]-1]);
				MoveCursor(audioOrder[2]);
				}
			}, time[0]+time[1]);
		
		set3 = setTimeout( function(){
			if(CheckDropStatus()){
				PlayAudio(audioLibrary[audioOrder[3]-1]);
				MoveCursor(audioOrder[3]);
			}
		}, time[0]+time[1]+time[2]);

		
		if(success)
		{
			console.log("success");
			for(var i = 0; i < 4; i++)
			{
				document.getElementById($($(".scenes").get(i)).attr('id')+"Check").style.display="block";
			}
			
		}
		else
		{
			console.log("try again");
			for(var i = 0; i < 4; i++)
			{
				if(!$($(".scenes").get(i)).data('correct'))
				{
					document.getElementById($($(".scenes").get(i)).attr('id')+"Mark").style.display="block";
				}
				else
				{
					document.getElementById($($(".scenes").get(i)).attr('id')+"Check").style.display="block";
				}
			}
		}
	}
	
}

function DataReset (event, ui) {
	ui.draggable.data('dropped', false);
	ui.draggable.data('correct', false);
	document.getElementById(ui.draggable.attr('id')+"Mark").style.display="none";
	document.getElementById(ui.draggable.attr('id')+"Check").style.display="none";
	
	ResetCursor();
	PauseOtherAudio();
}

function MoveCursor (index) {
	
	var speed = 1000*audioLibrary[index-1].duration;
	
	document.getElementById("slide"+index).style.display = "inline-block";
	
	$("#slide"+index).animate({left:"150px"}, speed, function (){
		try{
		document.getElementById(this.id).style.display = "none";
		$("#"+this.id).animate({left:"0px"},0);}
		catch(err){}
	});
}

function OnDrop (event, ui) {
	var boxID = $(this).data('boxNumber');
	var sceneID = ui.draggable.data('sceneNumber');
	
	if(boxID == sceneID)
	{
		ui.draggable.data("correct", true);
	}
	
	$(this).data("whoTouched", ui.draggable.data("sceneNumber"));
	ui.draggable.data('dropped', true);
	ui.draggable.css({position:'absolute', transform:'rotate(0deg)'});
	ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
	
	CheckVictory();
}

function openStory(location, windowPane) {
	
	var element = "#" + location.id;
	$('html, body').animate({scrollTop: $(element).offset().top});
	try{PauseOtherAudio();}
	catch(err){};
	
	//replace audiotrack with name
	audioTrack1 = new Audio("storyLib/psychologists/storyboards/audioTrack1.m4a");
	audioTrack2 = new Audio("storyLib/psychologists/storyboards/audioTrack2.m4a");
	audioTrack3 = new Audio("storyLib/psychologists/storyboards/audioTrack3.m4a");
	audioTrack4 = new Audio("storyLib/psychologists/storyboards/audioTrack4.m4a");
	audioLibrary = [audioTrack1, audioTrack2, audioTrack3, audioTrack4];
	
	if ($(element).hasClass("inactive")) {
		$(".active").addClass("inactive");
		$(".active").removeClass("active");
		$(element).removeClass("inactive");
		$(element).addClass("active");
		
		var windowArray = document.getElementsByClassName("currentStory");
		for(var i = 0; i < windowArray.length; i++){
			$("#storyBoard").remove();
			windowArray[i].style.display = "none";
		}
		
		document.getElementById(windowPane).style.display = "inline-block";
		$("#"+windowPane).load("storyLib/psychologists/storyboards/storyBoard.html", function(){
			InitBoard();
			var text = $(element).data('theory');
			document.getElementById("titleTheory").innerHTML = text;
		});
		
	}
	else {
		document.getElementById(windowPane).style.display = "none";
		$('html, body').animate({scrollTop: $(element).offset().top});
		$(element).removeClass("active");
		$(element).addClass("inactive");
		$("#storyBoard").remove();
	}
}

function PlayAudio (audio) {
	
	PauseOtherAudio();
	audio.currentTime = 0;
	audio.play();
}

function PauseOtherAudio ()
{
	for(var i = 0; i < 4; i++)
	{
		audioLibrary[i].pause();
		audioLibrary[i].currentTime = 0;
	}
}

function ResetCursor () {

	try{
		clearTimeout(set1);
		clearTimeout(set2);
		clearTimeout(set3);
	}
	catch(err){}
	
	for(var i = 1; i < 5; i++)
	{
		document.getElementById("slide"+i).style.display = "none";
		$("#slide"+i).stop(true,true);
		$("#slide"+i).animate({left:"0px"},0);
	}
}

function RevealTitle () {
	document.getElementById("titleHide").style.display = "none";
	document.getElementById("titleTheory").style.display = "inline-block";
}

function Shuffle(o){
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function RandomPlace () { //Randomly place scenes
	for(var i = 0; i < 4; i++)
	{
		var y = 275 + (Math.random() * (325-250));
		$($('.scenes').get(randomOrder[i])).css({position:'absolute',left: x[i], top: y, transform:'rotate('+degreeShift[i]+'deg)'});
	}
}

function ShiftDrop () {
	var i = degreeShift[Math.floor(Math.random() * 4)];
	if($(this).data('dropped') == false)
	{
		$(this).css({position:'absolute', transform:'rotate('+i+'deg)'});
	}
}

