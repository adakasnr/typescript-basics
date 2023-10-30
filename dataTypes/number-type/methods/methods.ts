// Number.isFinite() 

let infiniteValue: number = 1 / 0;
console.log("infinite", Number.isFinite(infiniteValue))

infiniteValue = 4 / 2
console.log("infinite", Number.isFinite(infiniteValue))

// Number.isInteger()

/*

this method is used to check weather the value is integer or not
integer- it is whole number can be positive or negative(-3,-2,-1,0,1,2,3)

*/

let integerValue: number = 2 / 4
console.log("integere", Number.isInteger(integerValue))

integerValue = 2 / 3
console.log("integer", Number.isInteger(integerValue))

// Number.isNaN()

/*

NaN--> Not A Number
this is used to check weather the the value is number or not

*/

let notANumberOrNumber: number = 100F;
console.log(" not equal  to NaN ", Number.isNaN(notANumberOrNumber))

notANumberOrNumber = 22
console.log("equal to NaN", Number.isNaN(notANumberOrNumber))

//Number.isSafeInteger()

/*



*/

//Number.parseFloat()
/*

*/




//Number.parseInt()
//Number.prototype.toExponential()
//Number.prototype.toFixed()
//Number.prototype.toLocaleString()
//Number.prototype.toPrecision()
//Number.prototype.toString()
//Number.prototype.valueOf()