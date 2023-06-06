class Employee{
    constructor (emp_id, emp_name,emp_dept, emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept =emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let array_employees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------- `);
console.log(``);
for (const employee of array_employees) 
{
    if(employee.emp_company=="TCS") 
    {
        console.log(`Employees Working in TCS => Employee name : ${employee.emp_name} and Employee Company : ${employee.emp_company}`);
    }
}

console.log(``);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------- `);
console.log(``);
for (const employee of array_employees) 
{
    if(employee.emp_dept=="Finance") 
    {
        console.log(`Finance Department Employees => Employee Dept Name : ${employee.emp_dept} and Employee Name : ${employee.emp_name}`);
    }
}
console.log(``);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------- `);
console.log(``);

for (const employee of array_employees) 
{
    
    if(employee.emp_name.startsWith("R")) 
    {
        console.log(`Complete Details of Whoes Name Start with "R" : ${JSON.stringify(employee)}`);
    }  
}

console.log(``);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(``);

for (const employee of array_employees) 
{
    if(employee.emp_salary > 75000)    
    {
        console.log(`Whoes salary Greater Than 75000 => Emp Name : ${employee.emp_name} Employee Company : ${employee.emp_company} Employee Salary : ${employee.emp_salary}`);
    }
}

console.log(``);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(``);

for (const employee of array_employees) 
{
    if(employee.emp_salary >= 50000 && employee.emp_dept == "IT")    
    {
        console.log(`Whoes salary >= 50000 and from IT dept : ${JSON.stringify(employee)}`);
    }
}

console.log(``);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(``);

for (const employee of array_employees) 
{
    if(employee.emp_company=="Infy")
    {   
        console.log(`Employee Details with company "Infy" : ${JSON.stringify(employee)}`);
    }    
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------- `);