var givenString="  Hey you are doing good, keep it up    ";
function stringHandsOn() {
    // var givenString="  Hey you are doing good, keep it up    ";
   console.log( givenString); 
   
}
stringHandsOn();
 var lengthOfBeforestring = givenString.length;
 console.log("Length of before trim =  "+lengthOfBeforestring);
var trim = givenString.trim();
var afterTrim = trim.length;
console.log(trim);
console.log("Length of after trim =  "+afterTrim);
var totalSpace = lengthOfBeforestring-afterTrim;
console.log( "Total Spaces = "+totalSpace);
var givenString = "         Hey you are doing good, keep it up  ";
givenString.trimEnd();
var firstChar = trim.charAt(0);
var lastChar = trim.charAt(33);
var firstAndLastChar = console.log("firstChar: "+firstChar+" , "+"lastChar: "+lastChar);
