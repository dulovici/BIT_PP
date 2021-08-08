'use strict'
console.log('Code Wars');
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




//6. Stop gninnipS My sdroW!
//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// const t1 = "Hey fellow warriors";
// const t2 = "This is another test";

// function spinWords(string){
//     const words = string.split(' ');
//     const output =[];

//     words.forEach(word => {
//         if(word.length > 4) {
//             output.push(word.split('').reverse().join(''));
//         }
//         else output.push(word)
//     })

//     return output.join(' ');
// }

// console.log(spinWords(t1));

// //Smarter way
// function spinWords(str){
//     return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
//   }




//7. Mumbling
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt

// function accum(s) {
// 	const chars = s.split('').map(el => el.toLowerCase());
//     let cnt = 1;
//     const output = [];

//     for(let i = 0; i < chars.length; i++) {
//         let piece = '';
//         for(let j = 0; j < cnt; j++) {
//             piece += chars[i]
//         }
//         output.push(piece)
//         cnt++
//     }

//     return output.map(el => el.charAt(0).toUpperCase() + el.substr(1)).join('-')
// }

// console.log(accum('aBcD'));

// //Smarter way

// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }




//8. Counting Duplicates
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// function duplicateCount(text){
//     const sample = text.toLowerCase().split('');
//     const occurrences = {};
//     let duplicates = 0;

//     sample.forEach(el => {
//         occurrences[el] ? occurrences[el]++ : occurrences[el] = 1;
//     })
    
//     for(let dupl in occurrences) {
//         if(occurrences[dupl] > 1) duplicates++
//     }

//     return duplicates;
// }

// console.log(duplicateCount("aabBcde" ));




//9. Higest and Lowest
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// const t1 = "1 2 3 4 5";
// const t2 = "1 2 -3 4 5";

// function highAndLow(numbers){
//     const sample = numbers.split(' ').map(el => +el);
//     let max = sample[0];
//     let min = sample[0];
//     sample.forEach(el => {
//         if(el > max) max = el;
//         if(el < min) min = el;
//     })

//     return `${max} ${min}`
// }

// console.log(highAndLow(t2));

// //Smarter way 

// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//   }




//10. Persistent. Bugger
//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// function persistence(num) {
//     let sample = num;
//     let cnt = 0;

//     while(sample > 9) {
//         const product = sample.toString().split('').map(i => +i).reduce((a, b)=> a*b, 1);
//         sample = product;
//         cnt ++
//     }

//     return cnt
// }

// console.log(persistence(39));



