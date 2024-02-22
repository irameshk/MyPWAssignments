/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/
var val=5;
function numberSum(val) {
    var total = 0;
      for(var i = 1; i <= val; i++){
        console.log(i)
        total += i;
      }
      console.log (`Total Sum value of above numbers are ${total}`);
  }
numberSum(val);