module.exports = function (){
  return {
    add: function(num1, num2) { 
         return num1 + num2;
    },
    multiply: function(num1, num2) {
         return num1 * num2;
    },
    square: function(num) {
         return num *= num 
    },
    random: function(num1, num2) {
        var higherNum;
        var lowerNum;
        if (num1 >= num2){
            higherNum = num1;
            lowerNum = num2;
        } else {
            lowerNum = num1;
            higherNum = num2;
        }
        return Math.floor((Math.random() * (higherNum - lowerNum + 1)) + lowerNum);
    }
  }
};
