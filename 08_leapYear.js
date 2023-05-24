function checkLeapYear(leapYear) {
    if ( leapYear == null || leapYear == undefined || isNaN(leapYear) ) {
        console.log(`"${leapYear}" is not a valid year.`);
    } else {
        if ((leapYear % 4 == 0 && leapYear % 100 != 0) || leapYear % 400 == 0 ) {
            console.log(`"${leapYear}" Year is Leap year `);
        } else {
            console.log(`"${leapYear}" Year is Not Leap year `);
        }
    }
}
console.log(`-------------------------------------------------------------------------`);
console.log(`              Check Given Input Is Leap Year or Not`);
console.log(`-------------------------------------------------------------------------`);
checkLeapYear(2020);  //leap year
console.log(`-------------------------------------------------------------------------`);
checkLeapYear(1999);  //not leap year
console.log(`-------------------------------------------------------------------------`);
checkLeapYear(2022);  //not leap year
console.log(`-------------------------------------------------------------------------`);
checkLeapYear(1750);  //not leap year
console.log(`-------------------------------------------------------------------------`);
checkLeapYear(1945);  // not leap year
console.log(`-------------------------------------------------------------------------`);
checkLeapYear(1600);  //leap year
console.log(`-------------------------------------------------------------------------`);
checkLeapYear("Twenty Twenty"); // leap year
console.log(`-------------------------------------------------------------------------`);
checkLeapYear(null);  //not leap year
console.log(`-------------------------------------------------------------------------`);
checkLeapYear(undefined);  //not leap year
console.log(`-------------------------------------------------------------------------`);
checkLeapYear(NaN);   //not leap year
console.log(`-------------------------------------------------------------------------`);

