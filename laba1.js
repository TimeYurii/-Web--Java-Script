function triangle(value1, value1_type, value2, value2_type) {
    let typeChecker = typeCheck(value1, value1_type, value2, value2_type);
    if (typeChecker) {
        console.log(typeChecker);
        console.log("error");
        return false;
    }

    let [a, b, c, alpha, beta] = dataParse(value1, value1_type, value2, value2_type);

    let dataChecker = dataCheck(a, b, c, alpha, beta);
    if (dataChecker) {
        console.log(dataChecker);
        console.log("error");
        return false;
    }

    [a, b, c, alpha, beta] = calculate(a, b, c, alpha, beta);

    let sides = sideCheck(a, b, c);
    if (sides) {
        console.log(sides);
        console.log("error");
        return false;
    }

    console.log("leg a = " + a);
    console.log("leg b = " + b);
    console.log("hypotenuse c = " + c);
    console.log("angle alpha = " + alpha);
    console.log("angle beta = " + beta);
    console.log("Result: success");
    return true;
}

function sideCheck(a, b, c) {
    if ((a && b && c) && (a + b <= c || a + c <= b || b + c <= a || a >= c || b >= c)) {
        return "Back to your IDE and change values, because triangle inequality is violated";
    }
    return "";
}

function calculate(a, b, c, alpha, beta) {
    if (a && b) {
        c = Math.sqrt(a * a + b * b);
        alpha = (Math.asin(a / c) * 180) / Math.PI;
        beta = 90 - alpha;
    } else if (a && c) {
        b = Math.sqrt(c * c - a * a);
        alpha = (Math.asin(a / c) * 180) / Math.PI;
        beta = 90 - alpha;
    } else if (b && c) {
        a = Math.sqrt(c * c - b * b);
        beta = (Math.asin(b / c) * 180) / Math.PI;
        alpha = 90 - beta;
    } else if (a && alpha) {
        c = a / Math.sin(alpha * (Math.PI / 180));
        b = Math.sqrt(c * c - a * a);
        beta = 90 - alpha;
    } else if (c && alpha) {
        beta = 90 - alpha;
        a = c * Math.sin(alpha * (Math.PI / 180));
        b = c * Math.cos(alpha * (Math.PI / 180));
    } else if (a && beta) {
        b = a * Math.tan(beta * (Math.PI / 180));
        c = Math.sqrt(a * a + b * b);
        alpha = 90 - beta;
    } else if (b && alpha) {
        a = b / Math.tan(alpha * (Math.PI / 180));
        c = Math.sqrt(a * a + b * b);
        beta = 90 - alpha;
    } else if (b && beta) {
        a = b / Math.tan(beta * (Math.PI / 180));
        c = Math.sqrt(a * a + b * b);
        alpha = 90 - beta;
    }
    return [a || "Not applicable", b || "Not applicable", c || "Not applicable", alpha || "Not applicable", beta || "Not applicable"];
}

function dataParse(value1, value1_type, value2, value2_type) {
    let a, b, c, alpha, beta;

    if (value1_type === "leg") a = value1;
    if (value2_type === "leg") b = value2;
    if (value1_type === "hypotenuse") c = value1;
    if (value2_type === "hypotenuse") c = value2;
    if (value1_type === "angle") alpha = value1;
    if (value2_type === "angle") alpha = value2;
    if (value1_type === "opposite angle" && value2_type === "leg") {
        alpha = value1;
        a = value2;
    }
    if (value2_type === "opposite angle" && value1_type === "leg") {
        alpha = value2;
        a = value1;
    }
    if (value1_type === "adjacent angle" && value2_type === "leg") {
        beta = value1;
        a = value2;
    }
    if (value2_type === "adjacent angle" && value1_type === "leg") {
        beta = value2;
        a = value1;
    }
    return [a, b, c, alpha, beta];
}

function dataCheck(a, b, c, alpha, beta) {
    let message = "";
    if (a && (a <= 0.000001 || a > 1000000)) message += "Leg must be between 0.01 and 1000\n";
    if (b && (b <= 0.000001 || b > 1000000)) message += "Leg must be between 0.01 and 1000\n";
    if (c && (c <= 0.000001 || c > 1000000)) message += "Hypotenuse must be between 0.01 and 1000\n";
    if ((alpha && (alpha <= 0 || alpha >= 90)) || (beta && (beta <= 0 || beta >= 90))) {
        message += "Angles must be between 1 and 89\n";
    }
    if (a && c && a >= c) message += "Leg must be less than hypotenuse\n";
    if (b && c && b >= c) message += "Leg must be less than hypotenuse\n";
    return message;
}

function typeCheck(value1, value1_type, value2, value2_type) {
    let message = "";

    if (value1 === "" || typeof value1 !== 'number') message += "Value1 is invalid\n";
    if (value2 === "" || typeof value2 !== 'number') message += "Value2 is invalid\n";

    let validTypes = ["leg", "hypotenuse", "angle", "opposite angle", "adjacent angle"];
    if (!validTypes.includes(value1_type)) message += "Value1_type is invalid\n";
    if (!validTypes.includes(value2_type)) message += "Value2_type is invalid\n";

    return message;
}

triangle(7, 'leg', 8, 'hypotenuse');
triangle(60, "opposite angle", 5, "leg");
triangle(5, 'leg', 7, 'leg');
triangle(5, 'leg', 30, 'adjacent angle');
triangle(10, 'hypotenuse', 45, 'angle');
