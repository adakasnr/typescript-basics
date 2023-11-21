interface userDetails{
    name:string
    age:number
    email:string
    village:string
}

const userDetails={
    name:"Siva",
    age:26,
    email:"adakasnr@gmail.com",
    Village: "Kolachana kota"
}

// Object.values() method will return all values in the object as array
console.log(Object.values(userDetails));
