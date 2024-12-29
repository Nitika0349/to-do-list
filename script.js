// Function to add tasks to the To-Do List
function addTodo() {
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    const message = document.getElementById('completion-message');
    const date = new Date().toLocaleString();

    if (input.value.trim()) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="bullet-point">&#8226;</span> 
            ${input.value} 
            <span class="timestamp">${date}</span>
            <button class="remove-btn" onclick="removeTodo(this)">Remove</button>`;
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            updateTaskCounts();
        });
        list.appendChild(li);
        input.value = ''; // Clear input field
        message.textContent = ''; // Clear the congratulations message if new tasks are added
        updateTaskCounts(); // Update counts when a new task is added
    } else {
        alert('Please enter a task!');
    }
}

// Function to remove tasks from the To-Do List
function removeTodo(button) {
    const li = button.closest('li');
    li.remove(); // Remove the task
    updateTaskCounts(); // Update counts when a task is removed
}

// Function to update the counts of total and completed tasks
function updateTaskCounts() {
    const totalTasks = document.querySelectorAll('#todo-list li').length;
    const completedTasks = document.querySelectorAll('#todo-list li.completed').length;
    const message = document.getElementById('completion-message');

    document.getElementById('total-tasks').textContent = totalTasks;
    document.getElementById('completed-tasks').textContent = completedTasks;

    // Display a congratulations message if all tasks are completed
    if (totalTasks > 0 && totalTasks === completedTasks) {
        message.textContent = '🎉 Congratulations! You completed all tasks! 🎉';
    } else {
        message.textContent = ''; // Clear the message if tasks are not fully completed
    }
}
