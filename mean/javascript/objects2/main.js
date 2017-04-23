function VehicleConstructor(name, numWheel, numPassengers, speed){

	if (!(this instanceof VehicleConstructor)){
    	return new VehicleConstructor(name,wheels,passengerNumber, speed);
  	}
	
	var self = this;
	var distance_travelled = 0;
	var updatedDistanceTravelled = function () {
		distance_travelled += self.speed;
	}

	this.name = name;
	this.numWheel = numWheel;
	this.numPassengers = numPassengers;
	this.speed = speed;

	this.makeNoise = function (){
		console.log("vroom vroom!");
	}

	this.move = function (){
		updatedDistanceTravelled();
		this.makeNoise();
	}

	this.checkMiles = function(){
		console.log(distance_travelled);
	}
}

var bike = new VehicleConstructor("bike", 2, 1,30);

bike.makeNoise = function(){
	console.log("Beep Beep!");
}

var sedan = new VehicleConstructor("sedan", 4, 4,40);

sedan.makeNoise = function(){
	console.log("Honk Honk!");
}

var bus = new VehicleConstructor("bus", 4, 12,50);

bus.addPassengers = function(newPassengersCount){
	bus.numPassengers += newPassengersCount;
}

bus.addPassengers(4);
bus.checkMiles();
bus.move();
bus.checkMiles();

