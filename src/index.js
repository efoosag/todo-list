import * as tk from './status.js';
import './style.css';

const loadTask = document.querySelector('.todo-list');
const form = document.querySelector('.todo-form');

let taskIndex = 0;
let taskDescription = '';
let taskCompleted = '';

const displayBook = () => {
  const tasks = tk.getLocalTasks();
  tasks.forEach((task) => {
    taskDescription = task.desc;
    taskIndex = task.id;
    const li = tk.loadListElement(taskIndex, taskDescription);
    console.log(li.innerHTML);
    loadTask.append(li);
  });
};

form.addEventListener('submit', (e) => {
  const addDesc = document.querySelector('.todo-input').value;
  e.preventDefault();

  tk.addLocalTask(addDesc);
});

displayBook();
