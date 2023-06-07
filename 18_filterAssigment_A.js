
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const greaterFifty = arrayNumbers.filter((element) => {
    return element>50;
})
console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`1)  Find the numbers are greater than 50.`);
console.log(greaterFifty);

const evenNumbers = arrayNumbers.filter((element) => {
    return element % 2==0;
})
console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`2)  Find out all the Even numbers.`);
console.log(evenNumbers);

const oddNumbers = arrayNumbers.filter((element) => {
    return element % 2 !==0;
})
console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`3)  Find out all the Odd numbers.`);
console.log(oddNumbers);

const mupltFive = arrayNumbers.filter((element) => {
    return element % 5 == 0;
})
console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`4)  Find Out The Numbers Which Are Mulitple by Five.`);
console.log(mupltFive);

const betTwentyFifty = arrayNumbers.filter((element) => {
    return element > 20 && element < 50;
})
console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`5)  Find Out The Numbers Which Are Between 20 and 50.`);
console.log(betTwentyFifty);
console.log(`-----------------------------------------------------------------------------------------------------------------------------`);