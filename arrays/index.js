const salad = ["tomato", "mushroom", "brocolli", "avocado", "carrot"];

const anotherSalad = new Array(
  "tomato",
  "mushroom",
  "brocolli",
  "avocado",
  "carrot"
);

console.log(salad, anotherSalad);

console.log(salad === anotherSalad);

const two = new Array(1, 2);

console.log(two);

console.log("before push");
for (let i = 0; i <= salad.length - 1; i++) {
  console.log(i, salad[i]);
}

console.log("after push");
salad.push("capsicum");
for (let i = 0; i <= salad.length - 1; i++) {
  console.log(i, salad[i]);
}

const saladCopy = salad.slice();

saladCopy.map((sc, i) => console.log(`salad copy of ${i} is ${sc}`));

console.log(Array.isArray(saladCopy));

let fruits = ["apple", "banana", "guava", ["carrot", "mushroom", "spinach"]];

let veg = fruits[3];

console.log(veg);
