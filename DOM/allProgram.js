console.log("================ WAP to get even  indexed element========================");
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
for(const index in arrayNames){
    if(index %2==0){
        console.log(`${arrayNames[index]}`)
    }
}

console.log("");

console.log("==================Join ()==================================")
const arrayBoys=["Anil","Ram","Sunil"];
let arrayGils  =[",siya","Jenny"];

console.log("");

let combineArray = arrayBoys +arrayGils;
console.log(combineArray);
console.log("-------------------------Concat method------------------------------------------")
// let cobiineArray =arrayBoys.concat(arrayGils);
// console.log(cobiineArray)
let cobiineArray =[...arrayBoys,...arrayGils];
console.log(cobiineArray);

console.log("");

console.log("======================== Resize an Array=============================");
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
arrayNames.length=5;    // 1 means = [anil] 
console.log(arrayNames);   // 3 means =[anil,siya,ram]


console.log("");
console.log("====================  Given Array  ====================================================");
const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array`, arrayNumber);
console.log(" ");
console.log(`-----------------------1. Length Of Given Array  -----------------------------------------------`)

var arrayLength= arrayNumber.length;
console.log(`length => ${arrayLength}`);

console.log(` `);


let firstElement = arrayNumber[0];
console.log(`2] first element of given array ->${firstElement} `);
console.log("  ");

let lastElement = arrayNumber[arrayNumber.length - 1];
console.log(`2] last element of given array ->${lastElement}`);
console.log(" ");

let thirdLastElement = arrayNumber[arrayNumber.length -3];
console.log(`3] third last element of given array ${thirdLastElement}`);
console.log(" ");

console.log(`==========================================================================================`)
constarrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array`, arrayNumber);
console.log(" ");
console.log(`------------------------odd number in given arry--------------------`)

let oddNumber =[];
for(const odd of arrayNumber){
    if (odd % 2 != 0){
        oddNumber.push(odd)
    }
}
console.log(`${oddNumber}`);
console.log(" ");

console.log(`------------------------------sum of odd number---------------------------`);
var oddsum =0;
for(let oddposition in arrayNames){
    if(oddposition %2 !==0){
        oddsum+= arrayNumber[oddposition]
    }
}
console.log(`${oddsum}`)


console.log(`----------------------------Even Number is giben array------------------------`);
let evenNumber =[];
for (const even of arrayNumber){
    if(even %2 ===0){
        evenNumber.push(even)
    }
}
console.log(`${evenNumber}`)

console.log(`----------------------------sum of Even Number -------------------------------`)
var evenSum =0;
for(let index in arrayNames){
    if(index % 2===0){
        evenSum += arrayNumber[index];
    }
}
console.log(`${evenSum}`)

console.log(`-----------------------------sum of given all arrays---------------------------------`)
let sum1 =0;
for (let index = 0; index < arrayNumber.length; index++) {
    sum1 += arrayNumber[index];
    
}
console.log(`${sum1}`);

console.log(`------------------------------number which are multiple by five----------------------------`)
let multipleFive =[];
for (let index = 0; index < arrayNumber.length; index++) {
    if (arrayNumber[index]  % 5==0){
        multipleFive.push(arrayNumber[index]);
    }
    
}
console.log(`${multipleFive}`);
console.log(" ");
console.log(`-------------------------------check the number are including-------------------------------`)
let incluesNumber = arrayNumber.includes(115);
console.log(`${arrayNumber} ==>`, incluesNumber)
console.log(`-----------------------------------------------------------------------------------------------------------`)
let inclued =arrayNumber.includes(23);
console.log(`${arrayNumber}==>`,inclued);

console.log();
arrayNumber.splice(4,0,55,66);
console.log(`insert number 55 66 before index 3   ${arrayNumber}`);
console.log(` `);
 let deletethree =arrayNumber.splice(4,3);
 console.log(`delete 3 element starting frome index 4  ${arrayNumber}`)

console.log(`=========================================================================================================================`);

console.log(`------------------no argument no retun values messageon console-----------------`);
var message =()=>{
    console.log(`Goog morning,todays is monday`)
}
message();
console.log("");
console.log("---------------------with 3 argumet return values ,for receiveed 3 parameters perform th multification-------------");
 var multinumber =(num1,num2,num3)=>{
     let result = num1* num2*num3
     console.log(`${num1} x ${num2} x${num3} = ${result}`);
 }
 multinumber(11,22,22);
 multinumber(10,6,0)

 console.log(`--------------------argu 5return values ,for addition-------------------------------------------`)
 var additionNum =(num1,num2,num3,num4,num5)=>{
let result= num1+ num2+ num3+ num4+ num5
console.log(`${num1} + ${num2} + ${num3} +${num4} +${num5} == ${result}`)
 }
 additionNum(10,20,10,10,10,);
 additionNum(100,400,0,0,0,);

 console.log(`---------------------Addition of words:-------------------------------------------------`)
 let addchar = "I am" + " learning" + " ES6" + " Fracture" + " in depth";
console.log(`Addition of words: ${addchar}`);

console.log('');
console.log(`--------------------Arrow function with arguments and no return value------------------------`);
let show = (id, name) => {
    console.log(`ID: ${id} Name: ${name}`);
}
show(22, "Bill");

console.log(`==================================================================================`)

console.log(`-------cloning using = asignment opration------------`)
let age = 21;
let studentage = age;
studentage =23;
console.log(`age  ${age}`);
console.log(`ageStudent= ${studentage}`);

console.log(`------------Assignment operator to perform Shallow clone------- spread opration--`);
const student = { name: "John Doe", age: 20 };

const studentCopy = student; // Shallow clone

student.name = "Mohit Sharma";

console.table(student);
console.table(studentCopy.name);

console.log(`--------------------spread opration------------`);
const studentobj={
    name :"mohit",
    age:"22",
    city :"pune"
}
// spread opration
const cloneobject ={...studentobj};
cloneobject.city="Mumbai";
console.log(studentobj.city);
console.log(cloneobject.city);

console.log(`----------------------Deep clone-------------------`);
let person ={
    fullName : "Nikita Mane",
     age :      23,
     isMarried : false,
     adress :{
        stret : "wakad road",
        country :'India',
        pin : 465464
     }
}
// this is deep clone
const deecloneperson =JSON.parse(JSON.stringify(person));
person.adress.stret="Hinjewadi Road";

console.log(person.adress.stret);
console.log(deecloneperson.adress.stret);
console.log(`==============================================================================================`)

console.log(`-----------------boolean to number --------------------`)
var num1=true;
var result =Number(num1);
console.log(` result =${result}   ,type = ${typeof result}`)

console.log(`--------------- string to number------------------------`)
var num2 ="nik";
var result = +(num2);
console.log(` result =${result} , type =${typeof result}`)

console.log(`----------------Number to Boolean-------------------------`)
var num3 =4;
var result= Boolean(num3);
console.log(` result = ${result}`)

console.log(`=============================================================`)
console.log(`                  uppercase and lowercase`)
function countCharct(string){
    var lowerCount = 0;
    var upperCount = 0;
    for (var i=0 ; i<string.length; i++){
        if (string[i]===`a`){
            lowerCount++;
        } else if (string [i] ===`A`){
            upperCount++;
        }
    } return{
        lowerCaseA : lowerCount ,
        upperCaseA : upperCount
    }
}

console.log(``);
var  string1 ="I AM Learing JaVAScript , the language of internet";
console.log(`${string1}`);
var totalCount =countCharct(string1);
console.log(` lowercase ==>`,totalCount.lowerCaseA);
console.log(`upperCase ==>`, totalCount.upperCaseA);

var string2 ="My favourite movie is LAGgAN";
console.log(`${string2}`);
var totalCount= countCharct(string2);

console.log(`uppercase==>`, totalCount.upperCaseA);
console.log(`lowerCase ==>`,totalCount.lowerCaseA);

console.log(`===========================================================================`)
const arrayNumber1=[ 20,11,40,25,23,11,9,31,60,2,19]

// 1. Add 10 to each element and log the new array result on the console
var newArray1 =arrayNumber1.map((num1) => num1+10);
console.log(newArray1);

// 2. Square each array element and log it on the console
var newArray2 =arrayNumber1.map((num1) => num1 ** 2);
console.log(newArray2);

// 3. Add the index value to each corresponding array element and log the new array result on the console
const newArray3 =arrayNumber1.map((num1,index) => num1+index);
console.log(newArray3);

console.log(`----------------    Map  ---------------------------------- `);
let map = new Map();
console.log(typeof map);

// Key : Roll Number , Value : Student Name
map.set(11, "Ram");
map.set(22, "Shyam");
map.set(33, "Siya");
map.set(44, "Jenny");

const mapSize = map.size;
console.log(`Map size ${mapSize}`);

// Retrieve the value using key
const valueOfKey22 = map.get(22);
console.log(` Value of Key 22 is ${valueOfKey22}`);


// Retrieve the value using key but that key doesn't exists
const valueOfKey99 = map.get(99);
console.log(` Value of Key 99 is ${valueOfKey99}`);

// Adding duplicate key
map.set(33, "Billgates");

// Adding duplicate value
map.set(55, "Jenny")

// Delete entry
map.delete(22);

// Key is exists or not
const isAvailable = map.has(44);
console.log(`Iss 44 key Available: ${isAvailable}`);

const keys = map.keys();
console.log(keys);

const values = map.values();
console.log(values);

console.log("Traversing map");
const keysOfMap = map.keys();
for (const key of keysOfMap) { // 11
    const value = map.get(key);
    console.log(`${key} ${value}`);
}

console.log(map);
console.table(map);


console.log(` ---------Add 10 into each element------------------ :`);
const arrysNumber =[20,11,40,25,23,11,9,31,60,2,19];
const addTen =arrayNumber .map((element) => element + 10);
console.log(addTen);

console.log(`-------------Square of each element and log on console.-------------`);
const arraySquare =[20,11,40,25,23,11,9,31,60,2,19];
const SquareNum =arraySquare .map((element) => element*element);
console.log(SquareNum);

console.log(`add index values to its corresponding each arrys element`)
const arrayIndex =[20,11,40,25,23,11,9,31,60,2,19];
const addIndex =arrayIndex .map((element ,index) => element + index);
console.log(addIndex)

console.log(`------------1. way  Arrays Transforming ------------------`)
const array =[2,3,5,6,7,9,];
const arrayTransformed=[];
array.forEach((element) =>{
    arrayTransformed.push(element* element)
});
console.log(arrayTransformed)
console.log(`-----------------2. Array transforming ----> using map`)
const arrytrans = array.map((element) =>{
    return element*element;
});
console.log(arrytrans)

console.log(`--------------------factorial Number------------------`)
// 5! = 5 * 4 * 3 * 2 * 1
let factorial = 1; // 120
for (let index = 5; index >= 1; index--) { // index = 5  4  3  2  1  0
    factorial = factorial * index; // 120 * 1 
}
console.log(`Factorial ${factorial}`)

console.log(`-----------filtering assignment --------------------`)

const arryNumbers= [20,11,40,25,37,49,9,90,60,2,19];

console.log(`-------------- find the number are greter than 50.-----------------------`)
const greaterFifty = arryNumbers.filter((element) => {
    return element >50;
})
console.log(greaterFifty)

console.log(`--------------------- find all even number ---------------`);

const evenNumber1 =arryNumbers.filter((element) =>{
          return element % 2 ==0;
})
console.log(evenNumber1);

console.log(` ------------------------find all odd number--------------------------`)
const oddNumber1 =arryNumbers.filter((element) =>{
    return element % 2 !==0;
})
console.log(oddNumber1)

console.log(`--------------------- find  out the number which are multiple by 5`)
const multiNumber=arryNumbers.filter((element)=>{
    return element % 5 == 0;
})
console.log(multiNumber);

console.log(`find out the Number which are between 20 and 50`)
const bettwentyfifty=arryNumbers.filter((element) =>{
    return element>20 && element <50
})
console.log(bettwentyfifty)

console.log(`=============================sorting arrys ==============================-`)
 // Sorting in ascending order
const arryNames =["shayam","Anil","Shubhu","Jenny","Bittu","kittu"];
arryNames.sort();
console.log(arryNames)
// Reverse array that is in ascending order
arryNames.reverse();
console.log(arryNames)

const array1 = [23, 9, 204, 4,  0, 66, 106 ];
array1.sort( (n1, n2) => {
   return n1 > n2 ? 1 : -1 ;
} );
console.log(array1);
array1.reverse()
console.log(array1);

console.log(`====================== reduce method================================`)
const arrys =[23,56,78,9,5,4,0,66,21];
// 23 + 56 ==> 79 + 78 ==> 157 + 9 => 166
const sum =arrys.reduce((runningTotal,values)=>{
    return runningTotal + values
})
console.log(arrys);
console.log(sum);

console.log(`--------------------- addition ----------------------`)
function addition (num1,num2) {
    var result =num1 +num2;
    return result;
}
var returnValue= addition(100,200);
console.log(returnValue);

console.log(`----------- redues object assign--------------`)
const personn = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true
}
const adresss = {
    street: "Wakad Road",
    landmark: "Near Datta Mandir",
    city: "Mumbai",
    pin: 431220, 
    state: "MH",
    country: "India"
  } 

const marks = {
    english: 95,
    programming: 100,
    math: 89
}

Object.assign(personn,adresss); // mearge the person and add
const mergedObject =Object.assign({},adresss,marks); //merge adress marks
console.table(personn);
console.table(mergedObject)



