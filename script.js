// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to Add a New Task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add click event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append remove button to task <li>
        listItem.appendChild(removeButton);

        // Append task <li> to the task list <ul>
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Event Listener for Add Task Button Click
    addButton.addEventListener('click', addTask);

    // Event Listener for Enter Key Press inside Input Field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
