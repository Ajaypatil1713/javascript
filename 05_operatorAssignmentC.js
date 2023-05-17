console.log("-------------------------------------------------------------------------------------------------------------------------");
console.log(`                   TCS Interview Eligibility`);
console.log("-------------------------------------------------------------------------------------------------------------------------");


var tcsInterEligibility = function(gradScore, hscScore, sscScore, candidateName){
    var result = gradScore>=70 || hscScore>=80 || sscScore>90 ? `**Congratulations** ${candidateName} you are eligible for TCS interview` :  `${candidateName} Unfortunately you are not eligible for interview`;
    console.log(result);
}
tcsInterEligibility(80, 86, 90, "Riteek Chaudhary");
console.log("-------------------------------------------------------------------------------------------------------------------------");
tcsInterEligibility(70, 65, 55, "Sushma Motekar");
console.log("-------------------------------------------------------------------------------------------------------------------------");
tcsInterEligibility(60, 79, 88, "Rupesh Patil");
console.log("-------------------------------------------------------------------------------------------------------------------------");
