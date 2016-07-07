

$(document).ready(function(){

/*
	function Article (title, link, weight, tags, section){
		this.title = title;
		this.link = link;
		this.weight = weight;
		this.tags = tags;
		this.section = section;
	}
	
	Article.prototype.getTitle = function (){
		return this.title
	};
	Article.prototype.getLink = function (){
		return this.link
	};
	Article.prototype.getWeight = function (){
		return this.weight
	};
	Article.prototype.getTags = function (){
		return this.tags
	};
	Article.prototype.getSection = function (){
		return this.section
	};
	Article.prototype.getInfo = function (){
		return [this.title, this.link, this.weight, this.tags, this.section];
	};
	
	var articleItems = []
	
	//GAMES
	articleItems.push(new Article("Arrowhead: Magicka","https://quip.com/4T9fAuWAeWx0",600,["development"],"games"));
	articleItems.push(new Article("M Herman: Rules","https://quip.com/7PuuA7Yl7ufc",800,["development"],"games"));
	articleItems.push(new Article("Ludwig Game Art","https://quip.com/QWw2AaVe90Kl",500,["design"],"games"));
	articleItems.push(new Article("Mechanics Basics","https://quip.com/WaX1AvaGgz9K",800,["development"],"games"));
	articleItems.push(new Article("Accomplishment","https://quip.com/QhhzAai1oAe8",800,["development"],"games"));
	articleItems.push(new Article("Which Way to Win","https://quip.com/pg3cAKnl4OTb",800,["development"],"games"));
	articleItems.push(new Article("Chou's Techniques","https://quip.com/PapOARw86ebe",800,["development"],"games"));
	articleItems.push(new Article("Epic Purpose","https://quip.com/nuFuAeH8xBLw",800,["development"],"games"));
	articleItems.push(new Article("Fit Investment","https://quip.com/bLWCA3nNGjFe",800,["development"],"games"));
	articleItems.push(new Article("Community","https://quip.com/i0WbAA7vsTFa",800,["development"],"games"));
	articleItems.push(new Article("Rare & Shiny","https://quip.com/LdPXA0CzbjmC",800,["development"],"games"));
	articleItems.push(new Article("Curios & Expectations","https://quip.com/qkzuA49NDga3",800,["development"],"games"));
	
	//EDUCATION
	articleItems.push(new Article("Good Question Game","https://quip.com/iUDRAFpLiDT5",500,["games"],"education"));
	
	//DESGIN
	articleItems.push(new Article("Transparency","https://quip.com/qXCpAojvaNs4",700,["design"],"design"));
	articleItems.push(new Article("Creative Spaces","https://quip.com/svxFApDVhrkw",500,["design"],"design"));
	articleItems.push(new Article("Webfacing","https://quip.com/43rCAxkydhz9",500,["design"],"design"));
	
	//BUSINESS
	articleItems.push(new Article("TLDR Archive","https://quip.com/QDiJAu9KsTa7",1000,["business"],"business"));
	articleItems.push(new Article("Job Description","https://quip.com/JN4LADIMxLuj",1000,["games"],"business"));
	articleItems.push(new Article("Y Moon: Strengths","https://quip.com/E6m1AKQ4j93x",800,["business"],"business"));
	articleItems.push(new Article("Team Composition","https://quip.com/iWE7AaCWOAVP",400,["business"],"business"));
	articleItems.push(new Article("Early Access","https://quip.com/BFa9AyasmE7Z",600,["games"],"business"));

	//UXUI
	articleItems.push(new Article("N Rosencranz: UXUI","https://quip.com/tuGHAxcuzvZB",500,["uxui"],"uxui"));
	articleItems.push(new Article("Error Experience","https://quip.com/aq7uAWHGF0gZ",500,["uxui"],"uxui"));
	
	//PSYCHOLOGY
	articleItems.push(new Article("Memory in Design","https://quip.com/TcNoArb2Ktkp",500,["uxui"],"psychology"));
	articleItems.push(new Article("Learning by Tests","https://quip.com/zRTIAb4zLUys",600,["psychology"],"psychology"));
	articleItems.push(new Article("Learning with Animation","https://quip.com/a7LmAyHro4bL",600,["psychology"],"psychology"));
	articleItems.push(new Article("Listen, then Talk","https://quip.com/M64BABTzXwTT",300,["psychology"],"psychology"));
*/
	//POPULATE THE ARTICLES INTO THE CONTAINER
	function LoadContainer (items) {
		
		for(var i = 0; i < items.length; i++){
			
			//APPEND EACH ARTICLE IN ARRAY INTO CONTAINER
			if(items[i].getSection() != null){
				$("#itemContainer").append('<a href="'+ items[i].getLink() +'" target="_blank"><div class="linkArticle tranBox '+ items[i].getSection() +'" data-tags="'+items[i].getTags().join(" ")+'"><p class="tags">'+ items[i].getTags().join(" ") +'</p><h6>'+ (i+1) +'</h6><h4>'+ items[i].getSection().substring(0,2) +'</h4><h5>'+ items[i].getTitle() +'</h5></div></a>');
				
				//GET SECTIONS NAMES FOR BUILDING SECTION DROPDOWN MENU
				if( !($.inArray(items[i].getSection(), sectionNames) > -1) )
				{
					sectionNames.push(items[i].getSection());
				}
				
				//GET TAG NAMES FOR BUILDING TAGS DROPDOWN MENU
				for(var j = 0; j < items[i].getTags().length; j++){
					if( !($.inArray(items[i].getTags()[j], tagNames) > -1) )
					{
						tagNames.push(items[i].getTags()[j]);
					}
				}
				
			}
			
		}
	}
	
	//POPULATE THE SEARCH BAR WITH SECTION AND TAG NAMES
	function LoadSearch(sections, tags)
	{
		//SECTION NAMES ARE POPULATED ON ARTICLE LOAD
		//<span class="sectionTooltip">View only</span>
		for(var i = 0; i < sections.length; i++){
			if(sections[i] != null){
				$("#sectionContain").append('<div id="'+ sections[i] +'"><p class="genreToggle" data-type="genre" data-section="'+ sections[i] +'">'+ sections[i] +'</p><div class="visToggle"  data-type="section" data-section="'+ sections[i] +'"><img class="button" src="image/greenButton.png"></div></div>');
			}
		}
		
		//$("#searchContain").append('<div class="titleInfo" data-section="titleInfo"><p>Title</p><div class="visToggle" data-section="null"></div></div><div class="weightInfo" data-section="weightInfo"><p>Weight</p><div class="visToggle" data-section="null"></div></div>')
		
		//SORT BY IS A STATIC SEARCH FIELD, NO
		//$("#sortContain").append('<div class="titleInfo" data-type="titleInfo"><p>Title</p><div class="visToggle" data-type="sort" data-section="titleInfo"><img class="button" src="image/grayButton.png"></div></div><div class="weightInfo" data-type="weightInfo"><p>Weight</p><div class="visToggle" data-section="weightInfo"><img class="button" src="image/grayButton.png"></div></div>')
		
		//TAG NAMES ARE POPULATED ON ARTICLE LOAD
		for(var i = 0; i < tags.length; i ++){
			if(tags[i] != null){
				$("#tagInfo").append('<div data-tag="'+tags[i]+'"><p>'+tags[i]+'</p><div class="tagToggle" data-type="tag" data-tag="'+tags[i]+'"><img class="button" src="image/grayButton.png"></div></div>');
			}
		}
	}
	
	//sorts by section
	articleItems.sort(function(a, b){
		var sectionA = a.section.toLowerCase(), sectionB = b.section.toLowerCase();
		if(sectionA < sectionB){ //sort string ascending
			return -1;
		}
		if(sectionA > sectionB){
			return 1;
		}
		return 0; //default return value (no sorting)
	});
	
	//sorts by title
	articleItems.sort(function(a, b){
		var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
		if(titleA < titleB){ //sort string ascending
			return -1;
		}
		if(titleA > titleB){
			return 1;
		}
		return 0; //default return value (no sorting)
	});
	
	//sorts by weight
	articleItems.sort(function(a, b){
		return b.weight - a.weight
	});
	
	/*var sort_by = function(field, reverse, primer){
		var key = primer ?
			function(x) {return primer(x[field])}:
			function(x) {return x[field]};
		
		reverse = !reverse ? 1 : -1;
		
		return function(a,b){
			return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
			}
	};*/
	
	var sectionNames = [];
	var tagNames = [];
	
	//$("#itemContainer").empty();
	LoadContainer(articleItems);

	LoadSearch(sectionNames, tagNames);
	//console.log([sectionNames,tagNames]);
	
	//OPERATE CONTEXT OPTIONS FOR SECTION DOWN MENU
	$(".visToggle").click(function(){
	
		//IF THE BUTTON HASNT BEEN CLICKED YET
		if(!$(this).hasClass("clicked")){
		
			var type = $(this).data("type");
			
			//CONTEXT OPTION FOR SECTION DROPDOWN
			if(type == "section")
			{
				var section = $(this).data("section");
				var hideSection = document.getElementsByClassName(section);
				for(var i = 0; i < hideSection.length; i++){
					hideSection[i].style.display = "none";
				}
			
			}
			
			$(this).addClass("clicked");
			$(this).find("img").attr("src", "image/redButton.png");
			
		}
		//IF THE BUTTON HAS BEEN CLICKED
		else{
			var type = $(this).data("type");
			
			//CONTEXT OPTION FOR SECTION DROPDOWN
			if(type == "section")
			{
				var section = $(this).data("section");
				var showSection = document.getElementsByClassName(section);
				for(var i = 0; i < showSection.length; i++){
					showSection[i].style.display = "inline-block";
				}
			}
			
			$(this).removeClass("clicked");
			$(this).find("img").attr("src", "image/greenButton.png");
		}
		
	});
	
	//OPERATE CONTEXT OPTIONS FOR GENRE OF SECTION DROPDOWN MENU
	$(".genreToggle").click(function(){
		
		var section = $(this).data("section");
		
		//IF THE CLICKED GENRE IS NOT ACTIVE
		if(!$("#"+section).hasClass("currentGenre"))
		{
			//REMOVE ALL OTHER CURRENTGENRE FROM FOCUS
			var removeFocus = document.getElementsByClassName("currentGenre");
			
			for(var i = 0; i < removeFocus.length; i++)
			{
				$(removeFocus[i]).removeClass("currentGenre");
			}
			
			//HIDE ALL ARTICLES AND PRIME THE SPACE
			var hideSection = document.getElementsByClassName("linkArticle");
			for(var i = 0; i < hideSection.length; i++){
				hideSection[i].style.display = "none";
			}
			
			for(var i = 0; i < sectionNames.length; i++)
			{
				if(sectionNames[i] != section)
				{
					$("#"+sectionNames[i]).find("img").attr("src", "image/redButton.png");
					$("#"+sectionNames[i]).find(".visToggle").addClass("clicked");
				}
			}
			
			//SHOW ONLY THE GENRE OF CHOICE
			var showSection = document.getElementsByClassName(section);
			
			for(var i = 0; i < showSection.length; i++){
				showSection[i].style.display = "inline-block";
			}
			
			$("#"+section).addClass("currentGenre");
			$("#"+section).find(".visToggle").removeClass("clicked");
			$("#"+section).find("img").attr("src", "image/greenButton.png");
		}
		
		//IF THE GENRE HAS BEEN CLICKED BEFORE
		//REVERT THE SPACE SO ALL ARTICLES ARE SHOWN
		else {
			var showSection = document.getElementsByClassName("linkArticle");
			for(var i = 0; i < showSection.length; i++){
				showSection[i].style.display = "inline-block";
			}
			
			for(var i = 0; i < sectionNames.length; i++)
			{
				$("#"+sectionNames[i]).removeClass("currentGenre");
				$("#"+sectionNames[i]).find("img").attr("src", "image/greenButton.png");
				$("#"+sectionNames[i]).find(".visToggle").removeClass("clicked");
			}
		}
		
	});
	
	//ENABLE ALL GENRES
	$("#genreAll").click(function(){
		
			var showSection = document.getElementsByClassName("linkArticle");
			for(var i = 0; i < showSection.length; i++){
				showSection[i].style.display = "inline-block";
			}
			
			for(var i = 0; i < sectionNames.length; i++)
			{
				$("#"+sectionNames[i]).removeClass("currentGenre");
				$("#"+sectionNames[i]).find("img").attr("src", "image/greenButton.png");
				$("#"+sectionNames[i]).find(".visToggle").removeClass("clicked");
			}
	});

	// the initial seed
	var timeSeed = new Date();
	Math.seed = timeSeed.getTime();
	//Math.seed = 1467926970352;
	document.getElementById("seed").innerHTML = "Color Code: " + Math.seed;

		// in order to work 'Math.seed' must NOT be undefined,
		// so in any case, you HAVE to provide a Math.seed
	Math.seededRandom = function(max, min) {
		max = max || 1;
		min = min || 0;
		
		Math.seed = (Math.seed * 9301 + 49297) % 233280;
		var rnd = Math.seed / 233280;
		
		return min + rnd * (max - min);
	}
	
	//OPERATE CONTEXT OPTIONS FOR TAG DROPDOWN MENU
	function AddClassTags () {
	
		var sheet = document.styleSheets[1];
		//console.log(sheet);
		//console.log("Color Seed: "+Math.seed);
		
		for(var i = 0; i < tagNames.length; i++)
		{
			var color1 = Math.floor(Math.seededRandom() * 255);
			var color2 = Math.floor(Math.seededRandom() * 255);
			var color3 = Math.floor(Math.seededRandom() * 255);
			var opacity = .5 * Math.seededRandom() + .2;
			
			sheet.insertRule("."+tagNames[i]+"Hue::before" + " {position:absolute;content:' ';top: 0; right: 0; bottom: 0; left: 0; background:rgba("+color1+","+color2+","+color3+","+opacity+"); z-index:99;}", sheet.cssRules.length);
		}
	}
	AddClassTags();
	
	$(".tagToggle").click(function(){
		
		var tagHues = document.getElementsByClassName("linkArticle");

		if(!$(this).hasClass("clicked")){
		
			var tag = $(this).data("tag");
			
			$(this).addClass("clicked");
			$(this).find("img").attr("src", "image/greenButton.png");
			
			for(var i = 0; i < tagHues.length; i++){
				var tagArray = $(tagHues[i]).data("tags").split(" ");
				
				if( ($.inArray(tag, tagArray) > -1) )
				{
					$(tagHues[i]).addClass(tag+"Hue");
				}
			}

		}
		else{
		
			var tag = $(this).data("tag");
			
			$(this).removeClass("clicked");
			$(this).find("img").attr("src", "image/grayButton.png");
			
			for(var i = 0; i < tagHues.length; i++){
				var tagArray = $(tagHues[i]).data("tags").split(" ");
				
				if( ($.inArray(tag, tagArray) > -1))
				{
					$(tagHues[i]).removeClass(tag+"Hue");
				}
			}
			
		}
		
	});
	
	//DISABLE OR ENABLE ALL TAGS
	$("#tagAll").click(function(){
		
		var enabledTags = document.getElementsByClassName("tagToggle");
		var tagHues = document.getElementsByClassName("linkArticle");
		var tagArray = tagNames.map(function(e) {return e + "Hue"});

		if($(enabledTags).filter(".clicked").length > 0)
		{
			for(var i = 0; i < tagHues.length; i++)
			{
				$(tagHues[i]).removeClass(tagArray.join(" "));
			}
			
			$(enabledTags).removeClass("clicked");
			$(enabledTags).find("img").attr("src", "image/grayButton.png");
		}
		else
		{
			$(".tagToggle").click();
		}
	});
	
	
	//TURN OFF/ON THE SETTINGS MENU
	$('#settings').click(function(){
		$('#settingsMenu').toggle();
	});
	$('#close').click(function(){
		$('#settingsMenu').toggle();
	});

	//SETS CURRENT THEME
	var currentTheme = "tranBox";
	
	//CONTROLLER FOR THEMES
	$("li").click(function(){
		var option = $(this).data("option");
		console
		if(option == "Red" || option == "Green" || option == "Purple" || option == "Pink"){
			$("body").removeClass("Red Green Purple Pink");
			$("body").addClass(option);
		}
		else{
			if(currentTheme == "tranBox")
			{
				$(".tranBox").each(function(){
					$(this).removeClass("tranBox");
					$(this).addClass(option);
				});
			}
			
			else if(currentTheme == "lightBox")
			{
				$(".lightBox").each(function(){
					$(this).removeClass("lightBox");
					$(this).addClass(option);
				});
			}
			else
			{
				$(".darkBox").each(function(){
					$(this).removeClass("darkBox");
					$(this).addClass(option);
				});
			}
			
			currentTheme = option;
		}
	});
	
	function RandomizeTheme () {
		var background = [ "Green", "Red", "Purple", "Pink"];
		var bkSelect = background[Math.round(Math.seededRandom () * 3)];
		
		var allThemes = ["tranBox", "lightBox", "darkBox"];
		var allSelect = allThemes[Math.round(Math.seededRandom () * 2)];
		
		var flexThemes = ["lightBox", "darkBox"];
		var flexSelect = flexThemes[Math.round(Math.seededRandom () * 1)];
		
		$("body").removeClass("Red Green Purple Pink");
		$("body").addClass(bkSelect);
		
		if(bkSelect == "Pink")
		{
			$(".tranBox").each(function(){
				$(this).removeClass("tranBox");
				$(this).addClass(flexSelect);
			});
			currentTheme = flexSelect;
		}
		
		else if(bkSelect == "Red")
		{
			//nada
		}
		else {
			$(".tranBox").each(function(){
				$(this).removeClass("tranBox");
				$(this).addClass(allSelect);
			});
			currentTheme = allSelect;
		}
		
	}
	//RANDOMIZE THE SCENE ON LOAD
	RandomizeTheme();
	
	$(".genreToggle").hover(function(){
	
		$(this).siblings(".sectionTooltip").css({"visibility":"visible"});
		
	}, function(){
	
		$(this).siblings(".sectionTooltip").css({"visibility":"hidden"});
		
	});
	
	
});













