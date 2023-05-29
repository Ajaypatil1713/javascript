
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);
console.log(`                                                 Array Assignment`);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given Array `, arrayNumbers);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

let arrayLen = arrayNumbers.length
console.log(`1. Length of Given Array : ${arrayLen}`);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

let firstElement = arrayNumbers[0];
console.log(`2.a) First Element of Given Array : ${firstElement}`);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

let lastElement = arrayNumbers[arrayNumbers.length-1];
console.log(`2.b) Last Element of Given Array : ${lastElement}`);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

let thirdLastElement = arrayNumbers[arrayNumbers.length-3]

console.log(`3. Third Last Element of Given Array : ${thirdLastElement}`);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

const evenNumbers = [];

for (let index in arrayNumbers) 
{
  if (arrayNumbers[index] % 2 === 0) 
  {
    evenNumbers.push(arrayNumbers[index]);
  }
}

console.log("4. Even Numbers in Given Array : ", evenNumbers);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

const oddNumbers = [];

for (let index in arrayNumbers) 
{
  if (arrayNumbers[index] % 2 !== 0) 
  {
    oddNumbers.push(arrayNumbers[index]);
  }
}

console.log("5. Odd Numbers in Given Array :", oddNumbers)
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

var sum=0;
for (let index in arrayNumbers) 
{
    if(index % 2 === 0)
    {
        sum += arrayNumbers[index];
    }
}
console.log(`6. Sum of Even Number :`, sum);   
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

var sum=0;
for (let oddPosition in arrayNumbers) 
{
    if(oddPosition % 2 !== 0)
    {
        sum += arrayNumbers[oddPosition];
    }
}
console.log(`7. Sum of Odd Number :`, sum); 
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

let sum1=0;
for(let index = 0 ; index < arrayNumbers.length; index++)
{
    sum1 += arrayNumbers[index];
}
console.log(`8. Sum of All Elements in given Array : `, sum1);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

console.log(`9. Numbers Which are Multiple By Five `);
let multipleByFive = [];
for(let index = 0 ; index < arrayNumbers.length ; index++ )
{
    if( arrayNumbers[index] % 5 == 0)
    {
        multipleByFive.push(arrayNumbers[index]);
    }
}
console.log(multipleByFive);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

let includesNumber = arrayNumbers.includes(115);
console.log(`10. "115" is Available in [${arrayNumbers}] :`, includesNumber);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

let includesNumber23 = arrayNumbers.includes(23);
console.log(`11. "23" is Available in [${arrayNumbers}] :`, includesNumber23);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

arrayNumbers.splice(3, 0, 55,66);
console.log("12. Insert Number 55 66 before Index 3 ", arrayNumbers);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);

let deleteThreeNum = arrayNumbers.splice(4,3);
console.log("13. Delete 3 Element Starting from index 4 :",arrayNumbers);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);