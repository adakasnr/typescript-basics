/*
1. create a array.
2. using loop you can create 11 objects each object having each month data.
3. push each object into an array while looping.
4. store month_year key values into an a array.
5. delet 4 month object.
6. add 4 month data using loop only dont use static object.

Ex: array formate

// const months = [
//     {
//         "month_sno": 1,
//         "month_year": "Apr-2023"
//     },
//     {
//         "month_sno": 2,
//         "month_year": "May-2023"
//     },
// ]
*/
var months = [];
var allMonths = ["jan_2023", "feb"];
for (var monthInitial = 0; monthInitial <= 30; monthInitial++) {
    var monthInfo = {
        Date: monthInitial + 1,
        monthName_year: "".concat(allMonths[monthInitial], "_2023")
    };
    months.push(monthInfo);
}
console.log(months);
/*

let monthCount: number = 0
months.forEach((monthsData, index) =>{
    monthCount += 1
    console.log(monthCount);
    
})
*/
