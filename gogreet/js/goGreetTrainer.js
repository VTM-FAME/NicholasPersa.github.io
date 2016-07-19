$(document).ready(function(){

	var filter = window.location.hash.substring(1);
	
	$("#bannerTitle").html(filter);
	
	for(i = 0; i < Trainers.length; i ++){
	
		//var filter = $("#containerTrainer").data("location");
		
		if(Trainers[i].getDistrict() == filter){
		
			if(Trainers[i].cosmetic == "Ace Trainer Female"){
				var iconType = "AceTrainer_F.png";
				var iconName = "Ace Trainer";
				var iconClass = "aceTrainer_F";
			}
			
			else if(Trainers[i].cosmetic == "Ace Trainer Male"){
				var iconType = "AceTrainer_M.png";
				var iconName = "Ace Trainer";
				var iconClass = "aceTrainer_M";
			}
			
			else if(Trainers[i].cosmetic == "Black Belt"){
				var iconType = "BlackBelt_M.png";
				var iconName = "Black Belt";
				var iconClass = "blackBelt_M";
			}
			
			else if(Trainers[i].cosmetic == "Camper"){
				var iconType = "Camper_M.png";
				var iconName = "Camper";
				var iconClass = "camper_M";
			}
			
			else if(Trainers[i].cosmetic == "Hiker"){
				var iconType = "Hiker_M.png";
				var iconName = "Hiker";
				var iconClass = "hiker_M";
			}
			
			$("#containerTrainer").append('<div class="trainer"><div class="team"><img  class="'+Trainers[i].team.toLowerCase()+'Logo" src="images/'+Trainers[i].team.toLowerCase()+'.png" /></div><h1>'+iconName+'</h1><div class="'+iconClass+'"><img src="images/playerIcons/'+iconType+'" /></div><h2>'+Trainers[i].handle+'</h2><div id="'+Trainers[i].handle+'" class="trainerInfo"></div></div>');
		
		}
	}
	
	var whiteSpace = $('#containerTrainer').html().replace(/\r|\n/gm, "");
	
	
	for(i = 0; i < Trainers.length; i++){
	
		//var filter = $("#containerTrainer").data("location");
		
		if(Trainers[i].getDistrict() == filter){
			
			var config = {
				"profile": {"screenName": Trainers[i].handle},
				"domId": Trainers[i].handle,
				"maxTweets": 1,
				"showImages": false,
				"enableLinks": false,
				"showUser": false
			};
			
			twitterFetcher.fetch(config);
		}
	}
	
	$("#burgerMenu").click(function(){
		document.getElementById("aboutOverlay").style.display = "inline-block";
		document.getElementById("siteNav").style.display = "none";
	});
	$("#closeAbout").click(function(){
		document.getElementById("aboutOverlay").style.display = "none";
		document.getElementById("siteNav").style.display = "inline-block";
	});
	
	$("#join").click(function(){
	
		$(this).toggleClass("clicked");
	
		if($(this).hasClass("clicked")){
		
			$("#menuInfo").html('<p>So you want to register as a trainer? Using the button below, tweet me which player icon you want and I will add your Twitter handle to the social nexus GoGreet.</p><p>By becoming a registered trainer, you can participate in what other players are saying more easily and collaborate with friends to take on gyms.</p><p>Poke Go fan-site. Not officially affiliated with Pokemon Go or Niantic Labs.</p><a href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A4000%2FTrainerTemplate.html&amp;ref_src=twsrc%5Etfw&amp;screen_name=NicholasPersa&amp;tw_p=tweetbutton" target="_blank"><div id="tweetMe"><p>Tweet</p></div></a>');
			
			$("#join").html('<p>Return</p>');
			
		}
		else{
			$("#menuInfo").html('<p>Welcome to GoGreet: a social nexus designed for Pokemon Go. This is an unofficial fan-site authored by myself. I study and research digital media and have an interest in learning about collaborative social interactions.</p><p>I hope that this website helps players meet and plan in-game events. The site is being hosted on GitHub and I am using Twitter to create player profiles and send messages. In order to particiapte you will need to have or create a Twitter account. This site is experimental and its purpose is for educating myself on social interactions and web design.</p><p>If you have ideas about what would help develop this idea, get in touch with me on Twitter <a href="https://twitter.com/NicholasPersa" target="_blank">@NicholsaPersa</a></p>');
			
			$("#join").html('<p>Join?</p>');
		}
	});

});











