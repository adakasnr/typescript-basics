// object are used to store keyed collections of various data
// assign- it combines or merge two or more js objects together
// created a object(fronend) and keys 
var frontend = {
    html: "used to create a structure of the web pages",
    css: "it is used to apply styles",
    javascript: "it is used to make the website interactive and enhance the functionality"
};
// here i have created a object(backend) and keys
var backend = {
    PHP: "a serverside programming launguage",
    java: "programming launguage"
};
// here i have created a new object by combining new object by using assign method(Object.assign)
// we commit mistake by using object(lowercase alphabate of o) insted of Object(uppercase alphabate of O)
// i have used let key word to the new object b/c i may cange the or add new keys to this object
var fullStack = Object.assign(frontend, backend);
console.log(fullStack);
// we can add key directly in the method also by using curly braces like below
fullStack = Object.assign(frontend, backend, { framewroks: "reactJS" });
console.log("after adding object in method directly ", fullStack);
console.log(1.1 + 2.4);
