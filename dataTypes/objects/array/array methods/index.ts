interface SchoolType {
    id: number,
    class: string,
    count?: number // ? it means when we call the object if value is there. i
}

let school: SchoolType[] = [
    {
        id: 2,
        class: "6th Class",
        count: 200
    },
    {
        id: 1,          
        class: "7th Class",
        count: 100
    },
    {
        id: 3,
        class: "t8h Class",
        count: 20
    },
    {
        id: 4,
        class: "9th Class",
        count: 2000
    },
    {
        id: 5,
        class: "10th Class",
        count: 10
    }
]

let count: number = 0;
school.forEach((schoolClass, indexValue) => {// In foreach method first veriable is mention to object
    count += indexValue;                      // second veriable mention to index value 
    // console.log("schoolClass", schoolClass)//and in foreach method no need to mention same veriable of index
    // console.log("indexValue", indexValue);
    console.log("inside count", count);     
})
console.log("outside count", count);


school.forEach(function (schoolClass, indexValue) { //forEach method has by defolt two variables is there
    console.log("schoolClass", schoolClass);
    console.log("indexValue", indexValue);
})

school.forEach((schoolClass, indexValue) => {
    console.log("schoolClass", schoolClass["class"]);
    console.log("schoolClass", schoolClass.class);
    console.log("schoolClass", schoolClass.id);
    console.log("schoolClass", schoolClass.count);
    console.log("indexValue", indexValue);
    console.log(schoolClass.class);

    if (schoolClass.id == 1) {
        schoolClass.count = 55;
    }

    schoolClass["no_of_periods"] = 7;
    delete schoolClass.count;
    // schoolClass.no_of_periods = 7;


    return schoolClass;

})

console.log("school", school);





// methods

// Array.prototype.at()

// Array.prototype.concat()

// Array.prototype.map()

// Array.prototype.sort()

// Array.prototype.slice()