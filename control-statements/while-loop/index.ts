// While --> It also work like for loop.
let milk: number = 1; // milk value is initial value
let milkValue: number = 10;
while (milk <= 30) { //milk <= 30 --> it is condition for while

    // console.log(milk);
    // console.log(`day-->${milk} `, milkValue + milk);
    milkValue += milk; // increment of initialValue

    milk += 1; // increment of initialValue
}

console.log(milkValue);

let studentStart = 1;
let price = 0;

while (studentStart <= 40) {
    if (studentStart % 2 == 0) {
        price = price + 20000;
    } else {
        price = price + 40000;
    }

    studentStart += 1;
}

console.log(price);

let count = 1;
let uptoFive = 0;
let afterFive = 0;

while (count <= 10) {
    if (count <= 5) {
        uptoFive += 1;
    } else {
        afterFive += 1;
    }
    count = count + 1;
}
console.log(count);
console.log(uptoFive);
console.log(afterFive);







