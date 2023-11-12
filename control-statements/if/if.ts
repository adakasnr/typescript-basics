/*
truthy values :

numbers ==> -1 to -ve infinity and 1 to +ve infinity,

String ==> If some text is there in string that is true ex: "siva" or 'siva',

array ==> if array length is greterthan 0 it considerd as true, or [].

object ==> if object keys length is greterthan 0 it considerd as true or {},

boolean ==> true,

Falsy Values :

numbers ==> 0,

String ==> If htere is no text in string that is false ex: "" or '',

array ==> if array length is equal to 0 it considerd as false, or [].length == 0.

object ==> if object keys length is equal to 0 it considerd as false or Object.keys({}).length == 0,

boolean ==> false,

undefind, null

*/

/*
If Statament:

syntax: 
 if(number){  // if condition is true it runs the block code.

 }else{
    
 }

 or if(number) // if condition is true  it runs only below one line

*/

let conditionValueForNumber: number = 0;

if (conditionValueForNumber) {
    console.log("for number is 0: true"); 
} else {
    console.log("for number is 0: false");
}

conditionValueForNumber = 1;
if (conditionValueForNumber) {
    console.log("for number is 1: true");
} else {
    console.log("for number is 1: false");
}

conditionValueForNumber = -1;
if (conditionValueForNumber) {
    console.log("for number is -1: true");
} else {
    console.log("for number is -1: false");
}


if (conditionValueForNumber)
    console.log("for number is -1: true");





