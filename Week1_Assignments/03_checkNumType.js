/*
1. Create a function named `checkNumberType` that takes a number as a parameter.

2. Use `if` to check if the number is greater than 0.
   Use `else if` to check if the number is less than 0.
   Use `else` to handle the case when the number is not greater than 0 or less than 0 
   (i.e., when it is zero).

3. Return the corresponding string value for each case.

4. Declare and initialize the variable

5. Call the function and print the result

*/
function checkNumberType(inputVal){
    if(inputVal > 0){
       console.log(`Given number "${inputVal}" is greater than 0`);
    }
    else if(inputVal < 0){
       console.log(`Given number "${inputVal}" is less than 0`);
    }
    else{
        console.log(`Given number "${inputVal}" is neither greater nor less than 0`);
    }
 }
 
 let inputVal = -88;
 checkNumberType(inputVal);