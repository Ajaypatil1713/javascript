
console.log("--------------------------------------------------------------------------------------------------------------------------------")
console.log("1. Find the greatest number among two number.");
console.log("--------------------------------------------------------------------------------------------------------------------------------")
var greaterName = function(num1, num2){
    var result=num1>=num2 ? `${num1} is greater` : `${num2} is greater`
    console.log(`      Greatest Number is -> ${result}`);
}
greaterName(10, -10);
greaterName(800, 899);

console.log("--------------------------------------------------------------------------------------------------------------------------------")
console.log("2. Check wheather the given number is EVEN or ODD.");
console.log("--------------------------------------------------------------------------------------------------------------------------------")
var isEvenOrOdd = function(num1){
    var result = num1%2==0 ? `Even Number` : `is ODD Number`
    console.log(`      The Given Number ${num1} is -> ${result}`);
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);

console.log("--------------------------------------------------------------------------------------------------------------------------------")
console.log("3. Check wheather the given Word has EVEN or ODD length .");
console.log("--------------------------------------------------------------------------------------------------------------------------------")

var wordLength= function(word){
    var len = word.length;
    var result = len % 2 == 0 ? `Even` : `ODD`;
    return result;
}
var returnValue = wordLength("JavaScript");
console.log(`      Given Word JavaScript has ->  ${returnValue}`);
var returnValue = wordLength("Developer");
console.log(`      Given word Developer has -> ${returnValue}`);
var returnValue = wordLength("Google");
console.log(`      Given Word Google has -> ${returnValue}`);
console.log("--------------------------------------------------------------------------------------------------------------------------------")
console.log("---------------------------------------------------------------------------------------------------------------------------------")
