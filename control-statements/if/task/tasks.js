/*
Task 1: Temperature Checker  ==> reference ChatGPT

Write a JavaScript program that checks the temperature and logs different messages to the console
based on the temperature:

If the temperature is greater than 30 degrees Celsius, log "It's a hot day!"
If the temperature is between 20 and 30 degrees Celsius (inclusive), log "The weather is moderate."
If the temperature is less than 20 degrees Celsius, log "It's a cold day."

*/
// let temperature: number = 20
// if (temperature > 30) {
//     console.log("it's hot day");
// } else if (temperature >= 20 && temperature <= 30) {
//     console.log("The weather is moderate.");
// } else if (temperature < 20) {
//     console.log("It's a cold day.");
// }
/*
Task 2: Check for Even or Odd ==> reference ChatGPT

Write a JavaScript program that asks the user to enter a number using prompt.
Check if the number is even or odd, and log the result to the console.

*/
// let myNumber:number=21
// if (myNumber%2==0){
//     console.log("Even");
// }else{
//     console.log("odd");
// }
/**
Task 5: Grade Checker
Ask the user to enter their exam score using prompt. Use the following grading system and
log the corresponding grade:

90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F

*/
var marks = 102;
if (marks >= 90 && marks <= 100) {
    console.log("A");
}
else if (marks >= 80 && marks <= 89) {
    console.log("B");
}
else if (marks >= 70 && marks <= 79) {
    console.log("C");
}
else if (marks >= 60 && marks <= 69) {
    console.log("D");
}
else if (marks <= 60) {
    console.log("F");
}
else if (marks > 100) {
    console.log("invalid marks");
}
