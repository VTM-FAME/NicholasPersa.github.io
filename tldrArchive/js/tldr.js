

$(document).ready(function(){

	/*var documentArray = [
	{title:"Good Question Game", link:"https://quip.com/iUDRAFpLiDT5", weight:500, tags:["games","education"], section:"education"},
	{title:"TLDR Archive", link:"https://quip.com/QDiJAu9KsTa7",weight:1000,tags: ["games","business"], section:"business"}
	];*/
	
	//console.log(documentArray);
	//console.log(documentArray[0]);
	
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
	
	articleItems.push(new Article("Good Question Game","https://quip.com/iUDRAFpLiDT5",500,["games","education"],"education"));
	articleItems.push(new Article("TLDR Archive","https://quip.com/QDiJAu9KsTa7",1000,["games","business"],"business"));
	articleItems.push(new Article("Job Description","https://quip.com/JN4LADIMxLuj",1000,["games","business"],"business"));
	articleItems.push(new Article("Arrowhead: Magicka","https://quip.com/4T9fAuWAeWx0",600,["games","development"],"games"));

	
	//console.log(articleItems[0].getInfo());
	//console.log(articleItems[1].getInfo());
	
	function LoadContainer (items) {
		
		for(var i = 0; i < items.length; i++){
			
			if(items[i].getSection() != null){
					//console.log(items[i].getSection());
				$("#itemContainer").append('<a href="'+ items[i].getLink() +'" target="_blank"><div class="linkArticle tranBox '+ items[i].getSection() +'"><p class="tags">'+ items[i].getTags().join(" ") +'</p><h6>'+ (i+1) +'</h6><h4>'+ items[i].getSection().substring(0,2) +'</h4><h5>'+ items[i].getTitle() +'</h5></div></a>');
				
				if( !($.inArray(items[i].getSection(), sectionNames) > -1) )
				{
					sectionNames.push(items[i].getSection());
				}
				for(var j = 0; j < items[i].getTags().length; j++){
					if( !($.inArray(items[i].getTags()[j], tagNames) > -1) )
					{
						tagNames.push(items[i].getTags()[j]);
					}
				}
				
			}
			
		}
	}
	
	var sectionNames = [];
	var tagNames = [];
	function LoadSearch(sections, tags)
	{
		for(var i = 0; i < sections.length; i++){
			if(sections[i] != null){
				$("#sectionContain").append('<div id="'+ sections[i] +'" data-section="'+ sections[i] +'"><p>'+ sections[i] +'</p><div class="visToggle" data-section="'+ sections[i] +'"><img class="button" src="image/greenButton.png"></div></div>');
			}
		}
		
		//$("#searchContain").append('<div class="titleInfo" data-section="titleInfo"><p>Title</p><div class="visToggle" data-section="null"></div></div><div class="weightInfo" data-section="weightInfo"><p>Weight</p><div class="visToggle" data-section="null"></div></div>')
		
		$("#sortContain").append('<div class="titleInfo" data-section="titleInfo"><p>Title</p><div class="visToggle" data-section="null"><img class="button" src="image/greenButton.png"></div></div><div class="weightInfo" data-section="weightInfo"><p>Weight</p><div class="visToggle" data-section="null"><img class="button" src="image/greenButton.png"></div></div>')
		
		for(var i = 0; i < tags.length; i ++){
			if(tags[i] != null){
				$("#tagInfo").append('<div data-tag="'+tags[i]+'"><p>'+tags[i]+'</p><div class="tagToggle" data-section="null"><img class="button" src="image/greenButton.png"></div></div>');
			}
		}
	}
	
	//sorts by weight
	articleItems.sort(function(a, b){
		return b.weight - a.weight
	});
	
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
	
	articleItems.sort(function(a, b){
		var tagsA = a.tags[1].toLowerCase(), tagsB = b.tags[1].toLowerCase();
		if(tagsA < tagsB){ //sort string ascending
			return -1;
		}
		if(tagsA > tagsB){
			return 1;
		}
		return 0; //default return value (no sorting)
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
	
	LoadContainer(articleItems);
	$("#itemContainer").empty();
	LoadContainer(articleItems);
	LoadContainer(articleItems);
	LoadContainer(articleItems);

	LoadSearch(sectionNames, tagNames);
	console.log([sectionNames,tagNames]);
	
	$(".visToggle").click(function(){
	
		if(!$(this).hasClass("clicked")){
			var type = $(this).data("section");
			var hideSection = document.getElementsByClassName(type);
			for(var i = 0; i < hideSection.length; i++){
				hideSection[i].style.display = "none"
			}
			
			$(this).addClass("clicked");
			
			//$(this).css({"background":"rgba(230, 55, 71, 1)"});
			$(this).find("img").attr("src", "image/redButton.png");
		}
		else{
			var type = $(this).data("section");
			var showSection = document.getElementsByClassName(type);
			for(var i = 0; i < showSection.length; i++){
				showSection[i].style.display = "inline-block"
			}
			
			$(this).removeClass("clicked");
			
			//$(this).css({"background":"rgba(46, 177, 119, 1)"});
			$(this).find("img").attr("src", "image/greenButton.png");
		}
		
	});
	
	$(".tagToggle").click(function(){
		
		if(!$(this).hasClass("clicked")){
			var type = $(this).data("tag");
			var hideSection = document.getElementsByClassName(type);
			for(var i = 0; i < hideSection.length; i++){
				hideSection[i].style.display = "none"
			}
			
			$(this).addClass("clicked");
			
			$(this).find("img").attr("src", "image/redButton.png");

		}
		else{
			var type = $(this).data("tag");
			var showSection = document.getElementsByClassName(type);
			for(var i = 0; i < showSection.length; i++){
				showSection[i].style.display = "inline-block"
			}
			
			$(this).removeClass("clicked");
			
			$(this).find("img").attr("src", "image/greenButton.png");
		}
		
	});
	
	$('#settings').click(function(){
		$('#settingsMenu').toggle();
	});
	$('#close').click(function(){
		$('#settingsMenu').toggle();
	});

	var currentTheme = "tranBox";
	
	$("li").click(function(){
		var option = $(this).data("option");
		
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
		var bkSelect = background[Math.round(Math.random () * 3)];
		
		var allThemes = ["tranBox", "lightBox", "darkBox"];
		var allSelect = allThemes[Math.round(Math.random () * 2)];
		
		var flexThemes = ["lightBox", "darkBox"];
		var flexSelect = flexThemes[Math.round(Math.random () * 1)];
		
		$("body").removeClass("Red Green Purple Pink");
		$("body").addClass(bkSelect);
		
		if(bkSelect == "Pink")
		{
			$(".tranBox").each(function(){
				$(this).removeClass("tranBox");
				$(this).addClass(flexSelect);
			});
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
		}
	
	}
	RandomizeTheme();
	
	//console.log(articleItems[]);
	//console.log(articleItems.sort(sort_by("weight", true, parseInt)));
	//console.log(articleItems.sort(sort_by("weight", false, parseInt)));
	
	
});













