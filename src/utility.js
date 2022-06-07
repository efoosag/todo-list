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
