/*Roman numeral converter project for freeCodeCamp certification.

Convert the given number into a roman numeral.*/

function convertToRoman(num) {
    let dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let rome = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; //Lines up Roman to Arabic
    let numeral = [];
    for(let i = 0; num > 0; i++){
      let div = Math.floor(num/dec[i]);//Finds the integer for the number of instances for a given Roman numeral
      num = num%dec[i];//Finds the place value of the next lowest numeral
      while(div--){
        numeral.push(rome[i]);
      }
    }
  
    return numeral.join("");//Turns array into a string
  }
  convertToRoman();