



console.log(`Total number vowels for string is:-`);
function countVowels(str) {
    var vowels = 'aeiouAEIOU';
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    
    return count;
  }
  
  var sentence = "I am very good IT Developer";
  var vowelCount = countVowels(sentence);
  console.log("Total number of vowels:", vowelCount);

  console.log(`-----------------------------------------`);

  
 console.log(` Calculate the sum of cube of numbers from 1 to 5:-`);
 function sumOfCubes(n) {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      sum += i ** 3;
    }
  
    return sum;
  }
  
  const n = 5;
  const result = sumOfCubes(n);
  console.log("Sum of cubes:", result);
  console.log(`-----------------------------------------`);

  console.log(`Log only posistion chars on console and do not consider empty spaces:-`);
  function oddPositionedChars(givenString){
    var str="";
  
    for (let index = 0; index < givenString.length; index++) {
      var char = givenString.charAt(index);
      if (index%2!=0&&char!="") {
          str =str+char;
      }
      
    }
  
    console.log(`${str}`);
  }
  oddPositionedChars("Hard work always pays back");
  
  
  function oddPositionedChars(givenString){
    var str=  ' ';
  
    for (let index = 0; index < givenString.length; index++) {
      var char = givenString.charAt(index);
      if (index % 2 != 0 && char!=" ") {
          str =str+char;
      }
    }
    return str;
  }
  var str1 = "Hard work always pays back";
  var result1 = oddPositionedChars(str1);
  console.log(result1);
  
  oddPositionedChars("Soon I will be Angular IT Champ");
  function oddPositionedChars(givenString){
    var str=  ' ';
  
    for (let index = 0; index < givenString.length; index++) {
      var char = givenString.charAt(index);
      if (index % 2 != 0 && char!=" ") {
          str =str+char;
      }
    }
    return str;
  }
  var str1 = "Soon I will be Angular IT Champ";
  var result1 = oddPositionedChars(str1);
  console.log(result1);
  
  