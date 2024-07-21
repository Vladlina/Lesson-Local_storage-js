/**
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Delete</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 */

// 1. Функція createTask, яка буде забирати дані та створювати 1 task.

import localStorageAPI from './js/localStorageAPI';
import { renderTasks } from './js/renderTasks';

localStorageAPI.checkStorage();
renderTasks();

const form = document.querySelector('#task-form');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();
  localStorageAPI.addTask(createTask(e));
  renderTasks();
}

function createTask(e) {
  const taskName = e.target.elements.taskName.value.trim();
  const taskText = e.target.elements.taskText.value.trim();
  const newTask = {
    taskName,
    taskText,
    id: Date.now(),
  };
  return newTask;
}
