document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToDOM(task.text, task.completed);
    });
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    addTaskToDOM(taskInput.value, false);
    saveTask(taskInput.value, false);
    taskInput.value = '';
}

function addTaskToDOM(taskText, completed) {
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    if (completed) newTask.classList.add('completed');
    newTask.onclick = function() {
        newTask.classList.toggle('completed');
        updateLocalStorage();
    };
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove';
    removeButton.onclick = function() {
        taskList.removeChild(newTask);
        updateLocalStorage();
    };
    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
}

function saveTask(taskText, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskText, completed: completed });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateLocalStorage() {
    const taskList = document.getElementById('task-list');
    const tasks = [];
    taskList.querySelectorAll('li').forEach(task => {
        tasks.push({ text: task.childNodes[0].textContent, completed: task.classList.contains('completed') });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}