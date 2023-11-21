// keys method will return keys of object as array in string formate

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

// Object.keys() method will return keys of object as array 
console.log(Object.keys(userDetails));
