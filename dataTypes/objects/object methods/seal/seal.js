// seal method is used to prevent to do changes in object keys
var userDetails = {
    name: "Siva",
    age: 26,
    email: "adakasnr@gmail.com",
    Village: "Kolachana kota"
};
/*
(key=property)
Object.seal() method will prevent to change-key or add-key or delete-key
to the object but we can change value of the key
*/
console.log(Object.seal(userDetails));
userDetails.age = 27;
console.log(userDetails);
// here i tried to change the value of the perticular key, it got changed
delete userDetails.Village;
console.log(userDetails);
