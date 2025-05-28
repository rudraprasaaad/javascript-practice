let replace = document.getElementById("replace");

function filterList() {
  let search = document.getElementById("search");
  const items = document.querySelectorAll("ul#list li");
  let searchValue = search.value;
  items.forEach((item) => {
    item.style.backgroundColor = item.innerText
      .toLowerCase()
      .includes(searchValue.toLowerCase())
      ? "green"
      : "";
  });
}

function replaceItems() {
  let searchValue = document.getElementById("search").value.toLowerCase();
  let replaceValue = document.getElementById("replace").value;
  let items = document.querySelectorAll("ul#list li");

  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchValue)) {
      item.innerText = replaceValue;
    }
  });
}
