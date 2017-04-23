function fib() {
  
  var prev1 = 0;
  var prev2 = 0;

  function nacci() {
  	if (prev2 == 0){
  		prev2 = 1;
  	} else {
	    temp = prev1 + prev2;
	    prev1 = prev2
	    prev2 = temp;
    }
    console.log(prev2);
  }
  return nacci;
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"