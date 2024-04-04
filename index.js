const inputBox = document.getElementById("input-box");
const addedTasks = document.getElementById("added-tasks");
let addTask = () => {
  if (inputBox.value === "") {
    alert("You must write Something..!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    addedTasks.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};
addedTasks.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", addedTasks.innerHTML);
};
const fetchTasks = () => {
  addedTasks.innerHTML = localStorage.getItem("data");
};
fetchTasks();
