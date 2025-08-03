document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage on page load
    loadTasks();

    // Function to Add a New Task
    function addTask(taskText, save = true) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Event to remove task from DOM and Local Storage
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            removeTaskFromStorage(taskText);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to Local Storage if required
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to Remove a Task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Load Tasks from Local Storage and display on the page
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Event Listener for Add Task Button Click
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        addTask(taskText);
        taskInput.value = "";
    });

    // Event Listener for Enter Key Press inside Input Field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();

            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }

            addTask(taskText);
            taskInput.value = "";
        }
    });
});
