
// Array.prototype.concat()

type laptopCompanys ={
    Apple: string
    samsung: string
    lenovo: string
}
const laptopCompanys = ["ilap","wordpad","thinkpad"];


interface laptopCompanys2 {
    mi:string
    realme:string
}
const laptopCompanys2 =["notepad","reallap"];


const allLaptops = laptopCompanys.concat(laptopCompanys2)
console.log(allLaptops);
