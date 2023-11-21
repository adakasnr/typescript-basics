// object are used to store keyed collections of various data
// assign- it combines or merge two or more js objects together

/*
type is used to asigin datatypes to the keys so that
we can use same keys wherever we want, without mentioning the datatype every time
*/

 type frontend = {            
    html: string
    css: string
    javascript: string
}

// created a object(fronend) and keys 
const frontend = {
    html: "used to create a structure of the web pages",
    css: "it is used to apply styles",
    javascript: "it is used to make the website interactive and enhance the functionality"
}

/*
interface is also works like type.
these two are used to asigin datatypes to the keys so that
we can use same keys wherever we want, without mentioning the datatype every time
*/

interface backend {
    PHP: string,
    java: string
}

// here i have created a object(backend) and keys
const backend = {
    PHP: "a serverside programming launguage",
    java: "programming launguage"
}


// here i have created a new object by combining new object by using assign method(Object.assign)
// we commit mistake by using object(lowercase alphabate of o) insted of Object(uppercase alphabate of O)
// i have used let key word to the new object b/c i may cange the or add new keys to this object

let fullStack = Object.assign(frontend, backend)
console.log(fullStack);

// we can add key directly in the method also by using curly braces like below
fullStack = Object.assign(frontend, backend, { framewroks: "reactJS" }) 
console.log("after adding object in method directly ",fullStack);

