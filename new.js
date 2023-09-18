// const person = {
//     name: "John",
//     age: 25,
//     city: "New York",
//     certificates: ["Java", "JavaScript", "HTML"]
//   };
  
//   let secondEle = person.certificates[1]
//   console.log(secondEle);
  

// const person = {
//     name: "John",
//     age: 25,
//     city: "New York",
//     certificates: ["Java", "JavaScript", "HTML"]
//   };
  
//   const deepClone = JSON.parse(JSON.stringify(person));
  
//   console.log(deepClone);

const person = {
    name: "John",
    age: 25,
    city: "New York",
    certificates: ["Java", "JavaScript", "HTML"]
  };
  
  const jsonString = JSON.stringify(person);
  console.log(jsonString);