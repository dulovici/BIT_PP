console.log('Fumkcije');

// https://meet.google.com/soi-cbbo-rnw      GOOGLE MEET

// 1. Write a program that calculates the maximum of two given numbers. 
// A = 5 b = 6 output: 6

// function calcMax(a, b) {
//     if (a > b) return a;
//     return b;
// }
// console.log(calcMax(6, 6));





// 2. Write a program that checks if a given number is odd.
// A = 3 output: odd

// function isOdd(n) {
//     return !!(n % 2);
// }
// console.log(isOdd(3));



// 3. Write a program that checks if a given number is a three digit long number.

// function threeDigitNum(n) {
//     if (n >= 100) return true;
//     else return false;
// }
// console.log(threeDigitNum(100));



// 4. Write a program that calculates an arithmetic mean of four numbers.

// function findAvg(a, b, c, d) {
//     return (a + b + c + d) / 4;
// }
// console.log(findAvg(5, 10, 15, 20));



// 5. Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *
// *****

// function buildRow(n) {
//     var row = '';
//     for (var i = 0; i < n; i++) {
//         row += '*'
//     }
//     return row;
// }
// function buildCol(n) {
//     var col = '';
//     for (var i = 0; i < n; i++) {
//         if (i === 0 || i === n - 1) col += '*';
//         else col += ' ';
//     }
//     return col;
// }
// function bildSquare(n) {
//     var square = '';
//     for (var i = 0; i < n; i++) {
//         if (i === 0 || i === n - 1) square += buildRow(n) + '\n'
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
//     return (n + '').length
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
//     for (var i = 0; i < ar.length; i++) {
//         if (ar[i] % 2) cnt += ar[i]
//     }
//     return cnt
// }
// console.log(sumOfOdd(arr));



// 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

// var str = 'Ananas';
// function howMannyLet(str) {
//     var cnt = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === 'a' || str[i] === 'A') cnt++
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



//===================================================== SLIDE 2 ===================================================================

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
//     return a === ' ';
// }
// console.log(blankString(' '));



// 3. Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

// function repeatString(str, n) {
//     var strn = '';
//     if (n === undefined) strn += str;
//     else {
//         for (var i = 0; i <= n; i++) {
//             strn += str
//         }
//     }
//     return strn
// }
// console.log(repeatString('Ha', 0));



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

//for loop
// function firstIdxOfCh(str,c) {
//     for(var i = 0;i<str.length; i++) {
//         if(str[i] === c) return i;
//     }
//     return -1
// }
// console.log(firstIdxOfCh('aleksandar','s'));

//while
// function firstIndOfCh(str, c) {
//     var i = 0;
//     while (i < str.length) {
//         if (str[i] === c) return i;
//         else i++
//     }
//     return -1
// }
// console.log(firstIndOfCh('aleksandar', 's'));



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

// function stringToArr(str) {
//     var newStr = [];
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === ' ') newStr[newStr.length] = null;
//         else newStr[newStr.length] = str[i]
//     }
//     return newStr;
// }
// console.log(stringToArr('My random string'));



// 8. Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.   =============>REWIEW

// function isPrime(num) {
//     for (var i = 2; i < num; i++)
//         if (num % i === 0) return false;
//     return num > 1;
// }
// console.log(isPrime(7));




// 9.  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

// function wordSeparator(str, s) {
//     var word = '';
//     if (s === undefined) s = '-';
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === ' ') word += s;
//         else word += str[i]
//     }
//     return word;
// }
// console.log(wordSeparator('Jedan dva tri cetri', '_'));



// 10.  Write a function to get the first n characters and add “...” at the end of newly created string. 

// var text = 'Dojcinovic';
// function shrtStr(str, n) {
//     var output = '';
//     for (var i = 0; i < str.length; i++) {
//         output += str[i];
//         if (i === n) {
//             output += '...';
//             break
//         }
//     }
//     return output;
// }
// console.log(shrtStr(text, 3));




// 11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

// var test = ["1", "21", undefined, "42", "1e+3", Infinity, 'str'];

// function arrOfNumsGen(arr) {
//     var nums = [];
//     for (var i = 0; i < arr.length; i++) {
//         var c = arr[i] * 1;
//         if (c !== c || c === Infinity || c === -Infinity) continue;
//         nums[nums.length] = c
//     }
//     return nums;
// }
// console.log(arrOfNumsGen(test));



// 12. Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.   ===> PREPRAVI

// function yrsToGo(byear, sex) {
//     var age = 2022 - byear;
//     var limit = sex === 'm' ? 65 : sex === 'f' ? 60 : 'y';
//     if (age >= limit) return 'Congradulations you are retired';
//     else if (age <= limit) return 'You need to work more.';
//     else return 'Are you male or female?'
// }
// console.log(yrsToGo(1952, 'f'));



// 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th         

// function last2(n) {
//     var str = n + '';
//     var last2 = '';
//     for (var i = 0; i < str.length; i++) {
//         if (i === str.length - 2 || i === str.length - 1) last2 += str[i];
//     }
//     return last2;
// }

// function humanise(n) {
//     var str = n + '';
//     if (last2(n) === '1') return str + 'st';
//     else if (last2(n) === '2') return str + 'nd';
//     else if (last2(n) === '3') return str + 'rd';
//     else if (last2(n) === '11' || last2(n) === '12' || last2(n) === '13') return str + 'th';
//     else if (last2(n)[1] === '1') return str + 'st';
//     else if (last2(n)[1] === '2') return str + 'nd';
//     else if (last2(n)[1] === '3') return str + 'rd';
//     else return str + 'th';
// }
// //==========================================================SKRATI

// console.log(humanise(1));
// console.log(humanise(2));
// console.log(humanise(3));
// console.log(humanise(11));
// console.log(humanise(12));
// console.log(humanise(13));
// console.log(humanise(21));
// console.log(humanise(22));
// console.log(humanise(23));
// console.log(humanise(100500));



//===================================================== SLIDE 3 ===================================================================

// 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).   ====> ZAVRŠI
// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

// function pushStr(str, wor, p) {
//     var output = '';
//     if (p === undefined) output += wor + ' ';
//     for (var i = 0; i < str.length; i++) {
//         if (i === p) output += wor;
//         output += str[i];
//     }
//     return output;
// }
// console.log(pushStr('Devic Milenko', 'JS'));



// 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

// var test = [NaN, 0, 15, false, -22, '', undefined, 47, null];

// function joinElements(arr) {
//     var output = '';
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === undefined || arr[i] === null || arr[i] === Infinity || arr[i] !== arr[i]) continue;
//         output += arr[i] + ' ';
//     }
//     return output;
// }
// console.log(joinElements(test));



// 3. Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

// var test = [NaN, 0, 15, false, -22, '', undefined, 47, null];

// function filterFalsy(arr) {
//     var output = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i]) output[output.length] = arr[i];
//     }
//     return output;
// }
// console.log(filterFalsy(test));



// 4. Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number

// var test = 12345;
// function reverseNumber(n) {
//     var input = n + '';
//     var output = '';
//     for (var i = input.length - 1; i >= 0; i--) output += input[i];

//     return Number(output)
// }
// console.log(reverseNumber(test));




// 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

// var test = [7, 9, 0, -2];
// function returnLastEl(arr, n) {
//     if (n === undefined || n === 1) return arr[arr.length - 1];
//     var output = [];
//     for (var i = arr.length - n; i < arr.length; i++) {
//         output[output.length] = arr[i]
//     }
//     return output;
// };
// console.log(returnLastEl(test, 3));



// 6. Write a function to create a specified number of elements with pre-filled numeric value array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

// function arrGen(t, e) {
//     var output = [];
//     for (var i = 0; i < t; i++) {
//         if (e === undefined) output[output.length] = null
//         else output[output.length] = e;
//     }
//     return output;
// }
// console.log(arrGen(6, 0));



// 7. Write a function that says whether a number is perfect.
// 28 -> 28 is a perfect number.
// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. 
// Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// function isPerfect(n) {
//     if (n < 1) return false
//     var divisors = 0;
//     for (var i = 0; i <= n / 2; i++) {
//         if (n % i === 0) {
//             divisors += i;
//         }
//     }
//     return divisors === n;
// }
// console.log(isPerfect(2));



// 8. Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

// var test = 'The quick brown fox';
// var test2 = 'aa bb cc dd aa';

// function findWord(str,w) {
//     var arr = str.split(' ');
//     var cnt = 0;
//     for(var i = 0; i<arr.length; i++) {
//         if(arr[i] === w) cnt++
//     }
//     return cnt;
// }
// console.log(findWord(test2,'bb'));          =============> VARAO SAM, ES6 RESENJE.

//RESENJE 2  ======> Kako da odvaja cele reči?

// var test = 'The quick brown fox';
// var test2 = 'aa bb cc dd aa';

// function findWrd(sen, word) {
//     var arr = [];
//     var welem = '';
//     var cnt = 0;
//     var srcIndx = 0;

//     for (var i = 0; i < sen.length; i++) {
//         if (sen[i] === word[srcIndx]) {
//             srcIndx++
//             welem += sen[i]
//             if (srcIndx === word.length) {
//                 arr[arr.length] = welem;
//                 welem = '';
//                 srcIndx = 0;
//                 cnt++
//             }
//         }
//     }
//     console.log(arr);
//     return cnt;
// }
// console.log(findWrd(test, 'row'));




// 9. Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

// var test = 'zoki@gmail.com';
// function hideEmail(mail) {
//     var out1 = mail[0] + mail[1] + mail[2] + '...';
//     if (mail[3] === '@') out1 = mail[0] + mail[1] + '...';
//     var out2 = '';
//     for (var i = 0; i < mail.length; i++) {
//         if (mail[i] === '@') {
//             for (var j = 0; i < mail.length; i++) {
//                 out2 += mail[i]
//             }
//         }
//     }
//     return out1 + out2;
// }
// console.log(hideEmail(test));

//====================================== RESI SA FLEGOM.

// var test = 'zoki@gmail.com';
// function hideEmail(str) {
//     var output = '';
//     var flag = true;
//     for(var i = 0; i<str.length; i++) {
//         if(flag) output += str[i];
//         if(i === 2) {
//             flag = false;
//             output+= '...'
//         }
//         if(str[i] === '@') flag = true;

//     }
//     return output;
// }
// console.log(hideEmail('igordulovic@gmail.com'));





// 10. Write a program to find the most frequent item of an array.
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3].

// var test = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];





//===================================================== SLIDE 4 ===================================================================

// 1. Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// var test = [5, -4.2, 3, 7];
// function isThere(arr,n) {
//     for(var i = 0; i<arr.length; i++) {
//         if(arr[i] === n) return 'Yes';
//     }
//     return 'No'
// }
// console.log(isThere(test,3));



// 2.Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

// var test = [-3, 11, 5, 3.4, -8];

// function multiple(arr) {
//     for(var i =0; i<arr.length; i++) {
//         if(arr[i] > 0) arr[i] *=2
//     }
//     return arr;
// }
// console.log(multiple(test));



// 3. Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

// var test = [4, 2, 2, -1, 6];

// function minValue(arr) {
//     var min = arr[0];
//     var output;
//     for(var i = 0; i < arr.length; i++) {
//         if(min > arr[i]){
//             min = arr[i];
//             output = i;
//         }
//     }
//     console.log(min,output);
// }
// console.log(minValue(test));



// 4.Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2



// 5.Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

// 6.Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

// 7.Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

// 8.Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

// 9.Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

// 10.Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

//===================================================== SLIDE 5 ===================================================================


// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

// var test = [3, 500, 12, 149, 53, 414, 1, 19];
// function minMax(arr) {
//     var output = [];
//     var max = -Infinity;
//     var min = Infinity;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === max) output[output.length] = min;
//         else if (arr[i] === min) output[output.length] = max;
//         else output[output.length] = arr[i]
//     }
//     return output;
// }
// console.log(test);
// console.log(minMax(test));



// 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

// var test = [ 3, 500, -10, 149, 53, 414, 1, 19 ];
// function devider(arr) {
//     var output = [];
//     for(var i = 0; i<arr.length; i++) {
//         if(arr[i] / 2 + 5 === 0) output[output.length] = 20;
//         else output[output.length] = arr[i] / 2 + 5;
//     }
//     return output;
// }
// console.log(devider(test));



// 3. 

// 4. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2350000

// function evenOdd() {
//     var even = 0;
//     var odd = 0;
//     for(var i = 0; i <= 1000; i++) {
//         if(i % 2 === 0) even += i; 
//     }
//     for(var i = 0; i <= 500; i++) {
//         if(i % 2 !== 0) odd += i;
//     }
//     return (even-odd)*12.5
// }
// console.log(evenOdd());





// 5. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

// var test = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

// function stupidFunct(arr) {
//     var output = '';
//     for (var i = 0; i < test.length; i++) {
//         if (arr[i].length >= 2) {
//             output += arr[i][0] + arr[i][1]
//         }
//     }
//     return output;
// }
// console.log(stupidFunct(test));



// 6. Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

// var test = 'Belgrade Institute of Technology';

// function obrniStr(str) {
//     var output = '';
//     for (var i = str.length - 1; i >= 0; i--) output += str[i];
//     return output;
// }
// console.log(obrniStr(test));



// 7. Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

// function combinations(a, b) {
//     if (a < b) {
//         for (var i = a; i <= b; i++) {
//             for (var j = a; j <= b; j++) {
//                 if (i === j) continue
//                 else console.log(i, j);
//             }
//         }
//     }
//     if (a > b) {
//         for (var i = b; i <= a; i++) {
//             for (var j = b; j <= a; j++) {
//                 if (i === j) continue
//                 else console.log(i, j);
//             }
//         }
//     }

// }
// combinations(9, 4)



// 8. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

// function isPrime(n) {
//     if(n === 2) return true
//     for(let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//         return true;
//     }
// }
// console.log(isPrime(2));


// 9. Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

// var test1 = 'Geek';
// var test2 = 'a nut for a jar of tuna';

// function isPalidrome(str) {
//     var normal = ''
//     var revOrd = '';
//     for (var i = 0; i<str.length; i++){
//         if(str[i] === ' ') continue;
//         normal += str[i];
//     }
//     for(var i = str.length - 1; i >= 0; i--){
//         if(str[i] === ' ') continue;
//         revOrd += str[i]
//     }
//     return normal === revOrd;
// }
// console.log(isPalidrome(test1));



// 10. Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

// function commonDevider(a, b) {
//     var output = 0;
//     if (a > b) {
//         for (var i = 2; i < a; i++) {
//             if (a % i === 0 && b % i === 0) output = i
//         }
//     }
//     if (b > a) {
//         for (var i = 2; i < b; i++) {
//             if (a % i === 0 && b % i === 0) output = i
//         }
//     }
//     return output;

// }
// console.log(commonDevider(81, 9));
// console.log(commonDevider(192, 42));
// console.log(commonDevider(338, 598));
// console.log(commonDevider(338, 592));

//===================================================== SLIDE 6 ===================================================================

// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

// var test = 'Vatreni Poljubac'
// function countVowels(str) {
//     var cnt = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (
//             str[i] === 'a' ||
//             str[i] === 'A' ||
//             str[i] === 'e' ||
//             str[i] === 'E' ||
//             str[i] === 'i' ||
//             str[i] === 'I' ||
//             str[i] === 'o' ||
//             str[i] === 'O' ||
//             str[i] === 'u' ||
//             str[i] === 'U') {
//             cnt++
//         }
//     }
//     return cnt;
// }
// console.log(countVowels(test));

//===================================================== SLIDE 7 ===================================================================













//=====================================================CLASSWORK===================================================================


// var bestCoffe = {
//     name: 'Nikaragua',
//     strength: 'Medium',
//     flavour: 'Coffe',
//     milk: false,
//     sugger: false
// };

// var bestMovie = {
//     movie: 'Underground',
//     actors: ['Petar Popara', 'Marko Dren'],
//     director: 'Emir Kusturica',
//     genre: 'Remek Delo',
//     popularity: 100
// }


// function createProject() {
//     var project = {
//         description: 'Vezba',
//         language: 'JS',
//         repo: 'www.pera.com',
//         dev: true,
//         printRepo: function () {
//             console.log(project.repo);
//         },
//         isJS: function () {
//             if (project.language === 'JS') return true;
//             return false;
//         },
//         isDev: function () {
//             return project.dev;
//         }
//     }
//     return project;
// }
// var pera = createProject();

// pera.printRepo();
// console.log(pera.isJS());
// console.log(pera.isDev());


// function createRecepie() {
//     var recepie = {
//         name: 'Chicken Tikka Masala',
//         type: 'Indian',
//         complexity: 5,
//         ingridients: ['Chicken', 'Tomato', 'Rajs', 'Ghee'],
//         prepTimeMin: 45,
//         instruction: 'Cook it with love',
//         printIngridients: function () {
//             console.log(recepie.ingridients);
//         },
//         isFastFood: function () {
//             return recepie.prepTimeMin <= 15;
//         },
//         changeType: function (newType) {
//             recepie.type = newType;
//         },
//         deleteIngridient: function (ingridient) {
//             var newList = [];
//             for (var i = 0; i < recepie.ingridients.length; i++) {
//                 if (recepie.ingridients[i] !== ingridient) {
//                     newList[newList.length] = recepie.ingridients[i]
//                 }
//             }
//             recepie.ingridients = newList;
//         }
//     };
//     return recepie;
// }

// var recept = createRecepie()

// console.log(recept);

// recept.deleteIngridient('Rajs')
// recept.changeType('Italian')
// console.log(recept);
// console.log(recept.isFastFood());



// var btn1 = document.querySelector('.btn1');
// var btn2 = document.querySelector('.btn2');
// var btn3 = document.querySelector('.btn3');

// function createCounter(param) {
//     var counter = 0;
//     var obj = {
//         increse: function () {
//             counter += param
//             console.log(counter);
//         },
//         reset: function () {
//             counter = 0;
//             console.log(counter);
//         }
//     }

//     if (param === 0) return obj.reset
//     return obj.increse
// }
// btn1.addEventListener('click', createCounter(5));
// btn2.addEventListener('click', createCounter(1));
// btn3.addEventListener('click', createCounter(0));

// how to reset?




