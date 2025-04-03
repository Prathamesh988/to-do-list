document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const priority = document.getElementById('priority').value;

    
    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item';

    if (priority === 'high') {
        taskItem.classList.add('high-priority');
    } else if (priority === 'medium') {
        taskItem.classList.add('medium-priority');
    } else if (priority === 'low') {
        taskItem.classList.add('low-priority');
    }

    taskItem.textContent = `${taskName} - Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}`;

    // Append to list
    const todoList = document.getElementById('todoList');
    todoList.appendChild(taskItem);

    // Clear form inputs
    document.getElementById('taskName').value = '';
    document.getElementById('priority').value = 'high';
});