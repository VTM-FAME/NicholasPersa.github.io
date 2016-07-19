$(document).ready(function(){
	
//	for(i = 0; i < 20; i ++){
//		$("#containerDistrict").append('<div class="district"><div class=""><img  class="'+teamIcon[i%3]+'Logo" src="images/'+teamIcon[i%3]+'.png" /></div><h1>Ace Trainer</h1><div class="aceTrainer_F"><img src="images/AceTrainer_F.png" /></div><h3>'+twitterHandles[i%4]+'</h3><div id="'+twitterHandles[i%4]+'" class="trainerInfo"></div></div>');
//	}
//	
//	var whiteSpace = $('#containerTrainer').html().replace(/\r|\n/gm, "");
	for(i = 0; i < CreateDistricts.length; i++){
	
		var location = CreateDistricts[i].location.split(' ').join('');
		var gyms = CreateDistricts[i].gyms;
		var stops = CreateDistricts[i].stops;
		
		$("#containerDistrict").append('<div id='+location+' class="district"><div id='+'"'+location+'Team" class="teamTower"><div id='+'"'+location+'Mystic" class="mysticTower"></div><!----><div id='+'"'+location+'Valor" class="valorTower"></div><!----><div id='+'"'+location+'Instinct" class="instinctTower"></div></div><a href="TrainerTemplate.html#'+CreateDistricts[i].location+'"><img src="images/DistrictLocation.png" /></a><div><p id="gymCount">'+gyms+' Gyms</p><p id="stopCount">'+stops+' Stops</p><p id="'+location+'Count">0 Trainers</p></div><p>'+CreateDistricts[i].location+'</p></div>');
		
		$("#"+location+"Mystic").css("height", "0");
		$("#"+location+"Valor").css("height", "0");
		$("#"+location+"Instinct").css("height", "0");
		var displacement = i * 15;
		$("#"+location).css("top", displacement+"%");
	}
	
	var districtObjects = [];
	var districtNames = []
	
	
	for(i = 0; i < Trainers.length; i++){
		
		if( !($.inArray(Trainers[i].getDistrict(), districtNames) > -1) )
		{
			var district = Trainers[i].getDistrict();
			districtNames.push(district);
			districtObjects.push({"name":district,"count":0, "mystic":0, "valor":0, "instinct":0});
		}
		
		var counted = false;
		var districtIndex = 0;
		
		while(counted == false){
		
			if(districtObjects[districtIndex].name == Trainers[i].getDistrict()){
				if(Trainers[i].getTeam() == "Mystic"){
					districtObjects[districtIndex].mystic += 1;
				}
				else if(Trainers[i].getTeam() == "Valor"){
					districtObjects[districtIndex].valor += 1;
				}
				else{
					districtObjects[districtIndex].instinct += 1;
				}
				
				districtObjects[districtIndex].count += 1;
				counted = true;
			}
			districtIndex++;
		}
	}
	
	//console.log(districtObjects);
	
	for(i = 0; i < districtObjects.length; i++){
		var location = districtObjects[i].name.split(' ').join('');
		var totalCount = districtObjects[i].count;
		var mysticCount = 100 * (districtObjects[i].mystic / totalCount);
		var valorCount = 100 * (districtObjects[i].valor / totalCount);
		var instinctCount = 100 * (districtObjects[i].instinct / totalCount);

		$("#"+location+"Count").html(districtObjects[i].count + " Trainers");
		$("#"+location+"Mystic").css("height", mysticCount+"%");
		$("#"+location+"Valor").css("height", valorCount+"%");
		$("#"+location+"Instinct").css("height", instinctCount+"%");
		
		var topScale = Math.max(mysticCount, valorCount, instinctCount);
		topScale = 100 - topScale;
		$("#"+location+"Mystic").css("top", topScale+"%");
		$("#"+location+"Valor").css("top", topScale+"%");
		$("#"+location+"Instinct").css("top", topScale+"%");
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
		
			$("#menuInfo").html('<p>So you want a player icon and name? Just tweet me using the button below which player icon you want and I will add your Twitter handle to the social nexus GoGreet.</p> <p>By joining you can participate on what other players are saying more easily and collaborate with friends to take on gyms.</p><p>Poke Go fan-site. Not officially affiliated with Pokemon Go or Niantic Labs.</p><a href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A4000%2FTrainerTemplate.html&amp;ref_src=twsrc%5Etfw&amp;screen_name=NicholasPersa&amp;tw_p=tweetbutton" target="_blank"><div id="tweetMe"><p>Tweet</p></div></a>');
			
			$("#join").html('<p>Return</p>');
			
		}
		else{
			$("#menuInfo").html('<p>Welcome to GoGreet: a social nexus designed for Pokemon Go. This is an unofficial fan-site authored by myself. I study and research digital media and have an interest in learning about collaborative social interactions.</p><p>I hope that this website helps players meet and plan in-game events. The site is being hosted on GitHub and I am using Twitter to create player profiles and send messages. In order to particiapte you will need to have or create a Twitter account. This site is experimental and its purpose is for educating myself on social interactions and web design.</p><p>If you have ideas about what would help develop this idea, get in touch with me on Twitter <a href="https://twitter.com/NicholasPersa" target="_blank">@NicholsaPersa</a></p>');
			
			$("#join").html('<p>Join?</p>');
		}
	});

});














