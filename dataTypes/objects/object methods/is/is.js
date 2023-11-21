// // Object.is() method is used to check the values of same keys which are in the different objects
// interface userDetails {
//     name: string
//     age: number
//     email: string
//     village: string
// }
// const userDetails = {
//     name: "Siva",
//     age: 26,
//     email: "adakasnr@gmail.com",
//     Village: "Kolachana kota"
// }
// const userDetails2 = {
//     name: "Sriman",
//     age: 24,
//     email: "adakasn@gmail.com",
//     Village: "Kolachana kota"
// }
// let sameDetails = userDetails2
// console.log(Object.is("Village", "Village"));
// console.log("checking key with different values", Object.is("name", "name"));
var obj = {
    a: 2,
    b: 2
};
var obj2 = {
    a: 2,
    b: 2
};
console.log(Object.is(obj.a, obj2.b));
