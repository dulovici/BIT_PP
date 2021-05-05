
console.log('Loops');

// //do -while
// var doWhile = 2;

// do {
//     doWhile++
//     // console.log(doWhile);
// } while (doWhile < 10)

//for loop

//========================================================================================================



// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

// for (var i = 1; i <= 15; i++) {
//     if (i % 2 === 0) console.log(i + ' is even');
//     else console.log(i + ' is odd');
// };

//========================================================================================================

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

// var sumOfMul = 0;
// for (var i = 0; i <= 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         sumOfMul += i;
//     }
// }
// console.log(sumOfMul);


//========================================================================================================

//3. Write a program to compute the sum and product of an array of integers.

// var int = [1, 14, 17, 82, 2, 9];
// var sum = 0;
// var pro = 1;
// for (var i = 0; i < int.length; i++) {
//     sum += int[i];
//     pro *= int[i];

// }
// console.log(sum);
// console.log(pro);



//========================================================================================================

// 4. Write a program which prints the elements of the following array as a single string.

// var x = ['1','A','B','c','r',true,NaN,undefined];
// var eStr = '';


// for(var i = 0;i<x.length;i++) {
//     eStr += x[i] + ' '
// };
// console.log(eStr);


//========================================================================================================

// 5. Write a program that prints the elements of the following array.

// var a1 = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];
// for(var i = 0; i<a1.length;i++) {
//     console.log(a1[i]);
// };


//========================================================================================================

// 6. Write a program that outputs the sum of squares of the first 20 numbers.

// var sumOfSq = 0;
// for(var i =0; i <= 20; i++) {
//     sumOfSq += i**2;
// }
// console.log(sumOfSq);

//========================================================================================================

//6.5 Write avrg of scores and calculate grade.

// var david = 80;
// var marko = 77;
// var danny = 88;
// var john = 95;
// var thomas = 68;
// var students = [david, marko, danny, john, thomas];
// var total = 0;
// for (var i = 0; i < students.length; i++) {
//     total += students[i];
//     console.log();
// }
// var avr = total / students.length
// Zavrsi drugi deo 


//========================================================================================================

// 7. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// var e = 3;
// var a = [5, -4.2, 3, 7];

// for(var i = 0; i<a.length; i++) {
//     if(e === a[i]) console.log('yes');
// };


//========================================================================================================

// 8. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

// var arr8 = [-3, 11, 5, 3.4, -8];
// for(var i = 0; i<arr8.length; i++) {
//     if (arr8[i] > 0) console.log(arr8[i]*2);
//     else console.log(arr8[i]);
// }


//========================================================================================================

// 9. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

//========================================================================================================

// 10. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

//========================================================================================================

// 11. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

// var arr11 = [3, 11, -5, -3, 2];
// var sum11 = 0;
// for(var i = 0; i<arr11.length; i++) {
//     if(arr11[i]>0) sum11 += arr11[i];
// }
// console.log(sum11);


//========================================================================================================

// 12. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// var isSim = [2, 4, -2, 7, -2, 4, 2];
// var ltr = '';
// var rtl = '';
// for(var i = 0 ; i< isSim.length; i++) {
//     ltr += isSim[i]
// }
// for(var i = isSim.length-1; i>=0; i--){
//     rtl += isSim[i]
// }
// if(ltr === rtl) console.log('The array is symmetric.');
// else console.log('Is not symetric');console.log(i);


//========================================================================================================

// 13. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

//========================================================================================================

// 14. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

// var arr1 = [4, 5, 6, 2];
// var arr2 = [3, 8, 11, 9];
// var concated = [];


//========================================================================================================

// 15. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

// var e = 2;
// var t1 = [4, 6, 2, 8, 2, 2];
// var t2 = [];

// for (var i = 0; i < t1.length; i++) {
//     if (t1[i] !== e) t2.push(t1[i])
// }
// console.log(t2);




//========================================================================================================

// 16. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

//========================================================================================================

// 17. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).


// for (var i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
//     else if (i % 5 === 0) console.log('Buzz');
//     else if (i % 3 === 0) console.log('Fizz');
//     else console.log(i);
// }



//===================>   SKOLSKI RAD  <=======================================

//Find biggest and smallest number in array
var min = Infinity;
var max = -Infinity;
var arr = [4, 6, 8, 24, 7, 9, 12, 4, 3];
//filter max
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);

//Filter min
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);