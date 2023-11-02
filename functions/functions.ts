// function addTwo(num:number):number{
//     //  num+2
//      console.log("inside",num+2);

//      return num +2;

// }

// // addTwo(5)
// console.log("outside",addTwo(5));


// const timingsFunctionTwo = function () {

// }

// const timingsFunctionTHree = () => {  }

let variable: string = "qwer";
console.log(variable);


// Function defination
/*function timings(somth_1: number, n_2: number, n_3: number, n_4: number = 0):number { // somth_1, n_2,n_3,n_4 these are parameters
    console.log("somth_1", somth_1);
    console.log("n_2", n_2);
    console.log("n_3", n_3);
    console.log("n_4", n_4);
    return 10;
}


// Function calling
const output = timings(1, 2, 3, 4);  //1,2,3,4 these are argunments
console.log("output",output);


function fullName(lastname:string,firstname:string){
    console.log("lastname",lastname,"firstname",firstname);
}



fullName("adaka","Siva")
*/
















function addFiveNumbers(n_1:number,n_2:number,_n3:number,_n4:number,_n5:number){
    const add = n_1+n_2+_n3+_n4+_n5;

    return add
    
}

const result = addFiveNumbers(1,2,3,4,5);

console.log(result);
