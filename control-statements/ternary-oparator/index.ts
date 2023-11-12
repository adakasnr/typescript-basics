

/*

syntax :

condition ? {} : false;
*/

const someNumber: number = 12;
if (someNumber) {
    console.log("number");
} else {
    console.log("string");
}

const result = someNumber ? (!someNumber? "inside true" : "inside false") : "false";

console.log(result);


