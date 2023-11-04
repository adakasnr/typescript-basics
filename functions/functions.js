/*
function- it is used to create a logic,
with the help of that logic we can do the same task multiple times
*/
/*
syntax of the function

function nameOfTheFuntion(parameters){
    body Of The Function
}

nameOfThefuntion()        //function calling

*/
function addTwo(num) {
    var output = num + 2;
    console.log("inside", num + 2); //adding value(2) to the num and log the output
    return num + 2; //here we are returning the output
}
addTwo(5); // function calling with argument value 5
console.log("outside", addTwo(5)); // here log the returned output
// Function defination
function timings(somth_1, n_2, n_3, n_4) {
    if (n_4 === void 0) { n_4 = 0; }
    console.log("somth_1", somth_1);
    console.log("n_2", n_2);
    console.log("n_3", n_3);
    console.log("n_4", n_4);
    return 10; // returning value 10
}
// Function calling
var output = timings(1, 2, 3, 4); //1,2,3,4 these are argunments
console.log("output", output);
/*
1st parameter will take the 1st argument and it continue till last parameter in series.
if one argument is  missed or not mentioned, then it gives result as undefined to the last parameter.
we can also give default value to the parameter so that when no argument is given,
then that default value will be taken or if argument is given then it considers that argument.

incase argument is given if paramter is not there then argument will not be considerd
*/
function fullName(lastname, firstname) {
    console.log("lastname", lastname, "firstname", firstname);
}
fullName("adaka", "Siva");
function addFiveNumbers(n_1, n_2, _n3, _n4, _n5) {
    var add = n_1 + n_2 + _n3 + _n4 + _n5;
    return add;
}
var result = addFiveNumbers(1, 2, 3, 4, 5);
console.log(result);
function fixedInfo(companyNmae, intime, outTime) {
    return "".concat(companyNmae, ", ").concat(intime, ", ").concat(outTime);
}
function variableInfo(reusefun, employId, employName, department, salary) {
    console.log("".concat(reusefun).concat(employId, " ").concat(employName, " ").concat(department, " ").concat(salary, " "));
}
variableInfo(fixedInfo("kia", "9:30", "5:30"), 2266, "Siva", "steering", 12000);
function addition(a, b, c) {
    console.log(c);
    console.log(a + b + c);
}
;
addition(2, 3, 4);
// addition(1,0)
function additionWithThree(a, b, c) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 3; }
    if (c === void 0) { c = 2; }
    console.log(c);
    console.log(a + b + c);
    console.log(a + b + c + substraction());
}
;
additionWithThree();
// function with return 
function substraction(x, y) {
    if (x === void 0) { x = 7; }
    if (y === void 0) { y = 5; }
    return x - y;
}
var count = 0;
function valueIncrement(value) {
    var count = value;
    for (var index = 0; index < 10; index++) {
        count = count + 1;
    }
    function innerFunctio(value) {
        // count = value;
        for (var index = 0; index < 10; index++) {
            count = count + 1;
        }
        return count;
    }
    return innerFunctio(count);
}
console.log("function return count", valueIncrement(0));
console.log("outside count", count);
