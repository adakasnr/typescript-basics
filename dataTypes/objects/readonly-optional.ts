// readonly and optional are used to make changes in object to the keys 
// readonly is used to make the key to be constant, in future we can not change the key value
// optional is to make the key undifinied, even if we don't mention that key in the object(it won't show error )

//readonly

interface bookType {
    readonly no_of_pages: number; //readonly is used to make the datatype of the to be constant(not editable)
    chapters: number; 
    subject: string;
    author?: string;              //optional(?)
}

let book = {             // object created and key values assigned
    no_of_pages: 200,
    chapters: 10,
    subject: "english",
    author: "manu"
}

console.log(book);

book.no_of_pages="hundred"  
// here it is showimg error(Type 'string' is not assignable to type 'number') b/c we have given readonly to key


function bookInfo(book: bookType) {    
                                    
}                                      

/*
function created with book(ie., object) as a variable and datatype is given as bookType 
that means the function datatype will be considered as like as bookType
*/
bookInfo(book);      //function calling

book.chapters = 12;

//optional
interface carType {
    seats: number; 
    cylinders: number; 
    GB: string;
    steering?: string;              //question mark(?) is used to make key optional
}
/*
    if we make the key optional then it will be considered as optional, 
even if we don't mention that key in object it won't show any error.
optional is used when there is posibillity in future to add the key in object
key will be created in the interface or type with question mark, but key will be not mentioned in the object 
as there is no need of that key rigt now.
*/

let car:carType={     // carType is datatype which is created through interface
    seats: 5,
    cylinders:4,
    GB:"automatic"    //here i have given only 3 keys as against 4 keys in in the interface even though it is not showing any error
}

console.log(car);



interface objectTpe {
    objKey: number;                                    // datatype is given to the key
    objKey_2: number;

}

function object(objejData: objectTpe): objectTpe {     //function return datatype is mentioned with colon(:)
    const innerFunctionObject: objectTpe = objejData;  //another variable is created and datatype is mentioned, value is assigned (ie., parameter in the function)
    return innerFunctionObject;                        //funtion return(this will directly return the function detailes even though function name has not given b/c it is coneted to the function)
}

let obj = {                   // object created
    objKey: 1,
    objKey_2: 2
}

object(obj);    //function calling 

//function will be having the same datatypes as obj b/c it is given as argument to the function


