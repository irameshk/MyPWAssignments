/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result
*/
function calculateGrade(score){
    switch(true)
    {
       case (score >= 91 && score <=100):
        console.log(`Student mark is ${score} and Grade is "A+"`);
          break;
       case (score >= 81 && score <= 90):
        console.log(`Student mark is ${score} and Grade is "A"`);
          break;
       case (score >= 61 && score <= 80):
        console.log(`Student mark is ${score} and Grade is "B"`);
          break;
        case (score >= 41 && score <= 60):
         console.log(`Student mark is ${score} and Grade is "C"`);
          break;
        case (score >= 35 && score <= 40):
         console.log(`Student mark is ${score} and Grade is "D"`);
          break;
        case (score >= 0 && score <= 34):
         console.log(`Student mark is ${score} and Grade is "E"`);
          break;
       default:
          console.log("Please Check your input");
    }
 }
let score = 93;
 calculateGrade(score);