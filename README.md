# task-app
 This code defines a Task class and includes functions for adding, rendering, toggling completion, and removing tasks. Here's a brief overview:

The Task class represents a task with properties such as name, category, and completed.

The addTask function adds a task to the tasks array based on user input. It performs error handling to ensure that a task name is not empty.

The renderTaskList function updates the task list in the HTML document based on the contents of the tasks array.

The toggleTaskCompletion function toggles the completion status of a task when the user checks or unchecks a checkbox.

The removeTask function removes a task from the tasks array and updates the task list.

An array called tasks is initialized to store tasks.

Event listeners are added to the "Add Task" button to trigger the addTask function when clicked.

The initial rendering of the task list is performed using the renderTaskList function.

Overall, this code provides a basic structure for a task management application, allowing users to add, view, complete, and remove tasks.
