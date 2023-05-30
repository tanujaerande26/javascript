console.log(`----------------------------Step1:Create the object for bankSbi------------------------`);
console.log(`Create object for SBI Bank`);
let BankSbi={
    BankName:"SBI Bank",
    Location:"Sangola",
    AccountNo:123456789012,
    IFSC:'SBI00001234',
    InterestRate:5.4,
    
    
}
console.table(BankSbi);
console.log(`----------------------------Step2:Create the object for bankLocation------------------------`);
const bankLocation ={
    Street:" Eakhatpur Road",
    City:"Sangola",
    Pin:'413307',
}
console.table(bankLocation);
console.log(`----------------------------Step3:Clone the step1(banksbi) and step2(bankLocation)------------------------`);
Object.assign(BankSbi,bankLocation);
console.log(BankSbi);
console.log(bankLocation);
console.log(`----------------------------Step4:Create the object using literals------------------------`);
const rateOfInterest={
    homeLoanInterest:4.5,
    personalLoanInterest:6.5,
    duelInterest:9.3,

}
console.table(rateOfInterest);
console.log(`----------------------------Step5:Merge step1,step2 and step4 object into new object------------------------`);
let sbiDetails={

}
console.log(sbiDetails);
// Object.sbiDetails(BankSbi,bankLocation,rateOfInterest);
const mergedObject = Object.assign({ }, BankSbi,bankLocation,rateOfInterest);
console.table(mergedObject);
console.log(`----------------------------Step6:Traverse this merged object------------------------`);
for (const key in mergedObject) { // key = "height"
    if (Object.hasOwnProperty.call(mergedObject, key)) {
        const value = mergedObject[key];
        console.log(`${key}, ${value}`);
    }
}