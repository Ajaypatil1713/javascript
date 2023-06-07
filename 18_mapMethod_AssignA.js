
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`1)   Add 10 into each element : `);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`   Original Array :`,arrayNumbers);

const addTen = arrayNumbers.map((element) => 
        
    element + 10);

console.log(`   Updated Array : `,addTen);
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`2) Square the each element and log on console.`);
const arraySquare = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`   Original Array :`,arraySquare);
const squaredNumbers = arraySquare.map((element) => 
        element * element);

console.log(`   Updated Array : `,squaredNumbers);

console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`3) Add index value to its corresponding each array element and log new array on console.`);
const arrayCorrect = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`   Original Array :`,arrayCorrect);

const newArray = arrayCorrect.map((element, index) =>
         element + index);

console.log(`   Updated Array : `, newArray);


