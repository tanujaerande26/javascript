 var greaterNumber=function(num1,num2){
    var result = num1>num2 ?`${num1}`:`${num2}`;
    console.log(`Greatest Number is:${result}`);
 }
 greaterNumber(10,-10);
 var greaterNumber=function(num1,num2){
    var result = num1>num2 ?`${num1}`:`${num2}`;
    console.log(`Greatest Number is:${result}`);
 }
 greaterNumber(800,899);
 console.log(`-------------------------------------------`);

 var isEvenOrOddNum=function(num){
    var result=num%2==0 ? true:false;
    return result;
 }
 var result=isEvenOrOddNum(29);
 var res =(result==true) ;
 console.log(`Given Number 29 is:${result}`);

 console.log(``);
 isEvenOrOddNum(44);

 var isEvenOrOddNum=function(num){
    var result=num%2==0 ? true:false;
    return result;
 }
 var result=isEvenOrOddNum(44);
 var res =(result==true) ;
 console.log(`Given Number 44 is:${result}`);

 console.log(``);
 isEvenOrOddNum(0);

 var isEvenOrOddNum=function(num){
    var result=num%2==0 ? true:false;
    return result;
 }
 var result=isEvenOrOddNum(0);
 var res =(result==true) ;
 console.log(`Given Number 0 is:${result}`);

 console.log(``);
 isEvenOrOddNum(101);

 var isEvenOrOddNum=function(num){
    var result=num%2==0 ? true:false;
    return result;
 }
 var result=isEvenOrOddNum(101);
 var res =(result==true) ;
 console.log(`Given Number 101 is:${result}`);

 console.log(``);
 isEvenOrOddNum(101);
 console.log(`--------------------------------------------`);

 var wordLength =function(word){
    var len =word.length;
    var result=len %2==0 ? "Even" :"Odd";
    return result;
 }
 var returnValue = wordLength("JavaScript");
 console.log(`Given word JavaScript is: ${returnValue}`);

 var wordLength =function(word){
   var len =word.length;
   var result=len %2==0 ? "Even" :"Odd";
   return result;
}
var returnValue = wordLength("Developer");
console.log(`Given word Developer is: ${returnValue}`);

var wordLength =function(word){
   var len =word.length;
   var result=len %2==0 ? "Even" :"Odd";
   return result;
}
var returnValue = wordLength("Google");
console.log(`Given word Google is: ${returnValue}`);

console.log(`--------------------------------------------`);
var boyName="Billgates";
var age=27;
var gender="male";

var result =(gender=="male"&& age>=21) ?"Billgate you are eligibile for Marriage":"Billagete you are not eligibile for Marriage";
console.log(`${result}`);

var boyName="Stew Jobs";
var age=17;
var gender="male";

var result =(gender=="male"&& age>=21) ?"Stew Jobs you are eligibile for Marriage":"Stew Jobs you are not eligibile for Marriage";
console.log(`${result}`);

console.log(`----------------------------------------------`);


var boyName="Malinda Gates";
var age=27;
var gender="Female";

var result =(gender=="Female"&& age>=18) ?"Malinda Gates you are eligibile for Marriage":"Malinda Gates you are not eligibile for Marriage";
console.log(`${result}`);


var boyName="Jenifer";
var age=16;
var gender="Female";

var result =(gender=="Female"&& age>=18) ?"Jenifer you are eligibile for Marriage":"Jenifer you are not eligibile for Marriage";
console.log(`${result}`);
