document.getElementById("grandParent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

const btn = document.getElementById("child");

btn.addEventListener("click", () => {
  console.log("button clicked");
});
