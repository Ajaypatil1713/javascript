
let sbiBank = {
    bankName : "State Bank Of India",
    location : "Jalgaon",
    accountNo : 33508872101,
    ifsc : "SBIO26248",
    interestRate : 8.50,
    show: function() {
        let details1 = `Bank Nmae : "${this.bankName}", Location : "${this.location}",  Acoount No : "${this.accountNo}", IFSC Code : "${this.ifsc}", Interest Rate :"${this.interestRate}"`;
        console.log(`Bank Details are : ${details1}`);
    }
};
let axisBank = {
    bankName : "Axis Bank",
    location : "Buldhana",
    accountNo : 61082556407788,
    ifsc : "AXIS507896",
    interestRate : 14,
    show: function() {
        let details1 = `Bank Nmae : "${this.bankName}", Location : "${this.location}",  Acoount No : "${this.accountNo}", IFSC Code : "${this.ifsc}", Interest Rate :"${this.interestRate}"`;
        console.log(`Bank Details are : ${details1}`);
    }
}
let hdfcBank = {
    bankName : "HDFC Bank",
    location : "Sambhaji Nagar",
    accountNo : 3359874651996,
    ifsc : "HDFC08976",
    interestRate : 9.50,
    show: function() {
        let details1 = `Bank Nmae : "${this.bankName}", Location : "${this.location}",  Acoount No : "${this.accountNo}", IFSC Code : "${this.ifsc}", Interest Rate :"${this.interestRate}"`;
        console.log(`Bank Details are : ${details1}`);
    }
}
let yesBank = {
    bankName : "Yes Bank",
    location : "Pune",
    accountNo : 63795421398,
    ifsc : "YES44523",
    interestRate : 9.30,
    show: function() {
        let details1 = `Bank Nmae : "${this.bankName}", Location : "${this.location}",  Acoount No : "${this.accountNo}", IFSC Code : "${this.ifsc}", Interest Rate :"${this.interestRate}"`;
        console.log(`Bank Details are : ${details1}`);
    }
}

sbiBank.show();
axisBank.show();
hdfcBank.show();
yesBank.show();
console.log(`Output in table format also :`);
console.table(sbiBank);
console.table(axisBank);
console.table(hdfcBank);
console.table(yesBank);

