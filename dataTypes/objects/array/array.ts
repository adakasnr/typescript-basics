// Array: it is defind as a group of a elements(ex:group of numbers,strings,data types,)
/*
array syntax
let text: []             array symbol-[]
*/

const car: any[] = [{ seatCount: 12, ventilaters_seats: 2 }, "stering", 1, ["piston", { storks: 4 }]];

console.log("index 2", car[2]);  // to check the variable with the help of index(object[index no])
console.log("index 1", car[1]);
console.log("index 3", car[3]);
console.log("index 0", car[0]);

// methods
// Text.push() - this method is used add element at the end(last index)
// Text.pop() - this method is used remove element at the end(last index)
// text.shift() - this method is used to remove element at the starting()
// text.unshift() - this method is used to add element at the starting(first index)
// text.slice() - this method is will return a part of an array


const carModels: string[] = ["SUV", "sport", "hachback"];

// push()
carModels.push("seadan");
console.log("push-",carModels);
// pop()
carModels.pop()
console.log("pop-",carModels);
// shfit()
carModels.shift()
console.log("shift",carModels);
// unshift()
carModels.unshift("convertable")
console.log("unshift-",carModels);