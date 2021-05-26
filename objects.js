'use strict'





// SHOPING LIST //

function Product(name, price, exdate) {
    this.id = Math.floor(Math.random() * 90000 + 10000);
    this.name = name;
    this.price = Number(price.toFixed(2));
    this.exdate = new Date(exdate)
};
Product.prototype.getInfo = function () {
    var info = '';
    info += this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    info += this.id;
    info += ','
    info += this.name;
    info += ','
    info += this.price;
    return info;
}

// ==================================================

function ShoppingBag() {
    this.products = [];
};
ShoppingBag.prototype.addProduct = function (product) {
    if (product.exdate > new Date) {
        this.products[this.products.length] = product;
    }
}
ShoppingBag.prototype.avrgPrice = function () {
    var cnt = 0;
    this.products.forEach(p => cnt += p.price)
    return Number((cnt / this.products.length).toFixed(3))
}
ShoppingBag.prototype.mostExp = function () {
    var max = this.products[0].price;
    this.products.forEach(p => {
        if (p.price > max) max = p.price;
    })
    return max;
}
ShoppingBag.prototype.calcTotal = function () {
    var total = 0;
    this.products.forEach(p => total += p.price);
    return total;
}



var mleko = new Product('Mleko', 102, '12 Jun 2022');
var banana = new Product('Banana', 95, '20 July 2022');
var majonez = new Product('Majonez', 200, '23 jun 2022');
var pivo = new Product('Pivo',600,'01 march 2020');
var cigare = new Product('cigare',430, '20 Jun 2025')

var ceger = new ShoppingBag();
ceger.addProduct(mleko)
ceger.addProduct(banana)
ceger.addProduct(majonez)
ceger.addProduct(pivo)
ceger.addProduct(cigare)



console.log(ceger);
console.log(ceger.mostExp());
