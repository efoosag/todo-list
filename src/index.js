import * as tk from './status.js';
import './style.css';

const loadTask = document.querySelector('.todo-list');
const form = document.querySelector('.todo-form');
const clearList = document.querySelector('.clear');

let taskIndex = 0;
let taskDescription = '';
const taskCompleted = '';

const loadListElement = () => {
  const li = document.createElement('li');
  li.classList.add(
    'list-group-item',
    'justify-content-between',
    'd-flex',
    'align-items-center',
    // eslint-disable-next-line comma-dangle
    'task'
  );
  li.innerHTML = `<div class="form-check">
  <input class="checkbox" type="checkbox" ${taskCompleted}/>
  <input class="desc" type="text" value= "${taskDescription}" id="${taskIndex}"/>
 
</div>`;

  loadTask.append(li);
};

const displayBook = () => {
  const tasks = tk.getLocalTasks();
  tasks.forEach((task) => {
    taskDescription = task.desc;
    taskIndex = task.id;

    loadListElement();
  });
};

form.addEventListener('submit', (e) => {
  const addDesc = document.querySelector('.todo-input').value;
  e.preventDefault();
  tk.addLocalTask(addDesc);
});

displayBook();

const checkBox = document.querySelectorAll('.checkbox');
checkBox.forEach((item) => {
  item.addEventListener('click', () => {
    const tasks = tk.getLocalTasks();
    tasks.forEach((elem) => {
      if (elem.id === parseInt(item.nextElementSibling.id, 10)) {
        if (elem.completed === false) {
          item.nextElementSibling.classList.add('completed');
          elem.completed = true;
        } else {
          item.nextElementSibling.classList.remove('completed');
          elem.completed = false;
        }
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
});

const reLoad = () => {
  const tasks = tk.getLocalTasks();
  tasks.forEach((task) => {
    task.completed = false;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
};
reLoad();

clearList.addEventListener('click', () => {
  let tasks = tk.getLocalTasks();
  tasks = tasks.filter((elem) => elem.completed === false);
  console.log(tasks);
  window.location.reload();

  localStorage.setItem('tasks', JSON.stringify(tasks));
});

const desc = document.querySelectorAll('.desc');
desc.forEach((description) => {
  description.addEventListener('change', (e) => {
    const tasks = tk.getLocalTasks();
    console.log(tasks);
    tasks.forEach((item) => {
      console.log(item.id, e.target.id);
      if (item.id === parseInt(e.target.id, 10)) {
        item.desc = description.value;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    console.log('yes');
  });
});
