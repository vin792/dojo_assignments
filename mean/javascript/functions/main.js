function runningLogger(){
	console.log("I am running!");
};

function multiplyByTen(mult){
	mult *= 10;
	return mult;
};

console.log(multiplyByTen(5));

function stringReturnOne(){
	return "stringReturnOne";
};

function stringReturnTwo(){
	return "stringReturnTwo";
};

function caller(callback){
	if (typeof(callback) === "function"){
		callback();
	};
};

function myDoubleConsoleLog(myFunc1, myFunc2){
	if (typeof(myFunc1) === "function"){
		console.log(myFunc1());
	};
	if (typeof(myFunc2) === "function"){
		console.log(myFunc2());
	};
}

function caller2(myFunc){
	console.log("starting");
	setTimeout(function(){ 

		console.log(typeof(myFunc));

		if(typeof(myFunc) === "function"){
			myFunc();
		}; 

		console.log("ending?");
		return "interesting";

	} , 2000);
	
}

caller2(myDoubleConsoleLog);
