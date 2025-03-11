console.log("1.2.25");
const Triangular = (a = 3, b = 4, c = 5) => {
    return { a, b, c };
}

const defaultTriangle = Triangular();
console.log(defaultTriangle);


const Triangle = Triangular(7, 3, 10);
console.log(Triangle);

const { a, b, c } = Triangular(7, 8, 9);

console.log(`a: ${a}, b: ${b}, c: ${c}`);

console.log("1.2.27-1.2.28");

const PiMultiplier = (number) => {
    return () => {
        return Math.PI * number;
    };
}

const multiply2Pi = PiMultiplier(2);
const multiply2DividedBy3Pi = PiMultiplier(2/3); 
const dividePiBy2 = PiMultiplier(1/2); 

console.log("Multiplied by 2:", multiply2Pi()); 
console.log("Multiplied by 2/3:",multiply2DividedBy3Pi()); 
console.log("Multiplied by 1/2:",dividePiBy2()); 

const Painter = (color) => {
    return function(object) {
        const type = object.type ? object.type : "No 'type' property occurred!";
        console.log(`Color: ${color}, Type: ${type}`);
    };
}

const paintBlueColor = Painter('Blue');
const paintGreenColor = Painter('Green');

const obj1 = { type: 'Square' };
const obj2 = { shape: 'Rectangle' };

console.log("1.2.29");
paintBlueColor(obj1);
paintGreenColor(obj2);

const PaintBlue = Painter('Blue');
const PaintRed = Painter('Red');
const PaintYellow = Painter('Yellow');

const obj3 = { type: 'Rectangle' };
const obj4 = { type: 'Square' };
const obj5 = { shape: 'Triangle' };

console.log("1.2.30");
PaintBlue(obj3);
PaintRed(obj4);
PaintBlue(obj5);

const obj6 = {
    maxSpeed: 280,
    type: 'Sportcar',
    color: 'magenta'
};

const obj7 = {
    type: 'Truck',
    avgSpeed: 90,
    loadCapacity: 2400
};

const obj8 = {
    maxSpeed: 180,
    color: 'purple',
    isCar: true
};

const PaintBlueObj = Painter('Blue');
const PaintRedObj = Painter('Red');
const PaintYellowObj = Painter('Yellow');

console.log("1.2.31");
PaintBlue(obj6);
PaintRed(obj7); 
PaintBlue(obj8); 
console.log("----------------------------------");
