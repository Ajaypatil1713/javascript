console.log("--------------------------------------------------------------------------------------------------------------------------------")
console.log("1. Write a normal function `maleMarriageEligibility()` with 3 args and check the condition.");
console.log("--------------------------------------------------------------------------------------------------------------------------------")
var maleMarriageEligibility = function(gender, age, boyName){
    var result = gender=="Male" && age >=21 ? `      Hey ${boyName} you are eligible for Marriage` : `      Hey ${boyName} you are Not eligible for Marriage`;
    console.log(result);
}
maleMarriageEligibility("Male", 25, "Bill Gates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log("");
console.log("--------------------------------------------------------------------------------------------------------------------------------")
console.log("2. Write a normal function `femaleMarriageEligibility()` with 3 args and check the condition.");
console.log("--------------------------------------------------------------------------------------------------------------------------------")
var femaleMarriageEligibility = function(gender, age, girlName){
    var result = gender=="Female" && age >=18 ? `      Hey ${girlName} you are eligible for Marriage` : `      Hey ${girlName} you are Not eligible for Marriage`;
    console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");

console.log("");
console.log(" ");
console.log("--------------------------------------------------------------------------------------------------------------------------------")
console.log("                                             Thank You ");
console.log("--------------------------------------------------------------------------------------------------------------------------------")

