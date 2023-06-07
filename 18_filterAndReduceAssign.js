
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

const arrayEmps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`1)  Find All The Employees From Wipro Company.`);

const wiproEmps = arrayEmps.filter((element) => {
   if(element.emp_company=="Wipro"){
        return element.emp_name;
   }
})
const wiproEmpsName = wiproEmps.map(element => {
    return element.emp_name;
});
console.log(wiproEmpsName);

console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`2)  Find All The Employees From "IT" or "HR" Department.`);

const empsFromItHr= arrayEmps.filter((element) =>{
   if( element.emp_dept=="IT" || element.emp_dept=="HR"){
        return element.emp_name;
   }
})
const deptResult = empsFromItHr.map((element) => {
    return element.emp_name;
})
console.log(deptResult);

console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`3)  Find All The Employees Whose Emp Id's Are Greater Than 50.`);

const idGreater = arrayEmps.filter((element) =>{
    if(element.emp_id > 50 )
    {
        return element.emp_name;
    }
})
const idGreaterFifty = idGreater.map((element) => {
    return element.emp_name;
})
console.log(idGreaterFifty);

console.log(`-----------------------------------------------------------------------------------------------------------------------------`);

console.log(`4)  Find All The Employees Whose Name Start with letter 'A' or 'V' or'M'`);
const startLetter = arrayEmps.filter((element) => {    
    return element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M");
})
const firstLetterFind = startLetter.map((element) => {
        
    return element.emp_name;  
})
console.log(firstLetterFind);

console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`5)  Find The Average Salary Of Employee for All Departments`);

const avgSal = arrayEmps.filter((element) =>{
    return element.emp_salary;
})
const showSalary = avgSal.map((element) =>{
    return element.emp_salary;
})
console.log(`    Salary of All Employees : `,showSalary);

const avgLen = showSalary.length;
const sumSal = showSalary.reduce((element, value) =>{
    return element + value;
})
console.log(`    Sum of All Employee Salaries : `,sumSal);
console.log(`    Average Salary of All Employees  : `, sumSal/avgLen );

console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`6)  Find The Average Salary for "IT" Departments.`);
const itDeptSal = arrayEmps.filter((element) => {
    if(element.emp_dept=="IT")
    {
        return element.emp_salary;
    }
})
const traverseSal = itDeptSal.map((element) => {
    return element.emp_salary;
})
console.log(`    All Salaries form IT Department Employees: `,traverseSal);
const salLen = traverseSal.length;

const sumOfSal = traverseSal.reduce ( (element , value) => {
    return element + value;
})
console.log(`    Sum of IT Department Employees Salaries : `,sumOfSal);
console.log(`    Average Salary of IT Department Employees`, sumOfSal/salLen);
console.log(`-----------------------------------------------------------------------------------------------------------------------------`);