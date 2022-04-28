import { tasks } from './edit.js';

const list = document.querySelector('.li');
const form = document.querySelector('form');

export const addTask = (description, completed, index) => {
  tasks.push({ description, completed, index });
  localStorage.setItem('savedData', JSON.stringify(tasks));
  return { description, completed, index };
};

export function createTask({ description, completed, index }) {
  const listItem = document.createElement('li');
  list.appendChild(listItem);

  listItem.innerHTML = `
  <div class="input-label"><input type="checkbox" name="${index}" id="${index}" class="id ${completed}">
  <textarea class="user-input" for="${index}" readonly>${description}</textarea></div>
  <div class="icon"><i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-trash-can"></i></div><br>`;
}

tasks.forEach(createTask);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskValue = document.querySelector('#add');

  if (taskValue.value === '') {
    return false;
  }
  const description = taskValue.value;
  const completed = false;
  const index = tasks.length + 1;

  const newTask = addTask(description, completed, index);

  createTask(newTask);

  taskValue.value = '';
});

const updateText = (index, newText) => {
  tasks.forEach((task) => {
    if (task.index === +index) {
      task.description = newText;
    }
  });
  // for (const task of tasks) {
  //   if (task.index === +index) {
  //     task.description = newText;
  //   }
  // }
  localStorage.setItem('savedData', JSON.stringify(tasks));
};

const textareaSelector = document.querySelectorAll('.user-input');

textareaSelector.forEach((textarea) => {
  textarea.addEventListener('focusout', (e) => {
    if (e.target.value) {
      updateText(e.target.previousElementSibling.id, e.target.value);
    }
  });
});
