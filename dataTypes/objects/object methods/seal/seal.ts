// seal method is used to prevent to do changes in object keys

interface userDetails{
    name:string
    age:number
    email?:string
    village?:string
}

const userDetails={
    name:"Siva",
    age:26,
    email:"adakasnr@gmail.com",
    Village: "Kolachana kota"
}

/*
(key=property) 
Object.seal() method will prevent to change-key or add-key or delete-key
to the object but we can change value of the key
*/
console.log(Object.seal(userDetails));

userDetails.age=27
console.log(userDetails);
// here i tried to change the value of the perticular key, it got changed

delete userDetails.email;
console.log(userDetails);
// here i tried to delete the key of the userDetails, it is showing error



