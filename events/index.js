function handleClick() {
  console.log("button clicked");
}

const btn = document.getElementById("myBtn2");

let counter = 0;
btn.addEventListener("click", function () {
  console.log("counter", counter);
  counter++;
});
