// function countChar(str)
// {
//   var lowerCount = 0;
//   var upperCount = 0;
//   for (var i = 0; i < str.length; i++)
//   {
//     if (str[i] === 'a')
//     {
//       lowerCount++;
//     } else if(str[i] === 'A')
//     {
//       upperCount++;
//     }
//   }
//   return {
//     lowercaseA: lowerCount,
//     uppercaseA: upperCount
//   };
// }
// console.log(`-------------------------------------------------------------------------`);
// console.log(`              Find total 'a' and 'A' in Given String`);
// console.log(`-------------------------------------------------------------------------`);
// var str1 = "I AM Learning JavaScript, The Language of internet";
// console.log(`Given String : ${str1}`);
// console.log(`-------------------------------------------------------------------------`);
// var totalCount = countChar(str1);

// console.log("Total count of 'a' characters is:", totalCount.lowercaseA);
// console.log("Total count of 'A' characters is:", totalCount.uppercaseA);
// console.log(`-------------------------------------------------------------------------`);
// var str2 = "My favourite movie is LAggAn";
// console.log(`Given String : ${str2}`);
// console.log(`-------------------------------------------------------------------------`);
// var totalCount = countChar(str2);

// console.log("Total count of 'a' characters is:", totalCount.lowercaseA);
// console.log("Total count of 'A' characters is:", totalCount.uppercaseA);
// console.log(`-------------------------------------------------------------------------`);

function findChar(str)
{
  let lowerCount = 0;
  let upperCount = 0;
  for (let index = 0; index < str.length; index++) 
  {
    let char = str[index];
    if (char == `a`) 
    {
      lowerCount = lowerCount + char;
    } else if (char == `A`) 
    {
      upperCount = upperCount + char;
    }
  }
  console.log(`a is repeated by`,lowerCount.length-1,`times`);
  console.log(`A is reapeted by`,upperCount.length-1,`times`);
}
findChar(`I AM Learning JavaScript, The Language of internet`);
//output :=> 
// a is repeated by 5 times
// A is reapeted by 1 times
