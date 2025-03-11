const Truck = function(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        let message = "Driver " + this.driver.name + " ";
        if (this.driver.nightDriving) {
            message += "drives at night ";
        } else {
            message += "does not drive at night ";
        }
        message += "and has " + this.driver.experience + " years of experience";
        
        console.log(message);
    }
};

console.log("Task 1.2.10");
const truck1 = new Truck("Green", 10000, 110, "Renault", "Trafic");
truck1.AssignDriver("Yurii Chasovshchykov", true, 3);

console.log("Trip Truck1:");
truck1.trip();

const truck2 = new Truck("Yellow",11000, 95, "Renault", "Master");
truck2.AssignDriver("Yurii Chasovshchykov", false, 1);

console.log("Trip Truck2:");
truck2.trip();
console.log("----------------------------------");
