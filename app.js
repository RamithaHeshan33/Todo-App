function createTaskElement(taskText) {
    var li = document.createElement('li');
    li.classList.add('task-item');
    var taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    // Create Edit button
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', function () {
        var newText = prompt('Edit the task', taskText);
        if (newText !== null && newText.trim() !== '') {
            taskTextElement.textContent = newText.trim();
        }
    });
    // Create Delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function () {
        li.remove();
    });
    // Append elements to list item
    li.appendChild(taskTextElement);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    return li;
}
function addTask() {
    var taskInput = document.getElementById('todo-input');
    var taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    var taskList = document.getElementById('todo-list');
    var taskElement = createTaskElement(taskText);
    taskList.prepend(taskElement);
    taskInput.value = '';
}
document.addEventListener('DOMContentLoaded', function () {
    var addTaskButton = document.getElementById('add-todo');
    if (addTaskButton) {
        addTaskButton.addEventListener('click', addTask);
    }
    //Allow adding tasks with Enter key
    var taskInput = document.getElementById('todo-input');
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
