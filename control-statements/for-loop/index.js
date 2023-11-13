/*

Increment                         and                       Decrement
1.preIncrement (++variable)                                 1.preDecrement (--variable)
2.PostIncrement (variable++)                                2.postDecrement (variable--)

*/
var number = 10;
// console.log(++number); // 
// console.log(number++); // 
// console.log(number); // 
// const result = ++number + number++ + number;
// console.log(result);
// const result = --number - number++ + ++number - number++ - --number + number++ - --number + number--;
// console.log(result);
for (var initialValue = 1; initialValue <= 3 || 9 >= initialValue; initialValue++) {
    console.log(initialValue);
    if (initialValue == 9)
        initialValue = 1;
}
