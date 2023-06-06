
let professor = {
    name: "Pro. Vijay",
    age: 47,
    subject: "CS",
    college: "D.N.Mahavidyalaya, Faizpur",
    salary: 60000,
    degrees: {
        engineering: "CSC",
        phd: "Adv Computing",
        msc: "Computer Animation",
        bsc: "Cybersecurity",
        m_tech: "Software Engineering"
    },
    certificates: {
        degreeArray :  
        [
            `Hacker Rank Participation`, 
            `Certificate in IFE Cource`, 
            `Certificate in Adv Programming`
        ]
    },
    allDegrees: function() {
        let details1 = `${this.degrees.engineering}, ${this.degrees.phd}, ${this.degrees.msc}, ${this.degrees.bsc}, ${this.degrees.m_tech}`;
        return details1;
    }
};
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`                                                                Object Assignment - Professor Portfolio`);
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);

let abc = professor.allDegrees();
console.log(`Total degrees are : `, abc);
console.log(`Total Degrees are:`, Object.keys(professor.degrees).length)

console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);
professor.totalExperience = "14 years";
console.log("Total Experience:", professor.totalExperience);
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);

console.log(`Before Update Salary : `, professor);
professor.salary = "75000";

console.log(`After Update Salary : `,professor);
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);

console.log(`Before add New Element :`,professor.certificates.degreeArray);
let addElement = professor.certificates.degreeArray.push("Oracle Certified");
console.log(`After add New Element :`,professor.certificates.degreeArray);
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);

let lastElement = professor.certificates.degreeArray[professor.certificates.degreeArray.length-1];
console.log(`Last Elemenr of an Array : `,lastElement);
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);



