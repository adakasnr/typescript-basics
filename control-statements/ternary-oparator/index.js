/*

syntax :

condition ? {} : false;
*/
var someNumber = 12;
if (someNumber) {
    console.log("number");
}
else {
    console.log("string");
}
var result = someNumber ? (!someNumber ? "inside true" : "inside false") : "false";
console.log(result);
