var _ = {
   map: function(list, callback) {
     var temp = [];
     for (i=0; i<list.length;i++){
        temp.push(callback(list[i]));
     }  
     return temp;
   },
   reduce: function(list, callback) { 
     var temp = 0;
     for (i=0; i<list.length;i++){
        temp += callback(list[i]);
     }
     return temp;
   },
   find: function(list, callback) {   
     var temp;
     for (i=0; i<list.length;i++){
        temp = list[i];
        if (callback(list[i])){
          return temp;
        }
     }
     return "condition not found";
   },
   filter: function(list, callback) { 
     var temp = [];
     for (i=0;i<list.length;i++){
        if (callback(list[i])){
          temp.push(list[i]);
        }
     }
     return temp;
   },
   reject: function(list, callback) { 
     var temp = [];
     for (i=0;i<list.length;i++){
        if (!callback(list[i])){
          temp.push(list[i]);
        }
     }
     return temp;
   }
 }

 var mult = _.reduce([1,2,3], function(num){return num * 3;});
 var even = _.reject([1,2,3], function(num){return num % 2 == 0;});
 console.log(even);