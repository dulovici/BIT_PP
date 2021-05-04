
console.log('Loops');

//do -while
var doWhile = 2;

do {
    doWhile++
    // console.log(doWhile);
} while (doWhile < 10)

//for loop




// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.
for (var i = 1; i <= 15; i++) {
    if (i % 2 === 0) console.log(i + ' is even');
    else console.log(i + ' is odd');
};

// 2. Write a program to sum the multiples of 3 and 5 under 1000.
var sumOfMul = 0;
for (var i = 0; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sumOfMul += i;
    }
}
console.log(sumOfMul);

//3. Write a program to compute the sum and product of an array of integers.

var int = [1, 14, 17, 82, 2, 9];
var sum = 0;
var pro = 1;
for (var i = 0; i < int.length; i++) {
    sum += int[i];
    pro *= int[i];

}
console.log(sum);
console.log(pro);


// 4. Write a program which prints the elements of the following array as a single string.
// var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];