// 'use strict'

// SHOPING LIST //

// function Product(name, price, exdate) {
//     this.id = Math.floor(Math.random() * 90000 + 10000);
//     this.name = name;
//     this.price = Number(price.toFixed(2));
//     this.exdate = new Date(exdate)
// };
// Product.prototype.getInfo = function () {
//     var info = '';
//     info += this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
//     info += this.id;
//     info += ','
//     info += this.name;
//     info += ','
//     info += this.price;
//     return info;
// }

// // ==================================================

// function ShoppingBag() {
//     this.products = [];
// };
// ShoppingBag.prototype.addProduct = function (product) {
//     if (product.exdate > new Date) {
//         this.products[this.products.length] = product;
//     }
// }
// ShoppingBag.prototype.avrgPrice = function () {
//     var cnt = 0;
//     this.products.forEach(p => cnt += p.price)
//     return Number((cnt / this.products.length).toFixed(3))
// }
// ShoppingBag.prototype.mostExp = function () {
//     var max = this.products[0].price;
//     this.products.forEach(p => {
//         if (p.price > max) max = p.price;
//     })
//     return max;
// }
// ShoppingBag.prototype.calcTotal = function () {
//     var total = 0;
//     this.products.forEach(p => total += p.price);
//     return total;
// }



// var mleko = new Product('Mleko', 102, '12 Jun 2022');
// var banana = new Product('Banana', 95, '20 July 2022');
// var majonez = new Product('Majonez', 200, '23 jun 2022');
// var pivo = new Product('Pivo', 600, '01 march 2020');
// var cigare = new Product('cigare', 430, '20 Jun 2025')

// var ceger = new ShoppingBag();
// ceger.addProduct(mleko)
// ceger.addProduct(banana)
// ceger.addProduct(majonez)
// ceger.addProduct(pivo)
// ceger.addProduct(cigare)



//=====================================================

// function PaymentCard(amount,isActive) {
//     this.amount = Number(amount.toFixed(2));
//     this.isActive = isActive;
// }

// var ibq = new PaymentCard(12000,true);
// var intesa = new PaymentCard(800,false);
// var bihBank = new PaymentCard(200,true);




// function checkoutAndBuy(bag,card) {
//    var total = bag.calcTotal() ;
//    if (card.amount >= total) console.log('Purchase is successful.');
//    else  {
//        var short = total - card.amount;
//        console.log(`You need ${short} maraka more.`);
//    };
// }

// checkoutAndBuy(ceger,bihBank)

//=====================================================================================================


//AIRPORT//

// function Person(name,surename) {
//     this.name = name;
//     this.surename = surename;
// }
// Person.prototype.getData = function() {
//     return `${this.name} ${this.surename}`;
// }
// //===
// function Seat(number = Math.floor(Math.random() * 90 + 10),category = 'E') {
//     this.number = number;
//     this.category = category.toUpperCase();
// }
// Seat.prototype.getData = function() {
//     return `${this.number}${this.category}`
// }
// //===
// function Pax(person,seat) {
//     this.person = person;
//     this.seat = seat;
// }
// Pax.prototype.getData = function() {
//     return `${this.seat['number']}, ${this.seat['category']}, ${this.person['name']} ${this.person['surename']}`;
// }
// //===
// function Flight(relation,date) {
//     this.relation = relation;
//     this.date = new Date(date)
//     this.listOfPax = [];
// }
// Flight.prototype.addPax = function(pax) {
//     this.listOfPax.push(pax)
// }
// Flight.prototype.getData = function() {
//     var output = '';
//     output += this.date + ',';
//     output += this.relation + '\n';
//     for(var i = 0; i < this.listOfPax.length; i++) {
//         output += `${this.listOfPax[i]['seat']['number']},${this.listOfPax[i]['seat']['category']},${this.listOfPax[i]['person']['name']} ${this.listOfPax[i]['person']['surename']} \n`
//     }


//     return output;
// }
// //===
// function Airport() {
//     this.name = 'HIA'
//     this.listOfFl = [];
// }
// Airport.prototype.addFlight = function(flight) {
//     this.listOfFl.push(flight);
// }





// var igor = new Person('Igor', 'Dulovic');
// var komsa = new Person('Aleksandar', 'Dojcinovic')

// var seatIgor = new Seat(13,'E');
// var seatKomsa = new Seat(14,'E');

// var bpIgor = new Pax(igor,seatIgor);
// var bpKomsa = new Pax(komsa,seatKomsa);

// var qr666 = new Flight('Prague-Doha', '3 8 2020');

// var hamad = new Airport();


// qr666.addPax(bpIgor);
// qr666.addPax(bpKomsa);

// console.log(qr666.getData());
// console.log(qr666);



// ===========================================================



// class Car {
//     constructor(brend, model, boja) {
//         this.brand = brend,
//             this.model = model,
//             this.boja = boja
//     }
//     revEngine() {
//         console.log('Vrrrrmm!');
//     }
// };

// class Hibrid extends Car {
//     constructor(brend, model, boja, km) {
//         super(brend, model, boja);
//         this.range = km;
//     }
//     drive() {
//         this.range -= 10;
//         console.log(this);
//     }
//     charge() {
//         this.range = km;
//         console.log(this);
//     }

// }

// const benve = new Car('BMW', '540i', 'Crni');
// const mecka = new Car('Mercedes', '200E', 'Sivi');
// const tesla = new Hibrid('Tesla', 'S3', 'Crveni', 200);



// console.log(tesla);
// tesla.drive()
// tesla.revEngine()
// tesla.drive()
// tesla.charge()


// ======================================================================

// class Person {
//     constructor(name,surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     getData() {
//         return `${this.name} ${this.surname}`;
//     }
// }

// class Seat {
//     constructor(number = Math.floor(Math.random() * 90000 + 10000) ,category = 'E') {
//         this.number = number;
//         this.category = category;
//     }

//     getData() {
//         return `${this.number}${this.category}`;
//     }
// }

// class Passenger {
//     constructor(person,seat) {
//         this.fullName = `${person.name}_${person.surname}`;
//         this.number = seat.number;
//         this.category = seat.category;
//     }

//     getData() {
//         return `${this.number}${this.category}-${this.fullName}`;
//     }
// }

// class Flight {
//     constructor(relation,date) {
//         this.relation = relation;
//         this.date = date;
//         this.paxList = [];
//     }

//     addPax(pax) {
//         this.paxList.push(pax);
//     }

//     getData() {
//         let data = `${this.date}, ${airport.name}-${this.relation} \n`
//         this.paxList.forEach(e => data += e.getData() + '\n');
//         return data
//     }
// }

// class Airport {
//     constructor() {
//         this.name = 'HIA';
//         this.listOfFlights = [];
//     }

//     addFlight(flight) {
//         this.listOfFlights.push(flight);
//     }
// }



// const pera = new Person('Petar', 'Jelic');
// const ljuba = new Person('Ljubomir', 'Zivanovic');

// const peraSeat = new Seat();
// const ljubaSeat = new Seat()

// const peraBp = new Passenger(pera,peraSeat);
// const ljubaBp = new Passenger(ljuba,ljubaSeat)

// const prag = new Flight('PRG', '08-03-2020');

// const airport = new Airport()


// prag.addPax(peraBp)
// prag.addPax(ljubaBp)
// airport.addFlight(prag)
// console.log(airport);
// console.log(prag.getData());

// ======================================================================

// class Genre {
//     constructor(genre) {
//         this.genre = genre;
//     }

//     getData() {
//         return `${this.genre[0].toUpperCase()}${this.genre[this.genre.length - 1].toUpperCase()}`;
//     }
// }

// class Movie {
//     constructor(title, genre, length) {
//         this.title = title;
//         this.genre = genre.genre;
//         this.lengthMin = length
//     }

//     getData() {
//         return `${this.title}, ${this.lengthMin}min, ${this.genre.getData()}`
//     }
// }

// class Program {
//     constructor(date) {
//         this.date = date;
//         this.listOfMov = [];
//         this.numOfMovies = 0;
//         // this.numOfMov = this.listOfMov.length;
//     }

//     addMovie(movie) {
//         this.listOfMov.push(movie);
//         this.numOfMovies = this.listOfMov.length;
//     }

//     getData() {
//         const length = this.listOfMov.reduce((a, c) => a.lengthMin + c.lengthMin) / 60
//         let output = `Date:${this.date},Program Length:${length}h \n`;
//         this.listOfMov.forEach(e => output += e.title + ' ,' + e.lengthMin + ', ' + e.genre + '\n');
//         return output
//     }
// }

// class Festival {
//     constructor(name) {
//         this.name = name;
//         this.listOfPrograms = [];
//         this.numOfMovies = 0;
//     }

//     addProgram(program) {
//         this.listOfPrograms.push(program);
//     }
// }

// //Zanrovi
// const akcija = new Genre('Action');
// const drama = new Genre('Drama');
// const crtani = new Genre('Cartoon');
// //Filmovi
// const underground = new Movie('Undergorund', drama, 180);
// const otpisani = new Movie('Otpisani', akcija, 120);
// const miki = new Movie('Miki Maus', crtani, 90);
// //Program
// const odrasli = new Program('10 5 2021');
// const deca = new Program('11 05 2021');
// //Festival
// const fest = new Festival('Brčko Nights')



// odrasli.addMovie(otpisani)
// odrasli.addMovie(underground)
// fest.addProgram(odrasli);
// console.log(odrasli);
// console.log(odrasli.getData());


//=============================================================================

// 2) Turn an array of numbers into a long string of all those numbers.
// const test = [1, 2, 3];

// function stringConcat(arr) {
//     return test.reduce((a, e) => a + e, '')
// };

// console.log(stringConcat(test));


// 3) Turn an array of voter objects into a count of how many people voted.

// var voters = [
//     { name: 'Bob', age: 30, voted: true },
//     { name: 'Jake', age: 32, voted: true },
//     { name: 'Kate', age: 25, voted: false },
//     { name: 'Sam', age: 20, voted: false },
//     { name: 'Phil', age: 21, voted: true },
//     { name: 'Ed', age: 55, voted: true },
//     { name: 'Tami', age: 54, voted: true },
//     { name: 'Mary', age: 31, voted: false },
//     { name: 'Becky', age: 43, voted: false },
//     { name: 'Joey', age: 41, voted: true },
//     { name: 'Jeff', age: 30, voted: true },
//     { name: 'Zack', age: 19, voted: false }
// ];

// function totalVotes(arr) {
//     return arr.reduce((a, e) => {
//         if (e.voted) a++
//         return a
//     }, 0)
// }

// console.log(totalVotes(voters));

// console.log(voters[0].voted);

// git vezba