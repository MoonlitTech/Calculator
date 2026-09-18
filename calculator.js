var x;
var y;
var operator;
var contin = true;

while (contin) {
    x = prompt("Enter number 1:");
    y = prompt("Enter number 2:");
    operator = prompt("Enter an arithmetic operator:");

    if (contin == true) {
        contin = confirm("Click OK to continue or Cancel to exit.");
    }
}

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

if (isNaN(x) || isNaN(y)) {
    result = "Error: x and y must be numbers.";
}
else if (operator == "+") {
    result = Number(x) + Number(y);
}
else if (operator == "-") {
    result = Number(x) - Number(y);
}
else if (operator == "*") {
    result = Number(x) * Number(y);
}
else if (operator == "/") {
    result = Number(x) / Number(y);
}
else if (operator == "%") {
    result = Number(x) % Number(y);
}
else {
    result = "Error: Invalid operator.";
}

document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
document.write("</table>");

document.write("<table>");
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");
