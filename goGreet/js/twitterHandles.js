//var twitterHandles = ["PeteRose", "KavinRose", "JacobRose", "MartinRose"];
//var teamIcon = ["mystic","instinct","valor"];



	function PlayerDB (handle, team, district, cosmetic){
		this.handle = handle;
		this.team = team;
		this.district = district;
		this.cosmetic = cosmetic;
	}
	
	PlayerDB.prototype.getHandle = function (){
		return this.handle
	};
	PlayerDB.prototype.getTeam = function (){
		return this.team
	};
	PlayerDB.prototype.getDistrict = function (){
		return this.district
	};
	PlayerDB.prototype.getCosmetic = function (){
		return this.cosmetic
	};

	PlayerDB.prototype.getInfo = function (){
		return [this.handle, this.team, this.district, this.cosmetic];
	};
	
	var Trainers = [];

	Trainers.push(new PlayerDB("NicholasPersa","Mystic","Minneapolis","Ace Trainer Female"));
	Trainers.push(new PlayerDB("LauraLundahl","Mystic","Centennial Lakes","Ace Trainer Male"));
	Trainers.push(new PlayerDB("Charles","Valor","Centennial Lakes","Hiker"));
	Trainers.push(new PlayerDB("Peter","Instinct","Centennial Lakes","Camper"));
	Trainers.push(new PlayerDB("Jeff","Valor","Centennial Lakes","Ace Trainer Male"));
	Trainers.push(new PlayerDB("NicholasPersa","Mystic","Centennial Lakes","Ace Trainer Female"));
	Trainers.push(new PlayerDB("Frank","Mystic","Centennial Lakes","Black Belt"));
	Trainers.push(new PlayerDB("Jeff","Mystic","Centennial Lakes","Black Belt"));
	Trainers.push(new PlayerDB("LauraLundahl","Valor","Centennial Lakes","Hiker"));
	Trainers.push(new PlayerDB("NicholasPersa","Instinct","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Valor","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Mystic","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Valor","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Instinct","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Valor","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Instinct","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Instinct","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Instinct","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Instinct","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Instinct","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Instinct","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Instinct","Centennial Lakes","Ace Trainer"));
	Trainers.push(new PlayerDB("PeteRose","Instinct","Centennial Lakes","Ace Trainer"));
















