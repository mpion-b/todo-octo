const popupBtn = document.getElementById("addTaskBtn");
const popupTask = document.querySelector("popup-task");

function addTaskForm() {}

let listOfTasks = [];

const Task = {
  taskName: "",
  date: undefined,
};

function addTask() {
  let newTask = Object.create(Task);
  let taskInput = document.getElementById("task-name-input");
  newTask.name = taskInput.value;
  newTask.date = new Date().toLocaleString("en-GB");
  listOfTasks.push(newTask);
  document.getElementById("task-name-input").value = "";
  toggleTaskPopup();

  // test fun
  console.log(listOfTasks);
}

function toggleTaskPopup() {
  let popupCard = document.getElementById("taskCard");
  if (popupCard.style.display === "none") {
    popupCard.style.display = "flex";
  } else {
    popupCard.style.display = "none";
  }
}
