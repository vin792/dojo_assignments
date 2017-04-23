// Part 1 - standard

function sumConsecutiveIntegers(x, y){
	var sum = 0;

	for (i = x; i <= y; i++){
		sum += i;
	}

	return sum;
}

console.log(sumConsecutiveIntegers(3,5));

function minArr(myArr){
	var min = myArr[0]

	for (i = 1; i < myArr.length; i++){
		if (myArr[i] < min) {
			min = myArr[i];
		};
	};

	return min
};

console.log(minArr([3,4,5]));

function avgArr(myArr){
	var sum = 0;

	for (i = 0; i < myArr.length; i++){
		sum += myArr[i];
	};

	var avg = sum / myArr.length;
	return avg;
};

console.log(avgArr([3,4,5]));

// Part 2 - anonymous functions

var anonSumConsec = function(x, y){
	var sum = 0;

	for (i = x; i <= y; i++){
		sum += i;
	}

	return sum;
};

console.log(anonSumConsec(3,5));

var anonMinArr = function(myArr){
	var min = myArr[0]

	for (i = 1; i < myArr.length; i++){
		if (myArr[i] < min) {
			min = myArr[i];
		};
	};

	return min
};

console.log(anonMinArr([3,4,5]));

var anonAvgArr = function(myArr){
	var sum = 0;

	for (i = 0; i < myArr.length; i++){
		sum += myArr[i];
	};

	var avg = sum / myArr.length;
	return avg;
};

console.log(anonAvgArr([3,4,5]));

// Part 3 - methods on object

var object = {
	obSumConsec: function(x, y){
		var sum = 0;

		for (i = x; i <= y; i++){
			sum += i;
		};

		return sum;
	},
	obMinArr: function(myArr){
		var min = myArr[0]

		for (i = 1; i < myArr.length; i++){
			if (myArr[i] < min) {
				min = myArr[i];
			};
		};

		return min
	},
	obAvgArr: function(myArr){
		var sum = 0;

		for (i = 0; i < myArr.length; i++){
			sum += myArr[i];
		};

		var avg = sum / myArr.length;
		return avg;
		}
};

console.log(object.obSumConsec(3,5));

var person = {
	name: "Vineeth",
	distance_traveled:0,
	say_name: function(){
		console.log(this.name);
	}, 
	say_something: function(myLine){
		console.log(this.name + " says " + myLine);
	},
	walk: function(){
		console.log(this.name + " is walking");
		this.distance_traveled += 3;
		return person;
	},
	run: function(){
		console.log(this.name + " is running");
		this.distance_traveled += 10;
		return person;
	},
	crawl: function(){
		console.log(this.name + " is crawling");
		this.distance_traveled += 1;
		return person;
	},
}

person.say_something("hello");







