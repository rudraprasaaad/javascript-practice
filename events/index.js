function handleClick() {
  console.log("button clicked");
}

const btn = document.getElementById("myBtn2");
let counter = 0;

function handleCount() {
  console.log("counter", counter);
  counter++;
}

function greetMe() {
  console.log("greeted me");
}

btn.addEventListener("click", handleCount);
btn.addEventListener("click", greetMe);

setTimeout(() => {
  btn.removeEventListener("click", handleCount);
}, 5 * 1000);

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded");
});

const searchElem = document.getElementById("search-id");

function handleChange(e) {
  console.log(e);

  console.log("Target:", e.target);
  console.log("Target name:", e.target.name);
  console.log("Target value:", e.target.value);
  console.log("event type:", e.type);
  console.log("current target:", e.currentTarget);
}

searchElem.addEventListener("change", handleChange);

function fn() {
  console.log(this);
}
