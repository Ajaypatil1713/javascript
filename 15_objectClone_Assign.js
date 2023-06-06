

const arrayNums = [20,3,4,56,90,400,49];
console.log(`=====================================Step 1============================================`);
const shallowNum = arrayNums;
console.log(`Given Array : ${arrayNums}`);
console.log(`Clone Array : ${shallowNum}`);
shallowNum.push(55,66);
console.log(`Clone array with updated values 55 and 66 : ${shallowNum}`);

console.log(`=====================================Step 2============================================`);
console.log(`Original Array : ${arrayNums}`);
const deepClone = [...arrayNums];
arrayNums.push(10,25);
console.log(`Clone Array : ${deepClone}`);
console.log(`Original Array with Updated values 10 and 25 : ${arrayNums}`);

console.log(`=====================================Step 3============================================`);
console.log(`Merge Array with Spread Operator : `);
const arrayEven = [2,30,14,8];
const mergeArray = arrayEven.concat(...arrayNums);
console.log(`Concat Array is : ${mergeArray}`);

console.log(`=====================================Step 4============================================`);
console.log(`Create object employee info : `);
const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month :"40,000INR",
        aug_month : "50,000INR",
        jun_month : "65,000INR"
    },
    address :{
        locality :{
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles : ["+91 8600 3456 88", " 1800- 4567 32", " +91- 9096 5678 77"]
}
console.log(`=====================================Step 5============================================`);
let var1 = `${employee_info.address.locality.colony},${employee_info.address.locality.street},${employee_info.address.city},${employee_info.address.state},${employee_info.address.country}`
console.log(`1) Employee Details : ${var1}`);
console.log(`2) Employee Mobile numbers are : ${employee_info.mobiles}`);

console.log(`=====================================Step 6============================================`);
const deepCloneObj = JSON.parse(JSON.stringify(employee_info));
console.log(`1) Original salary : ${deepCloneObj.salary.july_month}`);
const updatedSalary = deepCloneObj.salary.july_month = "80,000INR";
console.log(`1) Updated salary : ${updatedSalary}`);
console.log(``);
console.log(`2) Original Country : ${deepCloneObj.address.country}`);
const updateCountry = deepCloneObj.address.country= "United Kingdom";
console.log(`2) Updated Country : ${updateCountry}`);
console.log(`=======================================================================================`);
