const STORAGE_KEY = 'tasks';

function checkStorage() {
  const tasks = localStorage.getItem(STORAGE_KEY);
  if (tasks) {
    return JSON.parse(tasks);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    return [];
  }
}

function addTask(task) {
  const tasks = checkStorage();
  tasks.push(task);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export default { addTask, checkStorage };
