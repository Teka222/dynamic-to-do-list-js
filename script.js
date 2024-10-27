document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task to the list
    function addTask(taskText) {
        // Create a new list item (li) for the task
        const listItem = document.createElement("li");
        listItem.classList.add("task-item");  // Add class for styling
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");  // Add class for styling

        // Set the remove button functionality to delete the task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the new list item to the task list (ul)
        taskList.appendChild(listItem);
    }

    // Function to handle adding a task
    function handleAddTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the input is not empty
        if (taskText !== "") {
            addTask(taskText);  // Add the task
            taskInput.value = "";  // Clear the input field
        } else {
            alert("Please enter a task.");
        }
    }

    // Event listener for the 'Add Task' button click
    addButton.addEventListener("click", handleAddTask);

    // Event listener for adding task with 'Enter' key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleAddTask();  // Add the task when 'Enter' is pressed
        }
    });
});
