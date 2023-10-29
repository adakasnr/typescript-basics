// Number.isFinite() 
var infiniteValue = 1 / 0;
console.log("infinite", Number.isFinite(infiniteValue));
infiniteValue = 4 / 2;
console.log("infinite", Number.isFinite(infiniteValue));
