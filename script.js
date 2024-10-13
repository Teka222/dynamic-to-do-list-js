document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

   // Function to add a new task to the list
function addTask(taskText) {
    // Create a new list item (li) for the task
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Add a class to the list item for styling (if needed)
    listItem.classList.add("task-item");

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    // Add the class for the remove button styling
    removeButton.classList.add("remove-btn");

    // Set the remove button functionality to delete the task
    removeButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the new list item to the task list (ul)
    taskList.appendChild(listItem);
}
