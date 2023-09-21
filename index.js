// Define a Task class
class Task {
    constructor(name, category) {
        this.name = name;
        this.category = category;
        this.completed = false;
    }
}

// Function to add a task
function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskCategory = document.getElementById('task-category').value;

    try {
        if (!taskName) {
            throw new Error('Task name cannot be empty.');
        }

        const task = new Task(taskName, taskCategory);
        tasks.push(task);

        // Clear input fields
        document.getElementById('task-name').value = '';
        document.getElementById('task-category').value = 'personal';

        // Update the task list
        renderTaskList();
    } catch (error) {
        alert(error.message);
    } finally {
        clearErrorMessages();
    }
}

// Function to render the task list
function renderTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTaskCompletion(index));

        const taskInfo = document.createElement('div');
        taskInfo.textContent = `${task.name} - ${task.category}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-task-button';
        removeButton.addEventListener('click', () => removeTask(index));

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskInfo);
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    });
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTaskList();
}

// Function to remove a task
function removeTask(index) {
    try {
        if (index < 0 || index >= tasks.length) {
            throw new Error('Invalid task index.');
        }

        tasks.splice(index, 1);
        renderTaskList();
    } catch (error) {
        alert(error.message);
    } finally {
        clearErrorMessages();
    }
}

// Initialize an array to store tasks
const tasks = [];

// Add click event listener to the "Add Task" button
document.getElementById('add-task').addEventListener('click', addTask);

// Initial rendering of the task list
renderTaskList();
