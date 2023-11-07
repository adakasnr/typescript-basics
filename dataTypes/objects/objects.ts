// object : in real life object is a material that can be seen and touched, it will be having some properties like colour,size and taste 
// in TS we can create a object by using object word and we can assign some properties(key)

/*
syntax of the object

let objectName ={
    keyName: "value",   //keyName is property, value is property's value like colour or length
    keyName2: 0
}
*/
/*
interface is used to assgin datatype to the object key 

interface syntax
type objectName ={ 
    key:number
    key2:string
    key3:boolean
}

*/


type mobileType = {                 //type is used to assgin datatype to the object
    os: string,                    // os is key(ie., property of the object) string is a datatype
    camera: string,
    display: string,

}

/*

interface mobileType {
   os: string,                    
   camera: string,
   display: string
}


interface also used to create type for object.

*/


let mobile: mobileType = {           //mobile is object(let, const and var keywords are used to create an object)
    os: "android",                  //os is key, value of the key is android and data type ov value is string
    camera: "64mp",                 //camera is key, value of the key is 64mp and data type ov value is string
    display: "AMOLED",              //display is key, value of the key is AMOLED and data type ov value is string  
}

// mobileType is a interface of mobile


/*
text: function (s:string) {

}
text: (s:string) => void
*/

function text() {

}


console.log(mobile)

mobile.os = "IOS"

console.log("afterchange", mobile);


let bike = {
    colour: "red",
    seat_count: 1,
    brake_type: "disc",


    wheel: "alloy",
    engine_type: {
        cooling: "air cool",
        valve: 4,
        noOfCylnder: 3
    }
}

// bike.engine_type.valve = 5



// console.log("bike before", bike);
// console.log("bike before", bike.colour);

// bike.colour = "black"; // first way to access key 


// bike["seat_count"] = 2;

// console.log('bike["seat_count"]', bike["seat_count"]);

// const seatObjectKey = "seat_count";

// bike[seatObjectKey] = 10;

// console.log('bike[seatObjectKey]', bike[seatObjectKey]);

// console.log("bike after", bike);



