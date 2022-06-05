export function getLocalTasks() {
  let tasks;
  if (window.localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(window.localStorage.getItem('tasks'));
  }
  return tasks;
}

export function addLocalTask(task) {
  const tasks = getLocalTasks();
  const id = tasks.length + 1;
  const desc = task;
  const completed = false;
  tasks.push({ id, desc, completed });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
}

export function removeLocalTask(tasks) {
  tasks = tasks.filter((elem) => elem.completed === false);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// old code

export function saveLocal(list) {
  window.localStorage.setItem('localTasks', JSON.stringify(list));
}

export function status(elem, list) {
  list.forEach((task) => {
    if (task === elem) {
      task.isCompleted = !task.isCompleted;
    }
  });
  saveLocal(list);
}

export function add(list) {
  list.push({
    description: document.querySelector('#newTask').value,
    isCompleted: false,
    index: list.length,
  });
  document.querySelector('#newTask').value = '';
  saveLocal(list);
}

export function updateIndex(list) {
  let i = 0;
  list.forEach((elem) => {
    elem.index = i;
    i += 1;
  });
}

export function removeDone(list) {
  list = list.filter((elem) => elem.isCompleted === false);
  updateIndex(list);
  saveLocal(list);
}
