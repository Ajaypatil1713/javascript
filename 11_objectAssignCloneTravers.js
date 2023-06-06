const sbiBank = {
    bankName : "State Bank Of India",
    accountNo : 08872101,
    ifsc : "SBIO26248",
    interestRate : 8.50,
};

const bankLocation = {
    street : "Wakad Road",
    city : "Pune",
    pin : 411057
};

const rateOfInterest = {
    homeLoanInterest : 14.8,
    personalLoanInterest : 8.50,
    dueInterest : 8.50
};

const sbiDetails = {

};
console.log(`====================================================================================================`);
console.log(`                                  Object Cloning and Traversing`);
console.log(`====================================================================================================`);
console.log("                                              Step 1 : ");
console.log(`=====================>> Clone "SBI Bank" and "Bank Location" in SBI Bank <<=========================`);
console.log(`Before Clone SBI Bank Properties are : `);
console.table(sbiBank);
console.log(`-----------------------------------------`);
Object.assign(sbiBank, bankLocation);
console.log(`After Clone SBI Bank Properties are : `);
console.table(sbiBank);

console.log(`====================================================================================================`);
console.log("                                              Step 2: ");
console.log(`=====================>> Merge Step 1, Step 2 and Step 4 into SBI Details <<=========================`);
console.log(`Before Merge in SBI Details`);
console.table(sbiDetails);
console.log(`---------------------------`);
Object.assign(sbiDetails, sbiBank, bankLocation ,rateOfInterest);
console.log(`After Merge in SBI Details`);
console.table(sbiDetails);


console.log(`====================================================================================================`);
console.log("                                              Step 3 : ");
console.log(`==============================>> Traversing Merge(SBI Details) Object <<============================`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key} : ${value}`);   
    }
}
console.log(`====================================================================================================`);