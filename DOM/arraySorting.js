const array = [10, 5, 'a', 'b', 'h', 11];
console.log(`------------------------------------------------`);
console.log("Original Array  :",array);
console.log(`------------------------------------------------`);

// first way to seperate numbers and alphabets
// let eleNum = "";
// let eleList = "";

// for (const element of array) {
//  if(typeof element === "number") {
//      eleList = eleList +" "+ element;
//  } 
//  else if(typeof element === "string"){
//     eleNum = eleNum +" "+ element;
//  }
// }

// second way to seperate numbers and alphabets
const numbers = array.filter( (element) => 
    typeof element === 'number'
);
const alphabets = array.filter((element) => 
    typeof element === 'string'
);

//performing sorting on seperated number and alphabets
numbers.sort((a,b) => a-b);
alphabets.sort();

console.log("Sorted Numbers: ",numbers);
console.log(`------------------------------------------------`);
console.log("Sorted Alphabets",alphabets);
console.log(`------------------------------------------------`);



