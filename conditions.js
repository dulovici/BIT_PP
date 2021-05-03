


// var a = 10;
// var b = 6;
// var c = -12;
// var d = 'String';

//1
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else {
    console.log('Jednaki su ba.');
};



//2
if (a % 2 === 0) {
    console.log('Ovotije parno baki.');
} else {
    console.log('Ovotije neparno.');
};



//3
if (a % 3 === 0 || a % 5 === 0) {
    console.log(a);
};

//4
if ((a + b + c) > 0) {
    console.log('Number is positive');
} else {
    console.log('Number is negative');
}

//5
if (typeof (a) === 'number' && a % 2 === 0) {
    console.log(a / 2);
} else {
    console.log('X');
}


//6
var a = -5;
var b = 12;
var c = 10;
var d = 9;
var e = -1;

if (a = b && a >= c && a >= d && a >= e) console.log(a);

else if (b >= a && b >= c && b >= d && b >= e) console.log(b);

else if (c >= a && c >= b && c >= d && c >= e) console.log(c);

else if (e >= a && e >= b && e >= c && e >= d) console.log(e)

else console.log('You need to put a number');



//7
var x = 1;
var y = 2;
var z = 3;

if (x >= y && x >= z) {
    if (y > z) console.log(x, y, z);
    else console.log(x, z, y);

} else if (y >= x && y >= z) {
    if (x > z) console.log(y, x, z);
    else console.log(x, y, z);

} else if (z >= x && z >= y) {
    if (x > y) console.log(z, x, y);
    else console.log(z, y, x);
}



//==================================================================================

var t1 = 33;
var t2 = t1 > 0 ? 'T1 is positive' : 'T1 is negative';

console.log(t2);


//8

var n = 3;
var result = ''

if (n === 1) {
    result = 'One';
} else if (n === 2) {
    result = 'Two';
} else if (n === 3) {
    result = 'Three';
} else if (n === 4) {
    result = 'Four';
} else result = 'Wrong number';

// console.log(result);

//==================================================================================

//C to F
// var c = 60;
// var f = (9 * c / 5) + 32;
// var temperature = c + '°C is ' + f + '°F';
// console.log(temperature);

var temp = 60;
var unit = 'F';
var convert;

if (unit === 'C') {
    convert = (9 * temp / 5) + 32;
    console.log(temp + '°C is ' + convert + '°F');
} else if (unit === 'F') {
    convert = (temp - 32) * 5 / 9;
    console.log(temp + '°F is ' + convert + '°C');
} else console.log('Unit is wrong bro.');




//Num difference
var num = 11;
var diference = num < 13 ? 13 - num : (num - 13) * 2;
console.log(diference);

//sum comparing
var n1 = 8;
var n2 = 8;
var sum = n1 + n2;

if (n1 === n2) sum *= 3;
console.log(sum);

//sum 50
var q1 = 10;
var q2 = 40;

if (q1 === 50 || q2 === 50 || q1 + q2 === 50) console.log(true);
else console.log(false);




//in range

var int = 173;

if (int > 20 && int < 100) console.log('20 ⇔ 100');
else if (int > 100 && int < 400) console.log('100 ⇔ 400');
else console.log('-');


//GitHubPractice

console.log('Duka Dizel pobjedio');



