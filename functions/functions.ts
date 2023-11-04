/* 
function- it is used to create a logic, 
with the help of that logic we can do the same task multiple times 
*/

/*
syntax of the function

function nameOfTheFuntion(parameters){
    body Of The Function
}

nameOfThefuntion()        //function calling 

*/

function addTwo(num: number): number {
    const output = num + 2;
    console.log("inside", num + 2); //adding value(2) to the num and log the output
    return num + 2; //here we are returning the output
}

addTwo(5) // function calling with argument value 5
console.log("outside", addTwo(5)); // here log the returned output


// Function defination
function timings(somth_1: number, n_2: number, n_3: number, n_4: number = 0): number { // somth_1, n_2,n_3,n_4 these are parameters
    console.log("somth_1", somth_1);
    console.log("n_2", n_2);
    console.log("n_3", n_3);
    console.log("n_4", n_4);
    return 10; // returning value 10
}


// Function calling
const output = timings(1, 2, 3, 4);  //1,2,3,4 these are argunments
console.log("output", output);
/*
1st parameter will take the 1st argument and it continue till last parameter in series.
if one argument is  missed or not mentioned, then it gives result as undefined to the last parameter.
we can also give default value to the parameter so that when no argument is given,
then that default value will be taken or if argument is given then it considers that argument.

incase argument is given if paramter is not there then argument will not be considerd
*/

function fullName(lastname: string, firstname: string) {
    console.log("lastname", lastname, "firstname", firstname);
}

fullName("adaka", "Siva")



function addFiveNumbers(n_1: number, n_2: number, _n3: number, _n4: number, _n5: number) {
    const add = n_1 + n_2 + _n3 + _n4 + _n5;

    return add

}

const result = addFiveNumbers(1, 2, 3, 4, 5);

console.log(result);


function fixedInfo(companyNmae:string, intime:string, outTime:string) {
    return `${companyNmae}, ${intime}, ${outTime}`
}


function variableInfo(reusefun, employId:number, employName:string, department:string, salary:number) {
    console.log(`${reusefun}${employId} ${employName} ${department} ${salary} `);
}

variableInfo(fixedInfo("kia", "9:30", "5:30"), 2266, "Siva", "steering", 12000)



function addition(a: number, b: number, c: number) {
    console.log(c);
    console.log(a + b + c);
};
addition(2, 3, 4)
// addition(1,0)



function additionWithThree(a: number = 2, b: number = 3, c: number = 2) { // defolt perameter value 
    console.log(c);
    console.log(a + b + c);
    console.log(a + b + c + substraction());
};
additionWithThree()

// function with return 

function substraction(x: number = 7, y: number = 5) {
    return x - y;
}


let count: number = 0;

function valueIncrement(value: number) {
    let count: number = value;
    for (let index = 0; index < 10; index++) {
        count = count + 1;
    }

    function innerFunctio(value: number) {
        // count = value;
        for (let index = 0; index < 10; index++) {
            count = count + 1;
        }

        return count;
    }

    return innerFunctio(count);
}

console.log("function return count", valueIncrement(0));
console.log("outside count", count);