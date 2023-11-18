type bikeType={
    model:string
    cc:number
    brand:string
}

let bikeForMap: bikeType[] = [
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
const mapDataStore = bikeForMap.map((bikeInfo: bikeType, index: number) => {
    bikeInfo.cc = 123456;
    return {
        model1: bikeInfo.model,
        cc1: bikeInfo.cc,
        brand1: bikeInfo.brand
    };
});
console.log("mapDataStore", mapDataStore);
console.log("bikeForMap", bikeForMap);
let bikeForFilter: bikeType[] = [
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
const mapDataStoreFroFikter = bikeForFilter.map((bikeInfo: bikeType, index: number) => {
    if (bikeInfo.cc < 10) {
        return bikeInfo.cc;
    }
}).filter((item, index) => item != undefined);
// fliter method is based on condtion to given new array
console.log("mapDataStoreFroFikter", mapDataStoreFroFikter);


