// print even numbers from 2 to 20
// let evenNumber: number= 2
// for (evenNumber){
// }
/*

for (let evenNumber:number = 2; evenNumber <= 20; evenNumber+=2) {
    console.log(evenNumber);
}

for (let oddNumber:number = 1; oddNumber < 25; oddNumber+=2) {
    console.log(oddNumber);
}

for(let countdown:number=10; countdown>=0;--countdown){
    console.log(countdown);
}
*/
/*
Write a for loop that iterates through numbers from 1 to 30. For multiples of 3, print "Fizz,"
for multiples of 5, print "Buzz,"
and for numbers that are multiples of both 3 and 5, print "FizzBuzz."
*/
for (var print_1 = 0; print_1 <= 30; print_1++) {
    if (print_1 % 3 == 0 && print_1 % 5 == 0) {
        console.log("fizzBuzz");
    }
    else if (print_1 % 5 == 0) {
        console.log("Buzz");
    }
    else if (print_1 % 3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log(print_1);
    }
}
// if (print=3) {
//     console.log("fizz");
// }
var sivaNagaraju = ["foddie", "short", "HardWorker"];
sivaNagaraju.forEach(function (qwertyuiop) {
    console.log(sivaNagaraju);
});
