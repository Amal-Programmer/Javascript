const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const ClearAllTasksdBtn = document.getElementById("ClearAllTasksdBtn");
let tasks = [];
function addTask() {
    debugger;
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});//task object ////Addition of this new task object using the push array method to the tasks array, representing the ToDo List.
        taskInput.value = "";// clearing the input for the next task entry.
        displayTasks();
    }
}
function displayTasks() {
    debugger;
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        /*${task.completed ? "checked" : ""}:This determines whether the checkbox should be checked.
        If task.completed is true, it includes the checked attribute in the HTML, which makes the checkbox pre-checked.
        If task.completed is false or undefined, it leaves the attribute empty, so the checkbox is not checked.*/
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        console.log("task.completed: "+ task.completed);
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}
function toggleTask(index) {
    //It helps by selecting the checkbox regardless. If selected, then it will mark that particular task as completed.
    debugger;
    console.log(" tasks[index].completed: "+  tasks[index].completed);
    tasks[index].completed = !tasks[index].completed;
    console.log(" tasks[index].completed: "+  tasks[index].completed);
    displayTasks();
}
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}
function ClearAllTasks(){
    taskList.innerHTML = "";
    tasks=[];
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
ClearAllTasksdBtn.addEventListener("click", ClearAllTasks);


