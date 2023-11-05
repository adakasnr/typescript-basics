let mobile ={
    os: "android",
    camera: "64mp",
    display: "AMOLED",
}

console.log(mobile)


let bike = {
    colour: "red",
    seat_count: 1,
    brake_type: "disc",
    wheel: "alloy",
    engine_type: {
        cooling: "air cool",
        valve: 4,
        noOfCylnder: 3
    }
}

bike.engine_type.valve = 5

console.log("bike before", bike);
console.log("bike before", bike.colour);

bike.colour = "black"; // first way to access key 



bike["seat_count"] = 2;

console.log('bike["seat_count"]', bike["seat_count"]);

const seatObjectKey = "seat_count";

bike[seatObjectKey] = 10;

console.log('bike[seatObjectKey]', bike[seatObjectKey]);

console.log("bike after", bike);