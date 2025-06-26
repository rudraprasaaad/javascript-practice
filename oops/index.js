"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const rudra = new Person("Rudra", 2004);

const fushiguro = new Person("Toshi", 1994);

// Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// console.log(Person.prototype);
// console.log(rudra.__proto__);
// rudra.calcAge();
// fushiguro.calcAge();

// 1. New empty object {} is created.
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const arr = [2, 3, 3, 4];

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

let me = "rudra";
console.log(me.__proto__);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
