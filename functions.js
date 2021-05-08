console.log('Fumkcije');

// 1. Write a program that calculates the maximum of two given numbers. 
// A = 5 b = 6 output: 6

// function calcMax(a,b) {
//     if (a>b) return a;
//     else return b;
// }
// console.log(calcMax(5,6));



// 2. Write a program that checks if a given number is odd.
// A = 3 output: odd

// function isOdd(n) {
//     if(n%2 !== 0) return 'Number is ODD';
//     else return 'Number is EVEN';
// }
// console.log(isOdd(3));



// 3. Write a program that checks if a given number is a three digit long number.

// function threeDigitNum(n) {
//     if(n >= 100) return true;
//     else return false;
// }
// console.log(threeDigitNum(100));



// 4. Write a program that calculates an arithmetic mean of four numbers.

// function findAvg(a,b,c,d) {
//     return (a+b+c+d)/4;
// }
// console.log(findAvg(5,10,15,20));



// 5. Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *
// *****

// function buildRow(n) {
//     var row = '';
//     for(var i =0; i<n; i++) {
//         row += '*'
//     }
//     return row;
// }
// function buildCol(n) {
//     var col = '';
//     for(var i = 0; i<n; i++){
//         if(i === 0 || i === n-1) col += '*';
//         else col += ' ';
//     }
//     return col;
// }
// function bildSquare(n) {
//     var square = '';
//     for(var i = 0; i<n; i++) {
//         if(i === 0 || i === n-1) square += buildRow(n) + '\n'
//         else square += buildCol(n) + '\n'
//     }
//     return square;
// }
// console.log(bildSquare(15));



// 6. Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

// function build(a,b,c) {
//     var stars = buildRow(a) + '\n' + buildRow(b)+ '\n' + buildRow(c);
//     return stars
// }
// console.log(build(5,3,7));



// 7. Write a program that calculates a number of digits of a given number. 

// function numOfDig(n) {
//     var x = ''
//     return  (x + n).length
// }
// console.log(numOfDig(100));



// 8. Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

// function howManyApears(n) {
//     var a = [2, 4, 7, 8, 7, 7, 1];
//     var cnt = 0;
//     for(var i =0; i<a.length; i++){
//         if(a[i] === n) cnt++
//     }
//     return cnt;
// }
// console.log(howManyApears(7));



// 9. Write a program that calculates the sum of odd elements of a given array. 

// var arr = [2, 4, 7, 8, 7, 7, 1];
// function sumOfOdd(ar) {
//     var cnt = 0;
//     for(var i = 0; i<ar.length; i++) {
//         if(ar[i] % 2 !== 0) cnt+=ar[i]
//     }
//     return cnt
// }
// console.log(sumOfOdd(arr));



// 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

// var str = 'Ananas';
// function howMannyLet(str) {
//     var cnt = 0;
//     for(var i = 0; i<str.length; i++) {
//         if(str[i] === 'a'|| str[i] === 'A') cnt++
//     }
//     return cnt;
// }
// console.log(howMannyLet(str));



// 11. Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

// var str1 = 'abc';
// var n1 = 4;
// function concatStr(str,n) {
//     var newStr = '';
//     for(var i = 0; i<=n; i++) {
//        newStr+=str; 
//     }
//     return newStr;
// }
// console.log(concatStr(str1,n1));



//=====================================================SLIDE 2===================================================================

// 1. Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false

// function isAstring(a) {
//     if (typeof a === 'string') return true;
//     else return false;
// }
// console.log(isAstring(4));



// 2. Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

// function blankString(a) {
//     if (typeof a === 'string' && a.length > 0) return true;
//     else return false;
// }
// console.log(blankString(true));



// 3. Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

// function repeatString(str,n) {
//     var strn = '';
//     if(n === undefined) strn+=str;
//     else {
//         for(var i = 0; i<=n; i++) {
//             strn+=str
//         }
//     }
//     return strn
// }
// console.log(repeatString('Ha',8));



// 4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

// function howManyLet(str,l) {
//     var cnt = 0;
//     for(var i = 0; i<str.length; i++) {
//         if(str[i] === l) cnt++;
//     }
//     return cnt;
// }
// console.log(howManyLet('Ananas','a'));
// //Is case sensitive



// 5. Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.

// function firstIdxOfCh(str,c) {
//     for(var i = 0;i<str.length; i++) {
//         if(str[i] === c) return i;
//     }
//     return -1
// }
// console.log(firstIdxOfCh('abacdek','g'));



// 6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

// function lastIndexOfCh(str,c) {
//     for(var i = str.length; i>=0; i--) {
//         if(str[i] === c) return i;
//     }
//     return -1;
// }
// console.log(lastIndexOfCh('ananas','a'));



// 7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]


// 8. Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// 9.  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

// 10.  Write a function to get the first n characters and add “...” at the end of newly created string.

// 11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

// 12. Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

// 12. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th





//=====================================================CLASSWORK===================================================================


// function buildRow(n) {
//     var row = '';
//     for (var i = 0; i < n; i++) {
//         row += '* '
//     }
//     return row;
// };

// function bildSquare(n) {
//     var squ = '';
//     for (var i = 0; i < 4; i++) {
//         squ += buildRow(n) + '\n'
//     }
//     return squ;
// }

// console.log(bildSquare(5));
// console.log(bildSquare(10));

