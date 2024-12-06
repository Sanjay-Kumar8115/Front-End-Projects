document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'deleteBtn';
            deleteBtn.addEventListener('click', function() {
                taskList.removeChild(li);
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });
});
