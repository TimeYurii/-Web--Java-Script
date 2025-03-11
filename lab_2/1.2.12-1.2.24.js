class Square {
    constructor(a) {
        this.a = a;
    }

    length() {
        console.log("sum of sides: ", 4 * this.a);
    }

    square() {
        console.log("area of the square: " + this.a * this.a);
    }

    info() {
        console.log("side lengths: " + this.a + ", " + this.a + ", " + this.a + ", " + this.a);
        console.log("sum of all sides: " + 4 * this.a);
        console.log("angles: 90°, 90°, 90°, 90°");
        console.log("area of the square: " + this.a * this.a);
    }

    static help() {
        console.log("square is a regular quadrilateral with four equal sides and four right angles");
    }
}

console.log("1.2.14");
Square.help();

console.log("1.2.15");

const square = new Square(10);


square.length();
square.square();
square.info();

console.log("1.2.16");
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    //1.2.22
    get a() {
        return this._a;
    }

    set a(value) {
        if (typeof value === 'number' && value > 0) {
            this._a = value;
        } else {
            console.error("Invalid value for side 'a'");
        }
    }

    get b() {
        return this._b;
    }

    set b(value) {
        if (typeof value === 'number' && value > 0) {
            this._b = value;
        } else {
            console.error("Invalid value for side 'b'");
        }
    }

  static help() {
      console.log("A rectangle is a four-sided figure with opposite sides equal and four right angles.");
  }

  length() {
      console.log("Sum of sides:", 2 * (this.a + this.b));
  }

  square() {
      console.log("Area of the rectangle:", this.a * this.b);
  }

  info() {
      console.log("Side lengths:", this.a + ", " + this.a + ", " + this.b + ", " + this.b);
      console.log("Sum of all sides:", 2 * (this.a + this.b));
      console.log("Angles: 90°, 90°, 90°, 90°");
      console.log("Area of the rectangle:", this.a * this.b);
  }
}

const rectangle = new Rectangle(15, 10); 
console.log(rectangle); 
console.log("1.2.17");
rectangle.length(); 
rectangle.square(); 
rectangle.info(); 

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("rhombus is a quadrilateral with all four sides of equal length.");
    }

    length() {
        console.log("Sum of all sides: " + 4 * this.a);
    }

    square() {
        console.log("Area of the rhombus: " + 0.5 * this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Side length: " + this.a);
        console.log("Sum of all sides: " + 4 * this.a);
        console.log("Angles: " + this.alpha + "°, " + this.beta + "°, " + this.alpha + "°, " + this.beta + "°");
        console.log("Area of the rhombus: " + 0.5 * this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }
}


console.log("1.2.19");
const rhombus = new Rhombus(10, 100, 80);
Rhombus.help(); 
rhombus.length();
rhombus.square(); 
rhombus.info(); 

class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta);
        this.b = b;
    }

    static help() {
        console.log("parallelogram is a quadrilateral with opposite sides parallel");
    }

    length() {
        console.log("Side lengths: " + this.a + ", " + this.b + ", " + this.a + ", " + this.b);
        console.log("Angles: " + this.alpha + "°, " + (180 - this.alpha) + "°, " + this.beta + "°, " + (180 - this.beta) + "°");
        console.log("Sum of all sides: " + (2 * this.a + 2 * this.b));
    }

    square() {
        console.log("Area of the parallelogram: " + (this.a * Math.sin(this.beta * (Math.PI / 180)) * this.b));
    }

    info() {
        console.log("Side lengths: " + this.a + ", " + this.b + ", " + this.a + ", " + this.b);
        console.log("Angles: " + this.alpha + "°, " + (180 - this.alpha) + "°, " + this.beta + "°, " + (180 - this.beta) + "°");
        console.log("Sum of all sides: " + (2 * this.a + 2 * this.b));
        console.log("Area of the parallelogram: " + (this.a * Math.sin(this.beta * (Math.PI / 180)) * this.b));
    }
}

console.log("1.2.21");
const parallelogram = new Parallelogram(10, 5, 110, 70); 
Parallelogram.help(); 
parallelogram.length(); 
parallelogram.square(); 
parallelogram.info(); 


console.log("1.2.23");
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

console.log("1.2.24");
const square1 = new Square(10);
console.log("Square:");
square.info();


const rectangle1 = new Rectangle(7, 8);
console.log("Rectangle:");
rectangle.info();

const rhombus1 = new Rhombus(7, 40, 140);
console.log("Rhombus:");
rhombus.info();

const parallelogram1 = new Parallelogram(15, 27, 40, 140);
console.log("Parallelogram:");
parallelogram.info();
console.log("----------------------------------");
