// var str ="I am very good IT Developer";
// var upperVowels ="AEIOU";
// var lowerVowels ="aeiou";
// count =0;
// console.log(`----------------------------------------------------------------------`);
// console.log(`                       Vowels Assignment`);
// console.log(`----------------------------------------------------------------------`);

// for(let index=0; index <str.length ;index++)
// {
//     if(upperVowels.includes(str[index]))
//     {
//         var upperWord = str.charAt(index);
//         console.log(`Capital Vowels are : ${upperWord}`);
//         console.log(`----------------------------------------------------------------------`);
//         count++;
        
//     }
//     else if (lowerVowels.includes(str[index])) 
//     {
//         var lowerWord = str.charAt(index) ;
//         console.log(`Small Vowels are : ${lowerWord}`);
//         console.log(`----------------------------------------------------------------------`);
//         count++;
//     }
// }
// console.log(`Total Number of vowels in" ${str}" are : ${count}`);
// console.log(`----------------------------------------------------------------------*`);


// console.log(`----------------------------------------------------------------------`);
// console.log(`                       Cube Assignment`);
// console.log(`----------------------------------------------------------------------`);

// function sumOfCube(num)
// {
//     // sum=0;
//     for(let num=1; num<=6; num++)
//     {   
//         var cube=num*num*num;
//         console.log(`Cube of Given Number is: ${cube}`);
//         sum = cube+cube;
//     }
// }
// sumOfCube(6);
// console.log(`----------------------------------------------------------------------`);
// console.log(`Sum of cubes are :${sum}`);
// console.log(`----------------------------------------------------------------------*`);


console.log(`----------------------------------------------------------------------`);
console.log(`               Odd Positioned Character Assignment`);
console.log(`----------------------------------------------------------------------`);

function oddPositionedChars(str){
    let output = '';
    for(let i=0; i < str.length; i++)
    {
        if(str[i] !== ' ' && i  % 2 !== 0)      //
        {
            output +=str[i];
        }
    }
    console.log(`   Odd-positioned characters in above string :`,output);
}
var string1 = "Hard word always pays back";
var string2 = "Soon i will be Angular IT Champ";

console.log(`1. Given String is "${string1}"`);
console.log(`----------------------------------------------------------------------`);
oddPositionedChars(string1);
console.log(`----------------------------------------------------------------------`);

console.log(`2. Given String is "${string2}"`);
console.log(`----------------------------------------------------------------------`);
oddPositionedChars(string2);
console.log(`----------------------------------------------------------------------`);

