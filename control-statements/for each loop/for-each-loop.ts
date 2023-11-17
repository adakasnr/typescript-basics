type ConfigurationType = {
    company: string
    dispplaySize?: number
    RAM?: string
    Battery?: string
    ROM?: string
}

let laptopConfiguration: ConfigurationType[] = [
    {
        company: "lanovo",
        dispplaySize: 15.7,
        RAM: "8gb",
        Battery: "3000mAh"
    },
    {
        company: "HP",
        dispplaySize: 15.7,
        RAM: "16gb",
        Battery: "3500mAh"
    },
    {
        company: "Dell",
        dispplaySize: 14.7,
        RAM: "8gb",
        Battery: "280mAh"
    },
    {
        company: "Apple",
        dispplaySize: 14.7,
        RAM: "8gb",
        Battery: "1800mAh"
    }
]

// count

let CompanysCount: number = 0
laptopConfiguration.forEach((companyName, indexValue) => {
    CompanysCount += 1
    console.log(CompanysCount);

    if (companyName.company == "HP") {
        companyName.RAM = "8GB"
    }

    companyName["cameraMegaPixle"] = 10
    delete companyName.Battery

    if (companyName.company == "Dell") {
        delete companyName.dispplaySize
    }

    if (companyName.company == "Apple") {
        companyName["ROM"] = companyName["RAM"]
        delete companyName.RAM
        companyName.ROM="512GB"
    }

})

console.log("RamAddToHP", laptopConfiguration);
console.log("NewKeyAdd", laptopConfiguration);
console.log("KeyDeleted", laptopConfiguration);
console.log("replaceKey", laptopConfiguration);
console.log("assign Value to replacedKey",laptopConfiguration);








