var operator = prompt("Choose an operator + - / *");
var fNum = Number(prompt("First Num"));
var sNum = Number(prompt("Second Num"));
var result;

if(operator === "+") {
   result = add(fNum, sNum);
}
if(operator === "-") {
    result = sub(fNum, sNum);
 }
 if(operator === "*") {
    result = mul(fNum, sNum);
 }
 if(operator === "/") {
    result = div(fNum, sNum);
 }

function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function mul(a,b) {
    return a*b;
}

function div(a,b) {
    return a/b;
}

alert(result);