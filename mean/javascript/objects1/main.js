function VehicleConstructor(name, numWheel, numPassengers){
	var vehicle = {};

	vehicle.name = name;
	vehicle.numWheel = numWheel;
	vehicle.numPassengers = numPassengers;

	vehicle.makeNoise = function (){
		console.log("vroom vroom!");
	}

	return vehicle;
}

var bike = VehicleConstructor("bike", 2, 1);

bike.makeNoise = function(){
	console.log("Beep Beep!");
}

var sedan = VehicleConstructor("sedan", 4, 4);

sedan.makeNoise = function(){
	console.log("Honk Honk!");
}

var bus = VehicleConstructor("bus", 4, 12);

bus.addPassengers = function(newPassengersCount){
	bus.numPassengers += newPassengersCount;
}

bus.addPassengers(4);
