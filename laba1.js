console.log("Using: triangle(value1, type1, value2, type2)\n type: 'leg' , 'hypotenuse' , 'adjacent angle' , 'opposite angle' , 'angle' ");
function triangle(value1, type1, value2, type2) {
    
    if (value1 <= 0  value2 <= 0) {
        console.log("Error: Values ​​must be positive.");
        console.log("failed");
        return "failed";
    }

    const min = 0.000001;  
    const max = 1000000;  

    if (value1 < min  value2 < min) {
        console.log("Error: Values ​​too small for calculations.");
        console.log("failed");
        return "failed";
    }
    
    if (value1 > max  value2 > max) {
        console.log("Error: Values ​​too large for a real triangle.");
        console.log("failed");
        return "failed";
    }
    
    let a, b, c, alpha, beta;
    const toRadians = (deg) => deg * Math.PI / 180;
    const toDegrees = (rad) => rad * 180 / Math.PI;
    
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1)  !validTypes.includes(type2)) {
        console.log("Error: Invalid parameter types entered.");
        console.log("failed");
        return "failed";
    }
    
    switch (true) {
        case type1 === "leg" && type2 === "leg":
            a = value1;
            b = value2;
            c = Math.sqrt(a  2 + b  2);
            alpha = toDegrees(Math.asin(a / c));
            beta = 90 - alpha;
            break;
        case type1 === "leg" && type2 === "hypotenuse":
        case type1 === "hypotenuse" && type2 === "leg":
            [a, c] = type1 === "leg" ? [value1, value2] : [value2, value1];
            if (a >= c) {
                console.log("Error: The leg cannot be greater than or equal to the hypotenuse.");
                console.log("failed");
                return "failed";
            }
            b = Math.sqrt(c  2 - a  2);
            alpha = toDegrees(Math.asin(a / c));
            beta = 90 - alpha;
            break;
        case type1 === "leg" && type2.includes("angle"):
        case type2 === "leg" && type1.includes("angle"):
            [a, alpha] = type1 === "leg" ? [value1, value2] : [value2, value1];
            if (alpha <= 0  alpha >= 90) {
                console.log("Error: The angle must be acute (from 0° to 90°).");
                console.log("failed");
                return "failed";
            }
            beta = 90 - alpha;
            c = a / (type1.includes("opposite")  type2.includes("opposite") ? Math.sin(toRadians(alpha)) : Math.cos(toRadians(alpha)));
            b = Math.sqrt(c  2 - a  2);
            break;
        case type1 === "hypotenuse" && type2 === "angle":
        case type2 === "hypotenuse" && type1 === "angle":
            [c, alpha] = type1 === "hypotenuse" ? [value1, value2] : [value2, value1];
            if (alpha <= 0 || alpha >= 90) {
                console.log("Error: The angle must be acute (from 0° to 90°).");
                console.log("failed");
                return "failed";
            }
            beta = 90 - alpha;
            a = c * Math.sin(toRadians(alpha));
            b = c * Math.cos(toRadians(alpha));
            break;
        default:
            console.log("Error: Invalid parameter types entered.");
            console.log("failed");
            return "failed";
    }
    
    
    console.log(a = ${a.toFixed(7)}, b = ${b.toFixed(7)}, c = ${c.toFixed(7)}, alpha = ${alpha.toFixed(7)}°, beta = ${beta.toFixed(7)}°);
    console.log("succes");
    return "success";
}

triangle(7, 'leg', 8, 'hypotenuse');
triangle(60, "opposite angle", 5, "leg");
triangle(5, 'leg', 7, 'leg');
triangle(5, 'leg', 30, 'adjacent angle');
triangle(10, 'hypotenuse', 45, 'angle');
triangle(0.00000001, "leg", 100000000, "hypotenuse");
