function addPara() {
  const pElem = document.createElement("p");
  pElem.innerText = "This is a text dynamically";
  document.body.appendChild(pElem);
}
