// class is used to create one or more objects
// constructor is ised to setup object, this behaves like a methods or function


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
    companyNameFromClass: string;
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

// console.log(mahendhra);


