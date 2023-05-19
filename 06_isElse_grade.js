function voteEligibility(age){
    if (age < 0 ||  age == 0 ||  age > 120) {
        console.log(`You have Enter Invalid Data  : Age is => ${age}`); 
    } else {
        if (age == undefined || age == null) {
            console.log(`You have Enter Invalid Data  : Age is => ${age}`);           
        } else {
            if (age >=18 && age <= 90) {
                console.log(`Congratulation you are Eligible for voting : Age is => ${age}`);
            } else {
                console.log(`You are not eligible for voting  : Age is => ${age}`);
            }
        }       
    }
}
console.log("----------------------------------------------------------------------------------------------");
console.log("                          Check Voter Eligibility");        
console.log("----------------------------------------------------------------------------------------------");
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);
voteEligibility();
console.log("----------------------------------------------------------------------------------------------");

// function gradeCalculation(marks){
//     if (marks <= 0 || marks > 100 || isNaN(marks)) {
//             console.log(`Please provide the valid marks`);
//     } else {
//         if (marks == undefined || marks == null) {
//             console.log(`Please provide the valid marks`);
//         } else {
//             if (marks >= 90) {
//                 console.log(`Fantastic Marks ${marks}, Your Grade is A+`);
//             } else {
//                 if (marks >=75 ) {
//                     console.log(`Fantastic Marks ${marks}, Your Grade is A`);
//                 } else {
//                     if (marks >= 50 ) {
//                             console.log(`Excellent Marks ${marks}, Your Grade is B`);
//                     } else {
//                         if (marks >= 35 ) {
//                             console.log(`Marks is ${marks}, your grade is C, Need improvement.`);
//                         } else {
//                             console.log(`Your Marks ${marks} very less, hence you are Failed... `);
//                         }                        
//                     }
//                 }                
//             }
//         }
//     }
// }
// gradeCalculation(98);
// gradeCalculation(80);
// gradeCalculation(90);
// gradeCalculation(0);
// gradeCalculation(35);
// gradeCalculation(150);
// gradeCalculation(29);
// gradeCalculation(-7);
// gradeCalculation(49);
// gradeCalculation(null);
// gradeCalculation(64);
// gradeCalculation(NaN);
// gradeCalculation("91");
// gradeCalculation("Eighty");

