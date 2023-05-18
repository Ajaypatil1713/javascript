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
