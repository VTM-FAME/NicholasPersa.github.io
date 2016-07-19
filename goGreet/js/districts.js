	function DistrictDB (location, gyms, stops){
		this.location = location;
		this.gyms = gyms;
		this.stops = stops;
	}
	
	DistrictDB.prototype.getLocation = function (){
		return this.location
	};
	DistrictDB.prototype.getGyms = function (){
		return this.gyms
	};
	DistrictDB.prototype.getStops = function (){
		return this.stops
	};

	DistrictDB.prototype.getInfo = function (){
		return [this.location, this.gyms, this.stops];
	};
	
	var CreateDistricts = [];

	CreateDistricts.push(new DistrictDB("Minneapolis","14","56"));
	CreateDistricts.push(new DistrictDB("Centennial Lakes","8","22"));
	CreateDistricts.push(new DistrictDB("Normandale Lake","3","11"));
	CreateDistricts.push(new DistrictDB("Harvard","14","56"));
	CreateDistricts.push(new DistrictDB("Rockford Lakes","8","22"));
	CreateDistricts.push(new DistrictDB("Shoktown Lake","3","11"));
	CreateDistricts.push(new DistrictDB("Kale","14","56"));
	CreateDistricts.push(new DistrictDB("Mumbai Lakes","8","22"));
	CreateDistricts.push(new DistrictDB("Chennai Lake","3","11"));

