//prime number means the number is divisible by ownself and the reminder getting zero.
const arrayNum = [2, 19, 123, ,34, 56, 78, 100];
const arrayTransformed = [];
arrayNum.forEach((element) =>{
    let isPrime = true;
    for(let index =2 ; index < element ; index++)
    {
        if(element % index == 0)
        {
            isPrime=false;
            break
         }
    }
    if(isPrime)
    {
        arrayTransformed.push(element);
    }
})
console.log(`Original Array : ${arrayNum}`);
console.log(`Prime number array : => ${arrayTransformed}`);
// Original Array : 2,19,123,,34,56,78,100
// Prime number array : => 2,19