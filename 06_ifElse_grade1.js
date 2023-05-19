function gradeCalculation(marks)
{    
    if (marks==undefined || isNaN(marks) || marks<0 || marks>100){ // undefined, null
        console.log(`Please Provide the valid Marks: ${marks}`);
    } else {
    //    console.log(`Valid marks : ${marks}`); 
       if (marks>=90){
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
       } else{
        if (marks >= 75) {
            console.log(`Excellent Marks : ${marks}, Your Grade is A`);            
        } else {
            if (marks >= 50) {
                console.log(`Good Marks : ${marks}, Your Grade is B`);
            } else {
                if (marks >= 35 ) {
                    console.log(`Marks is ${marks}, your grade is C, Need improvement.`);
                } else {
                    if (marks >=0) {
                        console.log(`Your Marks ${marks} very less Hence your result is "Failed"`);
                    }
                }   
            } 
        }        
       }
    }
}
console.log(`**********************************************************`);
console.log(`                  Grade System Assignment`);
// console.log(`*******************************************************`);
console.log(`----------------------------------------------------------`);
console.log(`                  Handling Valid Details`);
console.log(`----------------------------------------------------------`);
gradeCalculation(98);
gradeCalculation("91");
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(64);
gradeCalculation(35);
gradeCalculation(49);
gradeCalculation(0);
gradeCalculation(29);
console.log(`----------------------------------------------------------`);
console.log(`                  Handling In-Valid Details`);
console.log(`----------------------------------------------------------`);
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);
gradeCalculation(150);
gradeCalculation(-7);
console.log(`----------------------------------------------------------`);