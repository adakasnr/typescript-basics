
// text.length

let textLength: string ="learning typescript";
console.log("textLength-", textLength.length);

textLength

// text.trim()

let textTrim: string ="     trim means cut      ";
console.log("textTrim-",textTrim.trim());

// trimStart()

let trimAtStarting: string ="      triming at starting of the scentence      ";
console.log("trimStrat-",trimAtStarting.trimStart());

// trimEnd()

let trimAtEnding: string="    triming at the end of  scentence      ";
console.log("trimAtEnd-",trimAtEnding.trimEnd());


// text.slice()

let textSlice: string ="slice means taking a piece";
console.log('textSlice-',textSlice.slice(21,26))

//text.replace()

let textReplace: string= "replacing an alphabate or a word at one place";
console.log("textReplace-",textReplace.replace("place","spot"));

//text.ReplaceAll

/*
let textreplaceAll: string= "replaceAll method is used to replace all alphabates or a word throught the string"
console.log("replaceAll-",textreplaceAll.replaceAll());

it got recently updated and it does not work in internet explorer
this method is not available in visualStudio to perform 
*/

// text.toUpperCase

let textToUpperCase: string= "Converting Total Text Into UpperCase"
console.log("toUpperCase-",textToUpperCase.toUpperCase());

//text.toLowerCase

let textToLowerCase: string= "Converting Total Text Into LowerCase"
console.log("toLowerCase-",textToLowerCase.toLowerCase());

//text.concat

let textConcat: string="adding some text or string either at start or end of the string"
console.log("textConcat-",textConcat.concat("@gmail.com"));

//text.charAt

let textCharAt: string="it returns the specified alphabate based on index"
console.log("textCharAt-",textCharAt.charAt(27));




/*

console.log(name.substring(-10, 2));


const fName = "hai hello hoe are you"
console.log(fName.length);
console.log("-------------------------");
console.log( fName.slice(1, 11));
// console.log("substring",fName.substring(-5, 5));
// console.log(fName.substr(6, 10));
// console.log('replace   ', fName.replace(/HOE/i, 'where'));

// console.log(fName.replaceAll(' ', ','));
// console.log(fName.toUpperCase());
// console.log(fName.toLowerCase());

let sName = 234
let lName = 'Siva'
 console.log(sName + ' ' + lName);
console.log('-------------------');
// console.log(sName.concat('@gmail.com'));
console.log('-------------------');
console.log(lName.trimEnd());
console.log(lName.trimStart());
console.log(lName.padStart("string"))

console.log('-------------------');
console.log(lName.charAt(2));

console.log(lName.indexOf('v'));

console.log('-------------------');
console.log(lName.includes('x'));


let bike={bikeColor:'Red',bikeName:"honda"};
 
console.log(bike.valueOf());

*/