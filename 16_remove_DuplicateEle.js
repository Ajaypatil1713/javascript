console.log(`=====================================Step 1============================================`);
const arrayNum = [11, 3, 4, 11, 4, 7, 3];
console.log(`Given Array :${arrayNum}`);
const uniqueArray = [];

for (const index in arrayNum) {
  const element = arrayNum[index];

  if (!uniqueArray.includes(element)) {
    uniqueArray.push(element);
  }
}

console.log(`After remove duplicate elements : ${uniqueArray}`);

// const arrayNum = [11, 3, 4, 11, 4, 7, 3];
// const uniqueArray = [...new Set(arrayNum)];

// console.log(uniqueArray);


console.log(`=====================================Step 2============================================`);
const str = "How are you mate";
let newChar = "";
const arrayWords = str.split(" ");
for(const element of arrayWords)
{
    for(let index = 0; index< element.length; index++)
    {
        let char = "";
        if(index==0 || index==element.length-1)
        {
            char = element[index].toUpperCase();
        }else {
            char = element[index];
        }
        newChar = newChar + char;
    }
    newChar = newChar + " ";
}
console.log(`Given String is  : ${str}`);
console.log(`Updated String is  : ${newChar}`);