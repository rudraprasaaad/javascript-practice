// // obsession beats talent.
// const salad = ["tomato", "mushroom", "brocolli", "avocado", "carrot"];

// const anotherSalad = new Array(
//   "tomato",
//   "mushroom",
//   "brocolli",
//   "avocado",
//   "carrot"
// );

// console.log(salad, anotherSalad);

// console.log(salad === anotherSalad);

// const two = new Array(1, 2);

// console.log(two);

// console.log("before push");
// for (let i = 0; i <= salad.length - 1; i++) {
//   console.log(i, salad[i]);
// }

// console.log("after push");
// salad.push("capsicum");
// for (let i = 0; i <= salad.length - 1; i++) {
//   console.log(i, salad[i]);
// }

// const saladCopy = salad.slice();

// saladCopy.map((sc, i) => console.log(`salad copy of ${i} is ${sc}`));

// console.log(Array.isArray(saladCopy));

// let fruits = ["apple", "banana", "guava", ["carrot", "mushroom", "spinach"]];

// let veg = fruits[3];

// console.log(veg);

// const colors = ["red", "blue", "green"];
// colors.fill("pink");

// console.log(colors);

// console.log(colors.includes("cool"));
// console.log(colors.indexOf("pink"));

// const names = ["tom", "aoex", "aob"];
// console.log(names.splice(0, 1, "john", "rudra"));
// console.log(names);

// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());

// const arr2 = [0, 1, 2, [3, 4, [5, 6, 7]]];
// console.log(arr2.flat().flat());

// const employess = [
//   {
//     name: "Bob",
//     dept: "Engineering",
//     salary: 5000,
//   },
//   {
//     name: "Alex",
//     dept: "HR",
//     salary: 3000,
//   },
//   {
//     name: "Ravi",
//     dept: "Engineering",
//     salary: 7000,
//   },
//   {
//     name: "John",
//     dept: "Engineering",
//     salary: 1000,
//   },
//   {
//     name: "Tom",
//     dept: "Engineering",
//     salary: 6000,
//   },
// ];

// const name = Object.groupBy(employess, ({ dept }) => dept);
// console.log(name);

// const salary = Object.groupBy(employess, ({ salary }) => {
//   return salary > 5000 ? "More than 5k" : "less than 5k";
// });

// console.log(salary);

// const items = [1, 2, 3];
// console.log(items.toReversed());
// console.log(items);

let customers = [
  {
    id: 1,
    f_name: "abby",
    l_name: "thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["shampoo", "toys", "book"],
  },
  {
    id: 2,
    f_name: "rudra",
    l_name: "thomas",
    gender: "M",
    married: false,
    age: 20,
    expense: 500,
    purchased: ["shampoo", "toys", "book"],
  },
  {
    id: 3,
    f_name: "vishal",
    l_name: "shrimali",
    gender: "M",
    married: false,
    age: 62,
    expense: 500,
    purchased: ["shampoo", "toys", "book"],
  },
  {
    id: 4,
    f_name: "jatin",
    l_name: "thomas",
    gender: "M",
    married: false,
    age: 21,
    expense: 500,
    purchased: ["shampoo", "toys", "book"],
  },
  {
    id: 5,
    f_name: "dev",
    l_name: "thomas",
    gender: "M",
    married: false,
    age: 65,
    expense: 500,
    purchased: ["shampoo", "toys", "book"],
  },
];

const newArray = customers.filter((customer) => {
  return customer.age >= 60;
});

const customerFullName = customers.map((customer) => {
  let title = "";
  if (customer.gender === "M") {
    title += "Mr.";
  } else if (customer.gender === "F" && customer.married) {
    title += "Mrs.";
  } else {
    title += "Miss.";
  }

  customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}}`;

  return customer;
});

// console.log(customerFullName);
// console.log(newArray);

const marriedCustomers = customers.filter((customer) => {
  return customer.married;
});

const marriedCustomersExpeneses = marriedCustomers.map((customer) => {
  return customer.expense;
});

const totalMarriedCustomersExpenses = marriedCustomers.reduce(
  (customer, currValue) => {
    return customer + currValue;
  },
  0
);

console.log(totalMarriedCustomersExpenses);

// console.log(marriedCustomers);
