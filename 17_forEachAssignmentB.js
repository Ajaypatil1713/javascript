class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
const len = array_employees.length

console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`1) Find out TCS Employee details and log only name and company on console.`);
array_employees.forEach((element, index) => {
    if(element.emp_company == "TCS")
    {
        console.log(`   Employee Name : ${element.emp_name}, Company Name : ${element.emp_company}`);
    }
})

console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`2) Find the employee with salary >= 50000 and log all the employee details.`);
array_employees.forEach((element) => {
    if(element.emp_salary >= 50000)
    {
        console.log(`   Employee Details :`,element);
    }
})

console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`3) Find the sum of all employee salary and log on console.`);

let sum=0;
array_employees.forEach((element) => {
    if (element.emp_salary) 
    {
        sum = sum + element.emp_salary;
    }
});
console.log(`   Sum of all Employee Salary : `,sum);
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`4) Find the average salary and log on console.`);

let sum1 = 0;
let sum2 = 0;
array_employees.forEach((element) => {
   if(element.emp_salary)
   {
        sum1 = sum1 + element.emp_salary;
        sum2  = sum1/len;
   }
})
console.log(`   Average Salary : `,sum2);

console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`5) Find the "IT" or "HR" Department employees whose salary >= 75000 and log complete employee details.`);

array_employees.forEach((element) => {
    if(element.emp_dept == "IT" || element.emp_dept=="HR")
    {
        if(element.emp_salary >= 75000)
        {
            console.log(`   Employee Details :`, element);
        }
    }
})
console.log(`-----------------------------------------------------------------------------------------------------------------------`);

