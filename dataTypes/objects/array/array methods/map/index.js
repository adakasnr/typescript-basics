var bikeForMap = [
    {
        model: "shine",
        cc: 125,
        brand: "honda"
    },
    {
        model: "activa",
        cc: 110,
        brand: "honda"
    }
];
console.log("bikeForMap", bikeForMap);
var mapDataStore = bikeForMap.map(function (bikeInfo, index) {
    bikeInfo.cc = 123456;
    return {
        model1: bikeInfo.model,
        cc1: bikeInfo.cc,
        brand1: bikeInfo.brand
    };
});
console.log("mapDataStore", mapDataStore);
console.log("bikeForMap", bikeForMap);
var bikeForFilter = [
    {
        model: "shine",
        cc: 10,
        brand: "honda"
    },
    {
        model: "activa",
        cc: 9,
        brand: "honda"
    }
];
var mapDataStoreFroFikter = bikeForFilter.map(function (bikeInfo, index) {
    if (bikeInfo.cc < 10) {
        return bikeInfo.cc;
    }
}).filter(function (item, index) { return item != undefined; });
// fliter method is based on condtion to given new array
console.log("mapDataStoreFroFikter", mapDataStoreFroFikter);
// primitive Data types
var number = 234; // primitive types are called number,string and boolen etc (data types)
var copyNumber = number;
copyNumber = 888;
var object = {
    id: 1,
    name: "sri",
    age: 25,
    insideObject: {
        color: "pink"
    }
};
/*shallow copy is applys no change of the
premitive data type changes of the non premitive data types  */
var anotherObject = Object.assign({}, object); //calling type 
anotherObject.age = 12;
anotherObject.insideObject.color = "red";
console.log("object", object);
console.log("anotherObject", anotherObject);
/*Deep clone is applyes create a new array ,object and function there is no changes */
//let anotherObjectForDeepClone: Object = JSON.parse(JSON.stringify(object));other type of call in deep clone 
var anotherObjectForDeepClone = structuredClone(object); //an other type of call in deep clone 
anotherObjectForDeepClone.age = 12;
anotherObjectForDeepClone.insideObject.color = "red";
console.log("object", object);
console.log("anotherObjectForDeepClone", anotherObjectForDeepClone);
