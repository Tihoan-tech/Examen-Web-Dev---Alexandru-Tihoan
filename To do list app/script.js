
document.addEventListener('DOMContentLoaded', function () { 
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function () {
        addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            taskItem.addEventListener('click', function () {
                this.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete-btn');
                deleteButton.addEventListener('click', function () {
                taskList.removeChild(taskItem);
});

taskItem.appendChild(deleteButton);

         
            taskList.appendChild(taskItem);

       
            taskInput.value = '';
        }
    }
});


