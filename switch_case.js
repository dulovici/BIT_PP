

// var a = 3;
// var b = 1;

// //If else
// if (a === 1) {
//     console.log('One');
// } else if (a === 2) {
//     console.log('Two');
// } else if (a === 3) {
//     console.log('Three');
// } else {
//     console.log('Wrong number');
// };


// //Swich
// switch (b) {
//     case 1:
//         console.log('one');
//         break;

//     case '1':
//         console.log('String 1');
//         break;

//     default:
//         console.log('I dont know');
//         break;
// };




//1. Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console.
var day = 7;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednsday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Sunday');
}

// 2. Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. All other cases output a message explaining that input must be a number between 1
// and 7.

var day1 = 7;
switch (day1) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednsday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Input must be a nuber between 1 and 7');
};

// 3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
// is a weekday or weekend. All other cases output a message explaining that input must be a
// number between 1 and 7.

var day2 = 6;

switch (day2) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Its a week day.");
        break;
    case 6:
    case 7:
        console.log("Its a weekend");
        break;
    default:
        console.log("Input must be number from 1 to 7");
}


// 4. Write a program that for a 1-12 number input (representing a month in a year) shows that
// month’s name. All other cases output a message explaining that input must be a number
// between 1 and 12.

var month = 7;
switch (day1) {
    case 1:
        console.log('Januar');
        break;
    case 2:
        console.log('Februar');
        break;
    case 3:
        console.log('Mart');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('Maj');
        break;
    case 6:
        console.log('Jun');
        break;
    case 7:
        console.log('Jul');
        break;
    case 8:
        console.log('Avgust');
        break;
    case 9:
        console.log('Septembar');
        break;
    case 10:
        console.log('Oktobar');
        break;
    case 11:
        console.log('Novembar');
        break;
    case 12:
        console.log('Decembar');
        break;

};


// 5. Write a program that for a 1-12 number input (representing a month in a year) shows what
// season it is. All inputs different from 1-12 output a message explaining that input must be a
// number between 1 and 12.

switch (month) {
    case 1:
    case 2:
    case 3:
        console.log('Zima');
        break;
    case 4:
    case 5:
    case 6:
        console.log("Prolece");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Leto");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Jesen");
        break;
    default:
        console.log("Month need to be number from 1 to 7");

}


// 6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
// message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
// &quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
// &quot;Unknown grade&quot;.

var grade = 'F';   //A, B ,C, D, E, F

switch (grade) {
    case 'A':
        console.log('Good job');
        break;
    case 'B':
        console.log('Pretty good.');
        break;
    case 'C':
        console.log('Passed');
        break;
    case 'D':
        console.log('Not so good.');
        break;
    case 'F':
        console.log('You are dumb!');
        break;
    default:
        console.log('Unknown grade');
}


// 7. Write a program that takes as input a city name and outputs the country where the city is.
// You may choose which cities and countries you want to output yourself, however there has
// to be at least 5 countries and 15 cities. Note that each country must have a different
// number of cities. Input different from the listed cities should output a message&quot;Please
// choose a different city&quot;.

var city = 'Deli';

switch (city) {
    case 'Doha':
        console.log('Katar');
        break;
    case 'Hjuston':
    case 'Boston':
        console.log('Amerika');
        break;
    case 'Brno':
    case 'Prag':
    case 'Pardubice':
        console.log('Ceska');
        break;
    case 'Bangalor':
    case 'Kocin':
    case 'Kolkata':
    case 'Deli':
        console.log('Indija');
        break;
    case 'Beograd':
    case 'Bor':
    case 'Sabac':
    case 'Leskovac':
    case 'Nis':
        console.log('Srbija');
        break;
    default:
        console.log('Canot find city in database.');

}


// 8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
//     ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var a = 5;
var b = 0;
var op = '/';

switch (op) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        if (a === 0 || b === 0) console.log('You cannot devide by 0');
        else console.log(a / b);
        break;
    default:
        console.log('Wrong operator');

}