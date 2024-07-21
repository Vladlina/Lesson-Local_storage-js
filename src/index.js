/**
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Delete</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 */

// 1. Функція createTask, яка буде забирати дані та створювати 1 task.
const form = document.querySelector('#task-form');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();

  const taskName = e.target.elements.taskName.value.trim();
  const taskText = e.target.elements.taskText.value.trim();
  const newTask = {
    taskName,
    taskText,
    id: Date.now(),
  };

  console.log(newTask);
}
