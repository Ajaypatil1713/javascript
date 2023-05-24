const arrayFruits = ["Banana",  "Orange",  "Apple",  "Mango",  "Water Melon"];
console.log(`Given Array : ${arrayFruits}`);

let firstElement = arrayFruits[0];
let lastElement = arrayFruits[arrayFruits.length-1]
console.log(`1.a) First element in array : ${firstElement}`);
console.log(`1.b) Last element in array : ${lastElement}`);
console.log(`-------------------------------------------------------------------------------`);

arrayFruits.splice(0 ,0,"Papaya");
console.log(`2) Add Papaya before Element Banana :`);
console.log(`Updated Array : ${arrayFruits}`);
console.log(`-------------------------------------------------------------------------------`);

arrayFruits.splice(4 ,1);
console.log(`3) Remove "Mango" from Array :`);
console.log(`Updated Array : ${arrayFruits}`);
console.log(`-------------------------------------------------------------------------------`);

arrayFruits.push("Pineapple");
console.log(`4) Added "Pineapple" at the last position :`);
console.log(`Updated Array : ${arrayFruits}`);
console.log(`-------------------------------------------------------------------------------`);

arrayFruits.splice(4 ,0,"Dragon Fruit");
console.log(`5) Insert "Dragon Fruit" Before Water Melon :`);
console.log(`Updated Array : ${arrayFruits}`);
console.log(`-------------------------------------------------------------------------------`);

arrayFruits.splice(2,1, "Kiwi");
console.log(`6) Replace Orange with Kiwi :`);
console.log(`Updated Array : ${arrayFruits}`);
console.log(`-------------------------------------------------------------------------------`);

var arrayFruitsLog = arrayFruits.slice(1,4);
console.log(`7) Log Element Starting form index 1-4 :`);
console.log(`Updated Array : ${arrayFruitsLog}`);
console.log(`-------------------------------------------------------------------------------`);

var lastElement1 = arrayFruits.slice(-3);
console.log(`8) Only Select last 3 Elements :`);
console.log(`Updated Array : ${lastElement1}`);
console.log(`-------------------------------------------------------------------------------`);


//splice is used for add or remove element 
// splice.(1,1) remove element form index 1
//splice .(1,1,"mango")  remove index 1 element and add mango that position
//splice(1,0,"jerry","Benny")  add jerry and benny element before index one 

