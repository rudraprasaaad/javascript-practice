"use strict";
const employee = {
  firstName: "Alex",
  lastName: "B",

  returnThis: function () {
    return this;
  },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(employee.getFullName());

const tom = {
  name: "Tom",
  age: 7,
};

const jerry = {
  name: "jerry",
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
}

greetMe(tom);
tom.logMessage();

greetMe(jerry);
jerry.logMessage();

const food = {
  name: "mango",
  color: "yellow",
  getDesc: function () {
    return () => `${this.name} is ${this.color}`;
  },
};

const descFunc = food.getDesc();

console.log(descFunc());

function greeting() {
  console.log(`Hello, ${this.name} belongs to ${this.address} `);
}

const user = {
  name: "rudraprasad",
  address: "kadodara",
};

greeting.call(user);

const likes = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + ", " + hobby2);
};

const person = {
  name: "rudra",
};

const hobbiesToApply = ["coding", "low level stuffs to do"];

likes.apply(person, hobbiesToApply);

const newHobbies = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

const officer = {
  name: "Bob",
};

const newFn = newHobbies.bind(officer, "Dancing", "singinig");
newFn();
