/*
 package - consits number of classes 

 class is used to create one or more objects
 constructor is used to setup object, this behaves like a methods or function.

 inside the class we can create method that works like function.

 this key word--> 
 it is a object to access the all the keys and methods inside the class
 
 <-- const mahendhra = new Plant("mahendhra","ongole",300)-->

 here i am creating object using class, mahendhra(object) will have all the methods and variables of class

 <-- Public,Private and protected -->

 public key will allow us to use

*/

// class User{
//     email:string 
//     name:string
//     constructor(email:string,name:string){
//         this.email=email
//         this.name=name
//     }
// }
// const Siva = new user ("adakasnr@gmail.com","siva")
// console.log(user);


// class Person {
//     name: string;
//     email: string;
//   }

//   const person = new Person();
//   person.name = "Siva";
//   person.email="adaka@gmail.com"

//   console.log(person);



const outSideVariable = "qwertyuiop";    
class Plant {
   public companyNameFromClass: string;
    placeFromFromClass: string;
    empoloyMembersFromClass: number;
    constructor(companyName: string, place: string, empoloyMembers: number) {
        this.companyNameFromClass = companyName;
        this.placeFromFromClass = place;
        this.empoloyMembersFromClass = empoloyMembers;
    };

    logPlantDetails(){
        console.log(this.companyNameFromClass);
        console.log(this.placeFromFromClass);
        console.log(this.empoloyMembersFromClass);    
    }

    claaInsideMethod(name:string){
        console.log(outSideVariable);
        
        this.logPlantDetails()
    }
}

const mahendhra = new Plant("mahendhra","ongole",300);

mahendhra.claaInsideMethod("siva");

class Type extends Plant{
    vari = super.claaInsideMethod("kj")
}

// console.log(companyNameFromClass);


