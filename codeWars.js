
                                                             //CODE WARS//




//1. Find the odd int
// Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

// const t1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
// const t2 = [1,1,1,1,1,1,10,1,1,1,1];

// function findOdd(a) {
//     const count = {}
    
//     a.forEach(int => {
//         if(count[int]) return count[int]++
//         return count[int] = 1
//     })
    
//     for(prop in count) {
//         if(count[prop] % 2 !== 0) return +prop;
//     }

// }

// console.log(findOdd(t1));




//2 Vowel Count
//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

// const t1 = "abracadabra";

// function getCount(str) {
//     let vowelsCount = 0;
//     const strSplit = str.split('');
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     strSplit.forEach(i => {
//         vowels.forEach(j => {
//             if(i === j) vowelsCount++
//         })
//     })

//     return vowelsCount;
// }

// console.log(getCount(t1));

// // BETTER SOLUTION

// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// };





//3. Sum of Digits / Digital Root
//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// const t1 = 16;
// const t2 = 493193;

// function digital_root(n) {
//     let sum = Array.from(n.toString(), i => +i).reduce((a,b) => a+b)
//     let output = sum;
//     while(output > 9) {
//         output = Array.from(output.toString(), i => +i).reduce((a,b) => a+b);
//     }
    
//     return output
// }
// console.log(digital_root(132189));
// const splitN = n.toString().split('').map(i => +i)  Another way to split int;




//5. Even or Odd;
//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// const even_or_odd = (number) => number%2 ? 'Odd' : 'Even';

// console.log(even_or_odd(5));




//

