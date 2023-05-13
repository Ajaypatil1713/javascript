//----------------------------------------------------------------------------------------------
var sqaure=function (num){
    var result = num*num;
    console.log(`      Square of Given number is : ${result} `);
}
console.log(`1. Write a function Expression to get sqaure of the number Ex -> 5, 6 ,25 100`);
sqaure(5);
sqaure(6);
sqaure(25);
sqaure(100);

//----------------------------------------------------------------------------------------------
console.log("");
console.log(`2. Check and log type of function`);
console.log(`      Type of Square Variable is: --> ${typeof sqaure}`);

//----------------------------------------------------------------------------------------------
console.log("");
console.log(`3. Write a FE to get the area of rectangle plot [length = 499 and width = 917]`);
var rect = function(length, width){
    area = length*width;
    console.log(`      Area of Rectangle Plot -> ${area}`);
}
rect(499, 917);
//----------------------------------------------------------------------------------------------
console.log("");
console.log(`4. Write a FE with two args and should swap the passed values and log on console `);
console.log(`   before swap and after swap values inside function itself.`);
console.log("");

var swapValues = function(a, b){
    console.log(`      Before Swap Values are :-> ${a} ${b}`);
    [a,b]=[b,a]
    console.log(`      After Swap Values are:-> ${a} ${b}`);
}
swapValues("Anushka","Virat");
swapValues(1000, 2000)

console.log("");
console.log(`5. Write a FE which can perform the below steps for string "JS the most popular language of internet" `);
var show ="JS the most popular language of internet";
console.log(`      5.1 Total Character in the given string:--> ${show.length}`);
console.log(`      5.2 Character at index 6 :--> ${show.charAt(6)}`);
console.log(`      5.3 Character at index 11 :--> ${show.charAt(11)}`);
console.log(`      5.4 Last Character using length property :--> ${show.charAt(show.length-1)}`);
console.log(`      5.5 First Character form given string  :--> ${show.charAt(0)}`);
var abc = show.split(" ");
console.log(`      5.6 Total number of givem String : ${abc.length}`);
sqaure(7);