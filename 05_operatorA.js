function squareofWordLength( value){
    var result="javaScript";
    console.log(`Given string is ${result}`);
    var res=result.length;
    console.log(`The length of given string:${res}`);

    var squareresult=res*res;
    console.log(`Square of word length is:${squareresult}`);

    console.log("-----------------------------");

    var result="Google Chrome";
    console.log(`Given string is ${result}`);
    var res=result.length;
    console.log(`The length of given string:${res}`);

    var squareresult=res*res;
    console.log(`Square of word length is:${squareresult}`);

    console.log("--------------------------------");

    var result="Developer Smart";
    console.log(`Given string is ${result}`);
    var res=result.length;
    console.log(`The length of given string:${res}`);

    var squareresult=res*res;
    console.log(`Square of word length is:${squareresult}`);

    console.log("---------------------------------");

}squareofWordLength("javaScript");
squareofWordLength(" Google Chrome");
squareofWordLength("Developer Smart");




function string(value){
    var str="I am Angular Developer";
    console.log(`The given string is ${str}`);
    var str1=str.length;
    console.log(`The length of given string:${str1}`);
    var resultSplit=str.split(" ");
   // console.log(resultSplit);
    console.log(`Total number of words:${resultSplit.length}`);
    var value1=str1/resultSplit.length;
    console.log(`Division of string length and total word is:${value1} `);
    var value1=str1*resultSplit.length;
    console.log(`Multiplication of string length and total word is:${value1} `);



    
}string("I am Angulare Developer")