
console.log('Arrays');

var a = [0, 1, 2, 3]
console.log(a[2]);
a[2] = 'Dva';
console.log(a);
console.log(a.length);

var str = 'Abcdef';
console.log(str.length);
console.log(str[3]);



// 1. Write an array of months in a year. Using console.log display June, October and January
// from the array.

var months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
console.log(months[5], months[9], months[0]);


// 2. Write an arrays of days in a week. Using console.log display Sunday from the array.
var days = ['Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak', 'Petak', 'Subota', 'Nedelja'];
console.log(days[days.length - 1]);

// 3. Print all negative elements from the array [2, -4, 5, -2, -11].
var nums = [2, -4, 5, -2, -11];
var negativeNums = [nums[1], nums[3], nums[4]];
console.log(negativeNums);

//4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,72, 14, 9].
var numbers = [5, 15, -5, 20, 12, 18, 72, 14, 9];
var divisibleBy3 = [numbers[1], numbers[4], numbers[5], numbers[6], numbers[8]];
console.log(divisibleBy3);


//5. What is the index of number 24 in the following array? [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,10, 26, 7]];
var arrOfArr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(arrOfArr[0][3]);
console.log(arrOfArr[2]);
console.log(arrOfArr[1][2]);

