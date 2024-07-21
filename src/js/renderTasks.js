import localStorageAPI from './localStorageAPI';
const listTasks = document.querySelector('#task-list');

export function renderTasks() {
  const tasks = localStorageAPI.checkStorage();
  const markup = tasks
    .map(({ taskName, taskText, id }) => {
      return `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${taskName}</h3>
        <p>${taskText}</p>
      </li>`;
    })
    .join('');
  listTasks.innerHTML = markup;
}
