let paras = document.querySelectorAll("p.para");
function highlightText() {
  console.log("about a highlight text");
  paras.forEach((element) => {
    element.style.backgroundColor = "yellow";
  });
}

function filterList() {
  const inputElem = document.getElementById("searchInput");
  const input = inputElem.value;

  const items = document.querySelectorAll("ul#itemList li");

  items.forEach((item) => {
    item.style.display = item.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? "block"
      : "none";
  });
}

let text = document.getElementById("text");

let words = text.innerText.split(" ");

words.map((word) => console.log(word));
