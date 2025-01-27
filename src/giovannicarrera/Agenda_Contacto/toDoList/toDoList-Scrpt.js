const todoList = document.getElementById('todo-list');
const inputTar = document.getElementById('tarea-input');
const camButton = document.getElementById('cam-button');

let editarTarea = null;


function save() {
    const tasks = [];
    document.querySelectorAll('.todo-item').forEach(item => {
        const text = item.querySelector('label').textContent;
        const isChecked = item.querySelector('input[type="checkbox"]').checked;
        tasks.push({ text, isChecked });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function load() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const todoItem = create(task.text, task.isChecked);
        todoList.appendChild(todoItem);
    });
}


function create(taskText, isChecked = false) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    todoItem.innerHTML = `
        <input type="checkbox" ${isChecked ? 'checked' : ''}>
        <label>${taskText}</label>
        <button class="delete-button">Eliminar</button>
    `;

    const checkbox = todoItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            todoItem.classList.add('checked');
            inputTar.value = todoItem.querySelector('label').textContent; 
            camButton.textContent = 'Editar';  
            editarTarea = todoItem;  
            deleteButton.style.display = 'block'; 
        } else {
            todoItem.classList.remove('checked');
            inputTar.value = ''; 
            camButton.textContent = 'Agregar'; 
            editarTarea = null; 
            deleteButton.style.display = 'none';
        }
        save();
    });

    const deleteButton = todoItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(todoItem);
        save();
    });

    return todoItem;
}

function addOrEditTask() {
    const inputTarea = inputTar.value.trim();

    if (inputTarea === '') return;

    if (editarTarea) {
       
        editarTarea.querySelector('label').textContent = inputTarea;
        camButton.textContent = 'Agregar';  
        const checkbox = editarTarea.querySelector('input[type="checkbox"]');
        checkbox.checked = false;
        const deleteButton = editarTarea.querySelector('.delete-button');
        deleteButton.style.display = 'none';
        editarTarea = null; 
        
    } else {
        const todoItem = create(inputTarea);
        todoList.appendChild(todoItem);
    }

    inputTar.value = '';
    save();
}



camButton.addEventListener('click', addOrEditTask);

inputTar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addOrEditTask();
});


load();
