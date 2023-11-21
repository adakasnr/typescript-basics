// object are used to store keyed collections of various data
// assign- it combines or merge two or more js objects together
var frontend = {
    html: "used to create a structure of the web pages",
    css: "it is used to apply styles",
    javascript: "it is used to make the website interactive and enhance the functionality"
};
var backend = {
    PHP: "a serverside programming launguage",
    java: "programming launguage"
};
var fullStack = Object.assign(frontend, backend);
console.log(fullStack);
fullStack = Object.assign(frontend, backend, { framewroks: "reactJS" });
// we can add key directly in the method also
console.log("after adding object in ", fullStack);
