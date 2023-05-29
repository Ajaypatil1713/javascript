
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
        console.log(`Teacher Degrees are:`, details1);
        console.log(`Total Degrees are:`, Object.keys(this.degrees).length);
    }
};
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`                                                                Object Assignment - Professor Portfolio`);
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);

professor.allDegrees();
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);
// Add new property totalExperience with value "14 years"
professor.totalExperience = "14 years";
console.log("Total Experience:", professor.totalExperience);
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);

console.log(`Before Update Salary : `);
console.table(professor);
// update existing sallary property with value 75000

    professor.salary = "75000";

console.log(`After Update Salary : `);
console.table(professor);
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);

//Add one new certificate in array --> "Oracle Certified"
console.table(professor);
professor.certificates.degreeArray.push("Oracle Certified");
console.table(professor);

// log last element in array using length properties.
let lastElement = professor.certificates.degreeArray[professor.certificates.degreeArray.length-1];
console.log(`Last Elemenr of an Array : `,lastElement);
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);



