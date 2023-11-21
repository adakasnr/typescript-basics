// it helps us to convert an onject into an array of key&value pairs
// ennumerable?

// userDetails is an object by containg keys with values
const userDetails={
    name:"Siva",
    age:26,
    email:"adakasnr@gmail.com"
}

// entries method will return an array of key/values of the enumerable properties of an object
console.log(Object.entries(userDetails));

/*
we get results like
[
  [ 'name', 'Siva' ],
  [ 'age', 26 ],
  [ 'email', 'adakasnr@gmail.com' ]
]
*/