function personConstructor(name){
	this.name = name;
	this.distance_traveled = 0;
	this.say_name = function(){
			console.log(this.name);
		};
	this.say_something = function(myLine){
			console.log(this.name + " says " + myLine);
		};
	this.walk = function(){
			console.log(this.name + " is walking");
			this.distance_traveled += 3;
			return this;
		};
	this.run = function(){
			console.log(this.name + " is running");
			this.distance_traveled += 10;
			return this;
		};
	this.crawl = function(){
			console.log(this.name + " is crawling");
			this.distance_traveled += 1;
			return this;
		};
}
	
var me = new personConstructor("Vineeth")

me.say_something("hello");
me.run().walk();
console.log(me.distance_traveled);

function ninjaConstructor(name, cohort){
	this.name = name;
	this.cohort = cohort;
	this.belt_level = "yellow-belt";
	this.level_up = function(){
		this.belt_level = "black-belt";
	}

}