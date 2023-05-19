function interview(gradScore, hscScore, sscScore, candidateName)
{
    if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) 
    {
            console.log(`Congratulations!!!... ${candidateName} you are eligible for TCS interview`);
    } else 
    {
        console.log(`Unfortunately ${candidateName} you are not eligible for interview..`);
    }   
}
console.log(`-----------------------------------------------------------------`);
console.log(`                   Tcs Interview Eligibility `);
console.log(`-----------------------------------------------------------------`);
console.log(``);
interview(80 ,86, 90, "Nikita");
console.log(`-----------------------------------------------------------------`);
interview(70 ,65, 55, "Manoj");
console.log(`-----------------------------------------------------------------`);
interview(60 ,79, 88, "Suraj");
console.log(`-----------------------------------------------------------------`);