let totalCartValue = 49700;
let percentToGet = 30;
let minimumDownPayment = (percentToGet/100) * totalCartValue; //24000

let shoppingCredit = totalCartValue - minimumDownPayment;

//NUMBEROFMONTH or REPAYMENT PERIOD
let numberOfmonth = 3; //3 MONTHS 

// INTEREST RATE PER MONTH
let interest_percentRate = 4.00;
let monthly_InterestPayable = (interest_percentRate /100) * shoppingCredit;

//TOTAL INTEREST PAYABLE = monthlyInterestPayable * NUMBEROFMONTH

let totalInterestPayable = monthly_InterestPayable * numberOfmonth;

//TOTAL REPAYMENT FOR EACH MONTH

let total_repayment_monthly = (shoppingCredit + totalInterestPayable)/numberOfmonth;

console.log("DOWN PAYMENT" + " - " + minimumDownPayment,);
console.log("SHOPPING CREDIT" + " - " +shoppingCredit);
console.log("monthly Interest Payable" + " - " + monthly_InterestPayable);
console.log("total Interest Payable" + " - " + totalInterestPayable);
console.log("---------------------------")
console.log("Repayment for Each Month" + " - " + Math.ceil(total_repayment_monthly));