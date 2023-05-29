//WAP to print numbers form 5 to 15 by increment 1
console.log(`------------------------------------------------------------------------------`);
console.log(`                           While Loops Assignment `);
console.log(`------------------------------------------------------------------------------`);
let i = 5 ;
let sum = "";
while (i<=15) 
{
    sum = sum +" "+ i;
    i++;
}
console.log(`1. Numbers form 5 to 15 : ${sum}`);
console.log(`-------------------------------------------------------------------------------`);

let j = 50;
let sum1 = "";
while (j>=40) 
{
    sum1 = sum1 + " " + j;
    j--;   
}
console.log(`2. Numbers form 50 to 40 : ${sum1}`);
console.log(`-------------------------------------------------------------------------------`);

let count = 0;
let k = 1;
let sum2 = [];
while (count < 15) 
{
    if (k % 2 !== 0) 
    {
      sum2 = sum2 + " " + k;
      count++;
    }
    k++;
  }
console.log(`3. The first 15 odd numbers are:`, sum2);
console.log(`-------------------------------------------------------------------------------`);

let l = 0;
let count1 = 0;
let sum3 = [];
while (count1 < 10) 
{
    if(l % 2 == 0)
    {
        sum3 = sum3 + " " + l;
        count1++;
    }
    l++;
}
console.log(`4. The first 10 Even numbers are:`, sum3);
console.log(`-------------------------------------------------------------------------------`);


let num1 = 5;
let count2 = 1;
let sum4 = "";
console.log(`5. Table of number ${num1}:`);
while (count2 <= 10) 
{
    var result2 = num1 * count2;
    console.log(`${num1} x ${count2} = ${result2}`);
    count2++;
}
console.log(`-------------------------------------------------------------------------------`);

let num2 = 10;
let count3 = 1;
console.log(`6. Table of number ${num2}:`);
while (count3 <= 10) 
{
    var result1 = count3 * num2;
    console.log(`${num2} x ${count3} = ${result1}`);
    count3++;    
}
console.log(`-------------------------------------------------------------------------------`);

let n = 10;
let add = 10;
console.log(`7. Table of ${n} in Reverse order `);
while (add >= 1) 
{
    let reverese = n * add;
    console.log(`${n} x ${add} = ${reverese}`);
    add--;
  }
console.log(`-------------------------------------------------------------------------------`);