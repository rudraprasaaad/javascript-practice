function factory() {
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => counter--,
    reset: () => (counter = 0),
  };
}

const check = factory();
console.log(check.increment());
console.log(check.increment());
console.log(check.increment());
console.log(check.increment());
console.log(check.increment());
console.log(check.decrement());
console.log(check.decrement());
console.log(check.decrement());
console.log(check.decrement());
console.log(check.decrement());
console.log(check.reset());
