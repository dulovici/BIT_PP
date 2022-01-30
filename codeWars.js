'use strict'
console.log('Code Wars');
                                                             




                                                            // UTILITY TOOLS //

//1. GENERATE RANDOM BOOLEAN
// const randomBoolean = () => Math.random() >= 0.5;
// console.log(randomBoolean());


//2. GENERATE RANDOM NUMBER
// const randomNumber = (max) => Math.round(Math.random() * max) ;
// console.log(randomNumber(10));

// const randomNumInRange = (min,max) => Math.round(Math.random() * (max-min) + min)
// console.log(randomNumInRange(10,12));


//3. GENERATE RANDOM ID
// const randomId = () => Math.random().toString(36).substring(2) || 0;
// console.log(randomId());


//4. GENERATE RANDOM HEX NUMBER
// const randomHex = () => `#${Math.random().toString(16).slice(2,9).padEnd(6,'0')}`;
// console.log(randomHex());


//5.INITIALIZE AN ARRAY
// const generateSortedNumberArray = (length) => [...Array(length).keys()]


//6.REMOVE DUPLICATES FROM AN ARRAY
// const removeDuplicates = (target) => [...new Set(target)];
// console.log(removeDuplicates([1,2,3,3,4,5,6,4,7,5,5,2,4,8,9,9,7,5]));


//7.SHUFFLE AN ARRAY 
// function shuffleArray(array)  {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array
// }
// console.log(shuffleArray(['jedan','dva','tri','cetri','pet']));



//8. DETECT HOVER EFFECT FEATURE
// const hasOverEffect = () => window.matchMedia('(any-hover: hover)').matches;
// //res will be true for desktop devices and false for mobile ones
// console.log(hasOverEffect());









                                                         // TRYING SOME THINGS//
    //ERROR AS PARAMETER

    // const isRequired = () => {throw new Error('Param is required.')};
    // const print = (num = isRequired()) => {console.log(`printing ${num}`)};

    //===============
    //FORMAT JSON CODE

    // console.log(JSON.stringify({name: 'Zoki', age: 32},null, '\t'));

    //===============
    // REMOVE FALSY VALUES FROM ARRAY

    // const test = [1, undefined, 2, null, 3, NaN, 4, 0, 5, '', 6, false];
    // const trueVal = test.filter(el => el);
    // const trueVal2 = test.filter(Boolean);
    // console.log(trueVal);

    //===============
    // MERGE OBJECTS

    // const user = {
    //     name: 'Zmika Peric',
    //     gender: 'Male'
    // };

    // const collage = {
    //     prymary: 'Primary school',
    //     secondary:  'Secondary school'
    // };

    // const skills = {
    //     programing: 'Extreme',
    //     swimming: 'Average',
    //     sleeping: 'Pro'
    // };

    // const summary = {...user, ...collage, ...skills};

    // console.log(summary);

    //===============
    



    







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




//11. Square evety digit 
//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// function squareDigits(num){
//     const output = [];
//     const numSplit = num.
//     toString()
//     .split('')
//     .map(i => +i)
//     .forEach(el => {
//         output.push(el * el)
//     })
    
//     return +output.join('')
// }

// console.log(squareDigits(9119));




//12. Descending Order
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// function descendingOrder(n){
//     return +n.toString().split('').map(i => +i).sort((a,b) => b-a).join('')
// }

// console.log(descendingOrder(145263));




//.13 Find The Parity Outlier
//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// const t1 = [2, 4, 0, 100, 4, 11, 2602, 36];
// const t2 = [160, 3, 1719, 19, 11, 13, -21];

// function findOutlier(integers){
//     const even = [];
//     const odd = [];

//     integers.forEach(el => el % 2 ? odd.push(el) : even.push(el));

//     return even.length === 1 ? even[0] : odd[0]
// }

// console.log(findOutlier(t2));

// //Smarter way

// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }





//14. Array.dif
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.

// function arrayDiff(a, b) {
//     const output = a
//     .concat(b)
//     .filter(el => !a.includes(el) || !b.includes(el));

//     return a.length === 0 ? [] : output
// }

// console.log(arrayDiff([], [4,5]));

// //Smarter way 
// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
// }




//15. Calculating with Functions
//This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// function handler(num,operation) {
//     if(operation) return operation(num);
//     return num;
// }

// function zero(operation) {
//     return handler(0,operation)
// }
// function one(operation) {
//     return handler(1,operation)
// }
// function two(operation) {
//     return handler(2,operation)
// }
// function three(operation) {
//     return handler(3,operation)
// }
// function four(operation) {
//     return handler(4,operation)
// }
// function five(operation) {
//     return handler(5,operation)
// }
// function six(operation) {
//     return handler(6,operation)
// }
// function seven(operation) {
//     return handler(7,operation)
// }
// function eight(operation) {
//     return handler(8,operation)
// }
// function nine(operation) {
//     return handler(9,operation)
// }

// function plus(x) {
//     return function(y) {
//         return Math.floor(y + x)
        
//     }
// }
// function minus(x) {
//     return function(y) {
//         return Math.floor(y - x)
//     }
// }
// function times(x) {
//     return function(y) {
//         return Math.floor(y * x)
//     }
// }
// function dividedBy(x) {
//     return function(y) {
//         return Math.floor(y / x)
//     }
// }


// console.log(three(plus(five())));




//16. Create Phone Number
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


// const t1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function createPhoneNumber(numbers){
//     const output = ['(','n','n','n',')',' ','n','n','n','-','n','n','n','n']
//     let cnt = 0;

//     for(let i = 0; i < output.length; i++) {
//         if(output[i] === 'n') {
//             output[i] = numbers[cnt];
//             cnt++
//         }
//     }

//     return output.join('')
// }

// console.log(createPhoneNumber(t1));


// STRING PERMUTATION
// let findPermutations = (string) => {
//     if (!string || typeof string !== "string"){
//       return "Please enter a string"
//     } else if (string.length < 2 ){
//       return string
//     }
  
//     let permutationsArray = [] 
     
//     for (let i = 0; i < string.length; i++){
//       let char = string[i]
  
//       if (string.indexOf(char) != i)
//       continue
  
//       let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
//       for (let permutation of findPermutations(remainingChars)){
//         permutationsArray.push(char + permutation) }
//     }
//     return permutationsArray
//   }

//   console.log(findPermutations('1234'));


// function nextBigger(n) {
//     const sortedDigits = n => ('' + n).split('').sort((a, b) => b - a)
//     const max = +sortedDigits(n).join('')
//     for (let i = n + 1; i <= max; i++) {
//       if (max === +sortedDigits(i).join('')) return i
//     }
//     return -1
//   }

//   console.log(nextBigger(12));




// function nextBigger(num) {
//     function engine(n){
//         const sortedN = num => +num.toString().split('').sort((a,b) => b - a ).join('')
//         const max = sortedN(n)
//         for(let i = n + 1; i <= max; i++) {
//             if(max === sortedN(i)) return i;
//         }
//         return -1
//     }

//     if(num.toString().length < 15) return engine(num);

//     const number = num.toString()
//     const part1 = number.slice(0, number.length/2)
//     const part2 = +number.slice(number.length/2, number.length)
    
//     return +(part1 + engine(part2))
// }

// console.log(nextBigger(12345678910111));




//17 Take a picture 
//Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

//sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
//sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]

// const t1 = ["2016.img1","2016.img2","2015.img3","2016.img42","2013.img5"];
// const t2 = ["2016.img1"];

// function sortPhotos(pics){
//     const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', { numeric: true });
//     const sortedPics = pics.sort(sortAlphaNum);
//     const lastPic = sortedPics[sortedPics.length-1];
//     const lastCH = isNaN(+lastPic.slice(-2)) ? +lastPic.slice(-1) : +lastPic.slice(-2);
//     const nextPic = isNaN(+lastPic.slice(-2)) 
//     ? lastPic.substring(0, lastPic.length-1) + (lastCH + 1 )
//     : lastPic.substring(0, lastPic.length-2) + (lastCH + 1)

//     sortedPics.push(nextPic)

//     return sortedPics.length > 5 ? sortedPics.slice(sortedPics.length-6,sortedPics.length) : sortedPics;
// };


// console.log(sortPhotos(['2008.img10', '2012.img11', '2009.img19']));




//18 Your order please
//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// const t1 = "is2 Thi1s T4est 3a";
// const t2 = "4of Fo1r pe6ople g3ood th5e the2";

// function order(words){
    
//     return words.split(' ').sort((a,b) => a - b)
// }

// console.log(order(t1));




//19 Two fighters one winner

// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function() { return this.name; }
// }


// const zoki = new Fighter('Zoki', 100, 10);
// const zmika = new Fighter('Zmika', 100, 20);


// function declareWinner(fighter1, fighter2, firstAttacker) {
//     let turn = fighter1 === firstAttacker;

//     while('fight') {
//         if(turn) {
//             fighter2.health -= fighter1.damagePerAttack;
//             if(fighter2.health <= 0) 
//             return fighter1.name;
//         }else {
//             fighter1.health -= fighter2.damagePerAttack;
//             if(fighter1.health <= 0) 
//             return fighter1.name;
//         }

//         turn = !turn
//     }
// }

// console.log(declareWinner(zoki,zmika,zmika));









