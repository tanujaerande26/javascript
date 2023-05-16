// console.log("-----------step1-------------");
// var square =function(one,two){
//     var square=one*two;
//     return`Square of number is: ${square}`;
    
// }
//  var square=square(5,5);
//  console.log(square);

//  var square =function(one,two){
//     var square=one*two;
//     return`Square is 6s: ${square}`;
//  }
//  console.log("-----------step2-------------");
//  console.log("Check Type of Function");

 
 

//  console.log(".............. step3................");

// var areaOfPlot=function (length,width){
//  var areaOfPlot=length*width;
//  return`area of Rectangle is: ${areaOfPlot}`;
// }
//    var areaOfPlot=areaOfPlot(499,917);
// console.log(areaOfPlot);

// console.log("............step4...................");


//    var swapValueDude= function (valueOne,valueTwo){
//     console.log("Before swap");
//     console.log(valueOne,valueTwo);
//     }
//     swapValueDude("Virat","Anushka");
    

    
//    var swapValueDude= function (valueOne,valueTwo){
//     console.log("After swap");
//     console.log(valueTwo,valueOne);
//     }
//     swapValueDude("Virat","Anushka");

//     var swapValueDude= function (valueOne,valueTwo){
//         console.log("Before swap");
//         console.log(valueOne,valueTwo);
//         }
//     swapValueDude("1000","2000");


//     var swapValueDude= function (valueOne,valueTwo){
//         console.log("After swap");
//         console.log(valueTwo,valueOne);
//         }
//     swapValueDude("1000","2000");
    
// console.log("...........step5..............");

// var string="JS  the  most popular language of internet";
// console.log(string);


// var stringLength=string.length;

// console.log(`Total characters:${stringLength}`);

// var charAtSixIndex=string.charAt(6);
// console.log(`character of index 6: ${charAtSixIndex}`);

// var charAtSixIndex=string.charAt(11);
// console.log(`character of index 11: ${charAtSixIndex}`);

// var charAtLastIndex=string.charAt(string.length-1);
// console.log(`Last character is: ${charAtLastIndex}`);

// var charAtSixIndex=string.charAt(0);
// console.log(`First character is: ${charAtSixIndex}`);

// var resultSplit=string.split("");
// console.log(`${resultSplit}`);
// console.log(`Total number of string:${resultSplit.length}`);


var value="Hey you are doing good, keep it up";
console.log(value);

var greet = "Hey you are doing good, keep it up";
var resultSplit = greet.split();
console.log(resultSplit);
//console.log("After slipt words are:",resultSplit, "Total number of words: ",resultSplit.length);
console.log(`After slipt words are ${resultSplit} Total number of words ${resultSplit.length} `);


var valueLength=value.length;
console.log("Total Character in string:",valueLength);

var searchResult=value.search("good");
console.log("search Result is:",searchResult);

var sliceResult=value.slice(0,22);
console.log("slice Result is:",sliceResult);

var result=value.endsWith("up");
console.log(`is ${value} ends with "up":${result}`);

var result=value.startsWith("Hey");
console.log(`is ${value} start with "Hey":, ${result}`);
