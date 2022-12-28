const addTask = document.querySelector('#addTask');
const inputTask = document.querySelector('#inputTask');
const allTasks = document.querySelector('.allTasks');
const delAll = document.querySelector('#delAll');


let tasks = [];
let todoTasks = [];


if (!localStorage.tasks) {
    tasks = []
} else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
}



function Task(task) {
    this.task = task;
}

function createTask(description, index) {
    return `
  <div class="create-task">
  <p class="task">${description.task}</p>
  <div class="action">
    <div class="btn-edit" onclick="editTask(${index})">
    Edit
    </div>
    <div class="delete" onclick="deleteTask(${index})">
      Delete
    </div>
  </div>
</div>      
    `
}

const showTasks = () => {
    allTasks.innerHTML = "";
    tasks.forEach((item, index) => {
        allTasks.innerHTML += createTask(item, index);
    });
    todoTasks = document.querySelectorAll('.create-task');

}
showTasks();

const storage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const deleteTask = index => {
    tasks.splice(index, 1);
    storage();
    showTasks();
}

function editTask(index) {
    let curTask = todoTasks[index];
    if (!curTask.classList.contains('edit')) {
        curTask.classList.add('edit');
        curTask.querySelector('.task').innerHTML = `<input type="test" value="${tasks[index].task}" class="edit_edit">`;
    } else {
        let newTask = curTask.querySelector('.task > input').value;
        tasks[index].task = newTask;
        curTask.querySelector('.task').innerText = newTask;
        curTask.classList.remove('edit');
        storage();
        showTasks();
    }
}


addTask.addEventListener("click", () => {
    tasks.push(new Task(inputTask.value));
    storage();
    showTasks();
    inputTask.value = '';
});


delAll.addEventListener("click", () => {
    tasks = [];
    storage();
    showTasks();
});
