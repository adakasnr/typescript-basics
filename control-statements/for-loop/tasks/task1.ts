/*
task1
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

type monthsType = {
    month: number
    monthName_year: string
}

let months:any= []
let allMonths:string[]=["jan_2023","feb"]
for (let monthInitial = 0; monthInitial <= 30; monthInitial++) {
    let monthInfo:any = {
        Date: monthInitial + 1,
        monthName_year: `${allMonths[monthInitial]}_2023`
    }
    months.push(monthInfo);
    
    
}
console.log(months);



