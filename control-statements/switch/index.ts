

/*

switch (key) { // if key variable value is equal to case value that case block will call
    case value:
        
        break;  // break keyword will stop the reading the further code
    default:
        break;
}

*/


const switchValue: string = "";
switch (switchValue) {
    case "TV": // "TV" value is Switch value
        console.log("TV block");
        break;
    case "FAN":
        console.log("FAN block");
        break;

    case "Tube Light":
        console.log("Tube Light block");
        break;

    case "AC":
        console.log("AC block");
        break;

    default:
        console.log("No Power");
        break;
}