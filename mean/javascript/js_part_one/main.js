var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];

for (i = 0; i < x.length; i++){
	console.log(x[i]);
};

x.push(100);

x += ["hello", "world", "JavaScript is Fun"];

console.log(x);

var sum = 0;

for (i = 0; i < 501; i++){
	sum += i;
};

console.log(sum);

var minLoop = [1, 5, 90, 25, -3, 0]
var min = minLoop[0]

for (i=1; i<minLoop.length; i++){
	if (minLoop[i] < min ){
		min =minLoop[i];
	};
};

console.log(min);

var sumLoop = 0;

for (i=0; i<minLoop.length; i++){
	sumLoop += minLoop[i];
}

var avgLoop = sumLoop / minLoop.length;

console.log(avgLoop);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
};

for (i in newNinja){
	console.log(i, newNinja[i])
}