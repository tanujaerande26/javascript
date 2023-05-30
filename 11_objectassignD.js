console.log(`-----------------------Step1-----------------------`);
console.log(`Detalis of Professor`);
let professor ={
    professorName:"Raj Jadhav",
    CollegName:'vMS',
    Subject:"Java",
    Gender:"Male",
    Address:"Pune",
    State:"MH",
    
    
}
console.table(professor);
console.log(`-----------------------Step2-----------------------`);
let professor1 ={
    professorName:"Raj Jadhav",
    CollegName:'vMS',
    Subject:"Java",
    Gender:"Male",
    Address:"Pune",
    State:"MH",
    degree:{
        engineering:'CSC',
        PHD:'Adv Computing'
        
    }
}
console.table(professor1);
console.log(`-----------------------Step3-----------------------`);
let professor2 ={
    professorName:"Raj Jadhav",
    CollegName:'vMS',
    Subject:"Java",
    Gender:"Male",
    Address:"Pune",
    State:"MH",
    degree:{
        engineering:'CSC',
        PHD:'Adv Computing'
        
    },
    certificates:["Hacker Rank Parti"," IFE Course","Adv programming"],
}
console.table(professor2);
console.log(`-----------------------Step4-----------------------`);
console.log(`Teacher Total Degrees are:`);
console.log(professor2.degree);
console.log(`-----------------------Step5-----------------------`);
let professor3 ={
    professorName:"Raj Jadhav",
    CollegName:'vMS',
    Subject:"Java",
    Gender:"Male",
    Address:"Pune",
    State:"MH",
    degree:{
        engineering:'CSC',
        PHD:'Adv Computing'
        
    },
    certificates:["Hacker Rank Parti"," IFE Course","Adv programming"],
    totalExperience:"14 years",
}
console.table(professor3);
console.log(`-----------------------Step6-----------------------`);
let professor4 ={
    professorName:"Raj Jadhav",
    CollegName:'vMS',
    Subject:"Java",
    Gender:"Male",
    Address:"Pune",
    State:"MH",
    degree:{
        engineering:'CSC',
        PHD:'Adv Computing'
        
    },
    certificates:["Hacker Rank Parti"," IFE Course","Adv programming"],
    
}
professor4.Subject="Angular.js";
console.table(professor4);
console.log(`-----------------------Step7-----------------------`);
let professor5 ={
    professorName:"Raj Jadhav",
    CollegName:'vMS',
    Subject:"Java",
    Gender:"Male",
    Address:"Pune",
    State:"MH",
    degree:{
        engineering:'CSC',
        PHD:'Adv Computing'
        
    },
    certificates:["Hacker Rank Parti"," IFE Course","Adv programming","Oracle Certified"],
    
}
professor4.Subject="Angular.js";
console.table(professor5);
console.log(`-----------------------Step8-----------------------`);
console.log(`last element of array:Oracle Certifird`);

    
    

