// 1. Write a program that calculates the maximum of two given numbers. 
// A = 5 b = 6 output: 6

// const a = [5,6,56,78,32,667]
// let max = a[0]
// var b = a.forEach((e) => {
//     if (e > max) max = e
    
// })
// console.log(max);


// 2. Write a program that checks if a given number is odd.
// A = 3 output: odd




// 3. Write a program that checks if a given number is a three digit long number.



// 4. Write a program that calculates an arithmetic mean of four numbers. =======================> KAKO CEO ZADATAK SA REDUCE

// const nums = [23,45,87,12,6];

// const avgOfNums = nums.reduce((a,e, arr) => (a+e)) /nums.length

// console.log(avgOfNums);


// 5. Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 




// 6. Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *




// 7. Write a program that calculates a number of digits of a given number.

// const num = 3456;
// function howManyDigits(n) {
//     const data = n.toString().split('')
//     let counter = 0;
//     data.forEach(e => counter++)
//     return counter;
// }

// console.log(howManyDigits(num));


// 8. Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

// const input = [2, 4, 7, 8, 7, 7, 1];

// function howManyApp(arr,n) {
//     return arr.filter(e => e === n).length;
// }

// console.log(howManyApp(input,7));


// 9. Write a program that calculates the sum of odd elements of a given array. 

// const test = [24,56,21,56,86,32,11,34,6,87,3];

// function sumOfOdds(arr) {
//     const oddNums = arr.filter(e => e % 2 === 0);
//     const output = oddNums.reduce((a,b) => a + b)
//     return output;
// }
// console.log(sumOfOdds(test));



// 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

// const test = 'Ananas';

// function howManyL(str,l) {
//     return str.toLowerCase().split('').filter(e => e === l.toLowerCase()).length
// }
// console.log(howManyL(test,'a'));



// 11. Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 





//===================================================== SLIDE 2 ===================================================================

// 1. Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false





// 2. Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false




// 3. Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"




// 4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2




// 5. Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.





// 6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.




// 7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]




// 8. Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.   =============>REWIEW




// 9.  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"




// 10.  Write a function to get the first n characters and add “...” at the end of newly created string. 






// 11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

// var test = ["1", "21", undefined, "42", "1e+3", Infinity, 'str'];




// 12. Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.   ===> PREPRAVI





// 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th         


