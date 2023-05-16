var isAssignmentDone = true;
var result= isAssignmentDone ? " You will get job " :  "You will not get Job";
console.log(result);

var amarSSC = 57;
var amarHSC = 89;
var result = amarSSC>=55 && amarHSC >=60 ? "Allowed for interview" : "Sorry, Not allowed";
console.log(`${result}`);

var rahulAge = 17;
var result = rahulAge>=18 ? "You are eligible for vote" : "Not try next time";
console.log(`${result}`);

var candidateName = "Jenny";
var age = 23
var gender = "male";

var result = (gender=="female" && age>=18) || (gender=="male" && age>=21)  ? "You are eligible" : "No you are not eligible";
console.log(`${result}`);

var num1 = 13;
var result = num1%2 == 0 ? " EVEN number" : "ODD Number";
console.log(`${result}`);


var greaterNumber =function (num1, num2){
    var result= num1>=num2 ? `${num1} is greater` : `${num2} is greater`;
    console.log(result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

var isEvenOrOdd = function(num1){
    var result = num1%2 == 0 ? " EVEN number" : "ODD Number";
    console.log(`${result}`);
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);