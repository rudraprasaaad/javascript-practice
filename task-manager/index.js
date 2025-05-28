function filterTask() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const taskList = document.querySelectorAll("ul#taskList li");

  taskList.forEach((task) => {
    task.style.display = task.innerText.toLowerCase().includes(search)
      ? "block"
      : "none";
  });
}

function addTask() {
  const task = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const list = document.createElement("li");

  if (task.value.trim() != "") {
    list.innerText = task.value;
    taskList.appendChild(list);
  } else {
    alert("can't add empty task");
  }
}
