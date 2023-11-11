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
var outSideVariable = "qwertyuiop";
var Plant = /** @class */ (function () {
    function Plant(companyName, place, empoloyMembers) {
        this.companyNameFromClass = companyName;
        this.placeFromFromClass = place;
        this.empoloyMembersFromClass = empoloyMembers;
    }
    ;
    Plant.prototype.logPlantDetails = function () {
        console.log(this.companyNameFromClass);
        console.log(this.placeFromFromClass);
        console.log(this.empoloyMembersFromClass);
    };
    Plant.prototype.claaInsideMethod = function (name) {
        console.log(outSideVariable);
        this.logPlantDetails();
    };
    return Plant;
}());
var mahendhra = new Plant("mahendhra", "ongole", 300);
mahendhra.claaInsideMethod("siva");
// console.log(mahendhra);
