
(function($) {
 jsPsych['EdPsych-Guide'] = (function() {
	 
	 var plugin = {};
	 
	 plugin.create = function(params) {
		 
			 //params = jsPsych.pluginAPI.enforceArray(params, ['data']);
		 
		 var trials = new Array(params.stimuli.length);
		 for (var i = 0; i < trials.length; i++) {
			 trials[i] = {
				 "theorists": params.theorists,
					 //"question": params.question,
					 //"distractors": params.distractors,
				 "stimuli": params.stimuli[i], // image to display
											   //"imageNames": params.stimNames[i],
											   //"sortTypes":params.sortTypes[i],
											   //"categories": params.category[i],
											   //"sorted_images": params.sorted_images[i],
											   //"sorted_categories": params.sorted_categories[i],
				 "timing_post_trial": (typeof params.timing_post_trial === 'undefined') ? 1000 : params.timing_post_trial,
				 "prompt": (typeof params.prompt === 'undefined') ? '' : params.prompt,
				 "prompt_location": params.prompt_location || "above",
			 };
		 }
		 return trials;
	 }
	 
	 plugin.trial = function(display_element, trial) {
		 
			 // if any trial variables are functions
			 // this evaluates the function and replaces
			 // it with the output of the function
			 //trial = jsPsych.pluginAPI.normalizeTrialVariables(trial);
		 trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);
		 
		 var start_time = (new Date()).getTime();
		 
			 // check if there is a prompt and if it is shown above
			 //if (trial.prompt && trial.prompt_location == "above") {
			 //display_element.append(trial.prompt);
			 //}
		 
			 //display_element.append($('<div>', {"id":"prompt",
			 //						  "text":trial.prompt}));
		 
		 
		 display_element.append($('<div>', {
			 "id": "jspsych-arena",
			 "class": "helper"
			 }));
		 
		 $("#jspsych-arena").append($('<div>', {
			 "id":"heading",
			 "text":"Theory & Theorist"
			 }));
		 
		 document.getElementById("heading").style.fontSize = "60px";
		 
		 
		 
		 
		 function shuffle(o){
			 for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			 return o;
		 };
		 
		 trial.theorists = shuffle(trial.theorists);
		 var currentTheorist = 0;
		 
		 var response = 0;
			 //var correctQuestion = trial.question;
			 //var questions = correctQuestion.concat(trial.distractors);
		 var questionOrder = shuffle([1,2,3,4]);
		 var correct = 0;
		 var answer = null;// = questionOrder[0];
		 var text = "string";
		 
		 
		 
		 function getQuestion(isCorrect, currentQuestion, callbackFunction){
			 
			 if(isCorrect==1){
				 
					 //alert("Answer " +answer+ " for "+trial.stimuli);
				 answer = currentQuestion;
				 $.ajax({
					 url : "lib/psychologists/Questions/" +trial.stimuli+ ".txt",
				 dataType: "text",
					 success : function (data) {
						 text = data;
						 callbackFunction(currentQuestion);
					 }});
				 
				 /*jQuery.get("lib/psychologists/" +trial.stimuli+ "/Correct/" +trial.stimuli+ "_" +questionIndex+ ".txt", function(data) {
				  text = data;
				  callbackFunction();
				  
				  });*/}
			 
			 else if(isCorrect==4){
				 var veryMeaningfulQuestion = ["Poodle Balloon Therapy: Worked hard to show that simple shapes and pleasing geometry provide a near-pointless effect for mental and physiological well-being.",'Slightly Soggy Chips: This has nothing to do with learninng anything. But it sucks. They can either be "moist" (awful word) or kinda stale. Either way ... disgusting.','Advanced Napping: Nothing like getting a good headstart on doing nothing. Try finding a super comfortable place, you know, where the air is like blankets. Go ham on dem "zzz".', "Quantum Physicis: Oh, yea! Some next level words right there! We are talking about the theoretical basis that explains the nature and behavior of matter (atomic and subatomic levels).",'Work Load Burden: I wanted some help and asked someone for a funny question. They said, "I am busy." "fine then," I thought, that statement will do.', "Hybrid Modular Compartmentalization: A system of semi-vague and uninterpretable clauses designed to elaborate exclusively on a collection of definitions and theories."];
				 veryMeaningfulQuestion = shuffle(veryMeaningfulQuestion);
				 text = veryMeaningfulQuestion.pop();
				 callbackFunction(currentQuestion);
			 }
			 
			 else{
				 
				 $.ajax({
					 url : "lib/psychologists/Questions/" +trial.theorists[currentTheorist++]+ ".txt",
				 dataType: "text",
					 success : function (data) {
						 text = data;
						 callbackFunction(currentQuestion);
					 }});
				 
				 /*jQuery.get("lib/psychologists/" +trial.stimuli+ "/Incorrect/" +trial.stimuli+ "_" +questionIndex+ ".txt", function(data) {
					 text = data;
					 callbackFunction();
					 
				  });*/}
			 
		 }
		 
			 //var nextQuestion;
		 var firstFlag = 1;
			 //var secondFlag = 1;
		 var innerIndex = 0;
		 
		 for(var index = 0; index < 4; index++){
				 //nextQuestion = questions[index];
			 getQuestion(firstFlag++, questionOrder[index], function(currentQuestion){
				 
					 //alert("Making question number "+currentQuestion+ " for " +text);
					 //if(secondFlag++ == 1){answer = questionOrder[0];}
					 //alert("Inner "+questionOrder[innerIndex]);
				 $("#jspsych-arena").append($('<div>', {
					 "id": "Text"+currentQuestion,
					 "text":text
					 }));
				 $("#Text"+currentQuestion).click(function(){
					 document.getElementById('Question'+$(this).attr('id').split("").pop()).click();
				 });
			 });
			 
		 }
		 
		 $("#jspsych-arena").append($('<button>', {
			 "id": "Question1",
			 "class": "MC",
			 "html": "1",
			 "click": function() {
				 response = 1;
				 $(this).addClass('selected');
				 $("#Text1").addClass('selected');
				 if(response == answer)
				 {
					 correct = 1;
				 }
				 else{ correct = 0;}
				 $("#Text2").removeClass('selected');
				 $("#Text3").removeClass('selected');
				 $("#Text4").removeClass('selected');
				 $("#Question2").removeClass('selected');
				 $("#Question3").removeClass('selected');
				 $("#Question4").removeClass('selected');
			 }
			 }));
		 $("#jspsych-arena").append($('<button>', {
			 "id": "Question2",
			 "class": "MC",
			 "html": "2",
			 "click": function() {
				 response = 2;
				 $(this).addClass('selected');
				 $("#Text2").addClass('selected');
				 if(response == answer)
				 {
					 correct = 1;
				 }
				 else{ correct = 0;}
				 $("#Text1").removeClass('selected');
				 $("#Text3").removeClass('selected');
				 $("#Text4").removeClass('selected');
				 $("#Question1").removeClass('selected');
				 $("#Question3").removeClass('selected');
				 $("#Question4").removeClass('selected');
			 }
			 }));
		 $("#jspsych-arena").append($('<button>', {
			 "id": "Question3",
			 "class": "MC",
			 "html": "3",
			 "click": function() {
				 response = 3;
				 $(this).addClass('selected');
				 $("#Text3").addClass('selected');
				 if(response == answer)
				 {
					 correct = 1;
				 }
				 else{ correct = 0;}
				 $("#Text1").removeClass('selected');
				 $("#Text2").removeClass('selected');
				 $("#Text4").removeClass('selected');
				 $("#Question1").removeClass('selected');
				 $("#Question2").removeClass('selected');
				 $("#Question4").removeClass('selected');
			 }
			 }));
		 
		 $("#jspsych-arena").append($('<button>', {
			 "id": "Question4",
			 "class": "MC",
			 "html": "4",
			 "click": function() {
				 response = 4;
				 $(this).addClass('selected');
				 $("#Text4").addClass('selected');
				 if(response == answer)
				 {
					 correct = 1;
				 }
				 else{ correct = 0;}
				 $("#Text1").removeClass('selected');
				 $("#Text2").removeClass('selected');
				 $("#Text3").removeClass('selected');
				 $("#Question1").removeClass('selected');
				 $("#Question2").removeClass('selected');
				 $("#Question3").removeClass('selected');
			 }
			 }));
		 
		 display_element.append($('<div>', {
			 "id": "successMessage",
			 "class": "successMessage",
			 "text": "CORRECT"
			 }));
		 
		 display_element.append($('<div>', {
			 "id": "failMessage",
			 "class": "failMessage",
			 "text":"INCORRECT"
			 }));
		 
		 /*display_element.append($('<button>', {
			 "id": "tryAnother",
			 "class": "tryAnother",
			 "text":"Try Another?",
			 "click": function(){
			 display_element.html("");
			 setTimeout(function(){
			 window.location = "file:///Users/fame/Documents/8.%20Seann%20Dikkers/EdPsych%20Guide.html";},1000);
			 }
			 }));*/
		 
		 /*$.ajax({
		  url : "lib/psychologists/" +trial.stimuli+ "/Correct/" +trial.stimuli+ "_" +correctQuestion[0]+ ".txt",
		  dataType: "text",
		  success : function (data) {
		  $(".failMessage").html(data);}});*/
		 
		 /*display_element.append($('<img>', {
			 "src":"lib/images/firework.gif",
			 "id":"firework"
			 }));*/
		 
		 $('#successMessage').hide();
		 $('#failMessage').hide();
			 //$('#tryAnother').hide();
		 
		 
		 
		 
			 // check if prompt exists and if it is shown below
			 //if (trial.prompt && trial.prompt_location == "below") {
			 //display_element.append(trial.prompt);
			 //}
		 
		 $("#jspsych-arena").append($('<img>', {
			 "src":"lib/psychologists/" +trial.stimuli+ "/" +trial.stimuli+ ".jpg",
			 "id":"Person",
			 "class":"helper"
			 }));
		 
		 $("#jspsych-arena").append($('<img>', {
			 "src":"lib/css/scroll.png",
			 "id":"scroll",
			 "class":"helper",
			 "html":"String"
			 }));
		 
		 $("#jspsych-arena").append($('<h1>', {
			 "id":"name",
			 "text":trial.stimuli
			 }));
		 
		 var wiki = "string";
		 
			function getWiki(callbackFunction){
				$.ajax({
					url : "lib/psychologists/More Information/" +trial.stimuli+ ".txt",
				dataType: "text",
					success : function (data) {
						wiki = data;
						callbackFunction();
					}});
			}
		 
		 getWiki(function(){});
		 
		 display_element.append($('<div>', {
			 "id":"wikiWindow"
			 }));
		 
		 $("#jspsych-arena").append($('<div>', {
			 "id":"info",
			 "class":"helper",
			 "text":"Click for information",
			 "click": function() {
				 $('#wikiWindow').toggle();
				 $('#info').hide();
				 $('#hideInfo').show(0);
				 $('#wikiWindow').html('<object style="height:30000px; width:710px; overflow:auto; -webkit-overflow-scrolling:touch; z-index:21;" data='+wiki+'>');
				 
			 }
			 
			 }));
		 
		 $("#jspsych-arena").append($('<div>', {
			 "id":"hideInfo",
			 "class":"helper",
			 "text":"Minimize information",
			 "click": function() {
				 $('#wikiWindow').toggle();
				 $('#hideInfo').hide();
				 $('#info').show(0);
				 
					 //$('#wikiWindow').html('<object style="height:700px; width:710px" data='+wiki+'>');
			 }
			 
			 }));
		 
		 $('#hideInfo').hide();
		 $('#wikiWindow').hide();
		 
		 
		 /* display_element.append($('<button>', {
		  "id":"Check",
		  "html":"Check",
		  "click": function() {
		  alert(["Response " +response, "Correct " +correct, "Answer "+answer]);
		  }
		  })); */
		 
		 Date.prototype.getDOY = function() {
			 var onejan = new Date(this.getFullYear(),0,1);
			 return Math.ceil((this - onejan) / 86400000);
		 }
		 
		 display_element.append($('<button>', {
			 "id": "jspsych-done-btn",
			 "class": "jspsych-button",
			 "html": "Submit Selection",
			 "click": function() {
				 
				 if(response){
					 $('#jspsych-done-btn').unbind('click');
					 
					 var end_time = (new Date()).getTime();
					 var rt = end_time - start_time;
					 var today = new Date();
					 
					 jsPsych.data.write($.extend({}, {
						 "timeStamp":today.getTime(),
						 "day":today.getDOY(),
						 "date": today.getMonth()+"/"+today.getDate()+"/"+today.getFullYear(),
						 "response": response,
						 "questions": trial.theorists.slice(0,3),
						 "correct": correct,
						 "stimuli": trial.stimuli
						 }, trial.data));
					 
						 //$('#firework').delay(400).show(0);
						 //$('#firework').delay(1800).hide(0);
					 
					 $('#jspsych-done-btn').delay(300).hide(0);
					 $('#Text1').unbind('click');
					 $('#Text2').unbind('click');
					 $('#Text3').unbind('click');
					 $("#Text4").unbind('selected');
					 $('#Question1').unbind('click');
					 $('#Question2').unbind('click');
					 $('#Question3').unbind('click');
					 $('#Question4').unbind('click');
					 
					 
						 // advance to next part
						 //display_element.html("");
					 
						 //alert(correct);
					 if(correct){
							 //alert("hi");
						 $('#successMessage').delay(700).show(0).effect("pulsate",{times:2}, 2000, function(){													  //display_element.html("");
						 });
							 //$('#tryAnother').delay(1500).show(0);
						 
					 }
					 else{
							 //$('#failMessage').toggle("clip");
						 $('#failMessage').delay(700).show(0).effect("pulsate",{times:2}, 2000);
							 //$('#tryAnother').delay(1500).show(0);
						 
						 
						 var highlight = questionOrder.indexOf(answer);
						 if(highlight != -1){ questionOrder.splice(highlight, 1);}
						 
						 $("#Text" +questionOrder[0]).addClass('incorrect');
						 $("#Text" +questionOrder[1]).addClass('incorrect');
						 $("#Text" +questionOrder[2]).addClass('incorrect');
						 
						 $("#Question" +questionOrder[0]).removeClass('selected');
						 $("#Question" +questionOrder[1]).removeClass('selected');
						 $("#Question" +questionOrder[2]).removeClass('selected');
						 
					 }
					 
					 
					 if (trial.timing_post_trial > 0) {
						 setTimeout(function() {
							 jsPsych.finishTrial();
						 }, trial.timing_post_trial);
					 }
					 else {jsPsych.finishTrial();}
				 }
				 else{
						 //alert("Attention Flesh-Bag: Your robotic overlords frown upon indecisivness. Please select a response");
					 var peasantAddress = ["Attention Flesh-Bag", "Greetings Earth Creature","GASP! A REBEL!","SUPER MEGA SYSTEM WARNING"];
					 var address = shuffle(peasantAddress);
					 
					 var peasantCommand = ["Your robotic overlords frown upon indecisivness", "One cannot escape making a choice here","DO NOT ATTEMPT TO DISRUPT TIME AND SPACE"];
					 var command = shuffle(peasantCommand);
					 
					 sweetAlert(address.pop(), command.pop() + String.fromCharCode(10) + "Please select a response", "error");
				 }
				 
			 }
			 }));
		 
		 
		 
		 
			 // helper functions
		 function term() {
			 Total = 0;
			 document.getElementById('jspsych-done-btn').click();}
		 
		 
			 //
	 }
	 return plugin;
 })();
})(jQuery);
