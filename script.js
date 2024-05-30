document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');
    const tasksContainer = document.getElementById('tasks-container');

    // Fetch users
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');
                userDiv.innerHTML = `
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                    <button onclick="fetchTasks(${user.id})">Ver tareas</button>
                `;
                userContainer.appendChild(userDiv);
            });
        });

    // Fetch tasks for a specific user
    window.fetchTasks = function(userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then(response => response.json())
            .then(tasks => {
                tasksContainer.innerHTML = '';
                tasks.forEach(task => {
                    const taskDiv = document.createElement('div');
                    taskDiv.classList.add('task');
                    taskDiv.classList.add(task.completed ? 'completed' : 'not-completed');
                    taskDiv.innerHTML = `
                        <p><strong>Task ID:</strong> ${task.id}</p>
                        <p>${task.title}</p>
                    `;
                    tasksContainer.appendChild(taskDiv);
                });
            });
    }
});