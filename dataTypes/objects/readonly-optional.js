// readonly and optional are used to make changes in object to the keys 
// readonly is used to make the key to be constant, in future we can not change the key value
// optional is to make the key undifinied, even if we don't mention that key in the object(it won't show error )
var book = {
    no_of_pages: 200,
    chapters: 10,
    subject: "english",
    author: "manu"
};
console.log(book);
book.no_of_pages = "hundred";
// here it is showimg error(Type 'string' is not assignable to type 'number') b/c we have given readonly to key
function bookInfo(book) {
}
/*
function created with book(ie., object) as a variable and datatype is given as bookType
that means the function datatype will be considered as like as bookType
*/
bookInfo(book); //function calling
book.chapters = 12;
/*
    if we make the key optional then it will be considered as optional,
even if we don't mention that key in object it won't show any error.
optional is used when there is posibillity in future to add the key in object
key will be created in the interface or type with question mark, but key will be not mentioned in the object
as there is no need of that key rigt now.
*/
var car = {
    seats: 5,
    cylinders: 4,
    GB: "automatic" //here i have given only 3 keys as against 4 keys in in the interface even though it is not showing any error
};
console.log(car);
function object(objejData) {
    var innerFunctionObject = objejData; //another variable is created and datatype is mentioned, value is assigned (ie., parameter in the function)
    return innerFunctionObject; //funtion return(this will directly return the function detailes even though function name has not given b/c it is coneted to the function)
}
var obj = {
    objKey: 1,
    objKey_2: 2
};
object(obj); //function calling 
//function will be having the same datatypes as obj b/c it is given as argument to the function
