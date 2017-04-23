function VehicleConstructor(name, numWheel, numPassengers, speed){

	if (!(this instanceof VehicleConstructor)){
    	return new VehicleConstructor(name,wheels,passengerNumber, speed);
  	}

	this.name = name;
	this.numWheel = numWheel;
	this.numPassengers = numPassengers;
	this.speed = speed;
	this.distance_travelled = 0;
	this.vin = Math.floor((Math.random() * 100000) + 1)

}


VehicleConstructor.prototype.makeNoise = function (){
	console.log("vroom vroom!");
}

VehicleConstructor.prototype.checkMiles = function(){
	console.log(this.distance_travelled);
}

VehicleConstructor.prototype.move = function (){
	this.updatedDistanceTravelled();
	this.makeNoise();
}

VehicleConstructor.prototype.updatedDistanceTravelled = function () {
	this.distance_travelled += this.speed;
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
console.log(bus.vin);

