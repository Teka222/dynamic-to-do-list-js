document.addEventListener("DOMContentLoaded", function () {
    // Select the necessary DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add tasks without saving to avoid duplication
    }

    // Function to add a new task to the list
    function addTask(taskText, save = true) {
        // Task creation logic remains the same
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Create a remove button for each task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Add event listener to remove the task when the button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            removeTaskFromLocalStorage(taskText);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the new task to the task list (ul)
        taskList.appendChild(listItem);

        // Save the task to Local Storage if it's a new task (not loaded from storage)
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Event listener for the 'Add Task' button
    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ""; // Clear the input field
        } else {
            alert("Please enter a task.");
        }
    });

    // Allow tasks to be added by pressing the "Enter" key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = ""; // Clear the input field
            }
        }
    });

    // Load tasks from Local Storage when the page is loaded
    loadTasks();
});
