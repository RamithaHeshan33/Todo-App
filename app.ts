function createTaskElement(taskText: string): HTMLLIElement {
    const li = document.createElement('li');
    li.classList.add('task-item');

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    // Create Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', () => {
        const newText = prompt('Edit the task', taskText);
        if (newText !== null && newText.trim() !== '') {
            taskTextElement.textContent = newText.trim();
        }
    });

    // Create Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    // Append elements to list item
    li.appendChild(taskTextElement);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}

function addTask(): void {
    const taskInput = document.getElementById('todo-input') as HTMLInputElement;
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('todo-list') as HTMLUListElement;
    const taskElement = createTaskElement(taskText);
    taskList.prepend(taskElement);
    taskInput.value = '';
}

document.addEventListener('DOMContentLoaded', function (): void {
    const addTaskButton = document.getElementById('add-todo');
    if (addTaskButton) {
        addTaskButton.addEventListener('click', addTask);
    }

    //Allow adding tasks with Enter key
    const taskInput = document.getElementById('todo-input') as HTMLInputElement;
    taskInput.addEventListener('keypress', function (event: KeyboardEvent) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
