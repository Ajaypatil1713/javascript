console.log(`-------------------------------------------------------------------------------------------------`);
console.log(`1) Using Arrow Function With no args and no return value =>`);
let show = () => {
    console.log(`   Good Morning, Today is Monday`);
}
show();

console.log(`-------------------------------------------------------------------------------------------------`);
console.log(`2) With 3 arguments and no return value, for received 3 parameters perform the multiplicatoin`);
// console.log(``);
let mult = (num1, num2, num3=1) => {
    let result = num1*num2*num3
    console.log(`   Multiplicatoin of number ${num1} x ${num2} x ${num3}: ${result}`);
}
mult(5,5,2);
mult(10,4);

console.log(`-------------------------------------------------------------------------------------------------`);
console.log(`3) With 5 args and return value such as, for received params it should do the addition `);
// console.log(``);
let addition = (num1, num2 , num3, num4, num5) => {
    let result = num1 + num2 + num3 + num4 +num5 ;
    return result;
}
let add = addition(100,100,200,349,756);
console.log(`   Addition of numbers is : ${add}`);
let addChar = addition("I am ", "learning ", "ES6 ","features ", "in depth.");
console.log(`   Addition of Words : ${addChar}`);
console.log(`-------------------------------------------------------------------------------------------------`);