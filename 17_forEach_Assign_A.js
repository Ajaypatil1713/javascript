const arrayNumbers =[1,-7,40,502,-77,91,0,108,89,-601];

console.log(`-------------------------------------------------------------------------------------------------------------`);
console.log(`1) Log the array element with it's index using forEach() with arroe function.`);
arrayNumbers.forEach((element, index) => {
    console.log(`Element of "${element}", having index " ${index}"`);
});

console.log(`-------------------------------------------------------------------------------------------------------------`);
console.log(`2) Find the positive numbers on console`);
arrayNumbers.forEach(element => {
    if(element > 0)
    console.log(`Positive numbers are : ${element}`);
})

console.log(`-------------------------------------------------------------------------------------------------------------`);
console.log(`3) Find the negative numbers, add into new array and log new array on console using arrow function.`);
let negativeArray=[];
arrayNumbers.forEach((element) => {
    if(element < 0)
    {
        negativeArray.push(element)
    }
})
console.log(`Negative Number are : ${negativeArray}`);

console.log(`-------------------------------------------------------------------------------------------------------------`);
console.log(`4) Find the even numbers and log on console using forEach() with arrow function.`);
arrayNumbers.forEach((element) => {
    if(element%2 == 0)
    {
        console.log(`The Even Numbers are : ${element}`);
    }
})

console.log(`-------------------------------------------------------------------------------------------------------------`);
console.log(`5) Find the sum of all elements form arrayNumbers and log on console. `);
let addition = 0;
arrayNumbers.forEach((element, index) =>{
     addition= addition + element ;
})
console.log(`Sum of all elements : ${addition}`);

console.log(`-------------------------------------------------------------------------------------------------------------`);
console.log(`6) Log the only even index values on console using forEach() with arrow function preffered. `);
arrayNumbers.forEach((element, index) => {
    if(index % 2==0)
    {
        console.log(`Index: => ${index}, Element: => ${element}`);
    }
})
