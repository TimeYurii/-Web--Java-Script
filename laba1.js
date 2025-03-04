function triangle(value1, type1, value2, type2) {
    console.log("Usage: triangle(value1, type1, value2, type2)");
    console.log("Types: leg, hypotenuse, adjacent angle, opposite angle, angle");

    if (value1 <= 0 || value2 <= 0) {
        console.log("Values must be positive");
        return "failed";
    }

    let a, b, c, alpha, beta;
    const toRadians = (deg) => deg * Math.PI / 180;
    const toDegrees = (rad) => rad * 180 / Math.PI;

    try {
        if ((type1 === "leg" && type2 === "leg") || (type1 === "leg" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "leg")) {
            if (type1 === "leg" && type2 === "leg") {
                a = value1;
                b = value2;
                c = Math.sqrt(a * a + b * b);
            } else if (type1 === "leg" && type2 === "hypotenuse") {
                a = value1;
                c = value2;
                if (a >= c) {
                    console.log("Leg cannot be greater than or equal to hypotenuse");
                    return "failed";
                }
                b = Math.sqrt(c * c - a * a);
            } else {
                b = value1;
                c = value2;
                if (b >= c) {
                    console.log("Leg cannot be greater than or equal to hypotenuse");
                    return "failed";
                }
                a = Math.sqrt(c * c - b * b);
            }
            alpha = toDegrees(Math.asin(a / c));
            beta = 90 - alpha;
        } else if (type1 === "leg" && type2 === "adjacent angle" || type1 === "adjacent angle" && type2 === "leg") {
            if (type1 === "leg") {
                a = value1;
                alpha = value2;
            } else {
                a = value2;
                alpha = value1;
            }
            alpha = toRadians(alpha);
            c = a / Math.cos(alpha);
            b = Math.sqrt(c * c - a * a);
            beta = 90 - toDegrees(alpha);
        } else {
            console.log("Invalid input types");
            return "failed";
        }

        console.log(`a = ${a.toFixed(2)}`);
        console.log(`b = ${b.toFixed(2)}`);
        console.log(`c = ${c.toFixed(2)}`);
        console.log(`alpha = ${alpha.toFixed(2)}°`);
        console.log(`beta = ${beta.toFixed(2)}°`);
        return "success";

    } catch (e) {
        console.log("Error in calculations");
        return "failed";
    }
} 

triangle(7, 'leg', 8, 'hypotenuse');
triangle(60, "opposite angle", 5, "leg");
triangle(5, 'leg', 7, 'leg');
triangle(5, 'leg', 30, 'adjacent angle');
triangle(10, 'hypotenuse', 45, 'angle');
