// hasown method is used to check the key available in the particular object or not
// userDetails is an Object by consisting 4 keys
var userDetails = {
    name: "Siva",
    age: 26,
    email: "adakasnr@gmail.com",
    Village: "Kolachana kota"
};
// we going to checck weather a key(.,age) is available or not in userDetails object 
// if it is available it will return true if not we will get false
console.log("available key", Object.hasOwn(userDetails, "age"));
console.log("unavailable key", Object.hasOwn(userDetails, "gender"));
// note: hasOwn method is available in javascript but not available in typescript, if we run in ts we get error
