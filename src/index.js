/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */

import './style/style.css';

const list = document.querySelector('.li');
const form = document.querySelector('form');

let x = JSON.parse(localStorage.getItem('savedData'));

let tasks = [];

if (x) {
  tasks = x;
}

console.log(tasks);

const addTask = (description, completed, index) => {
  tasks.push({ description, completed, index });
  localStorage.setItem('savedData', JSON.stringify(tasks));
  return { description, completed, index };
};

function createTask({ description, completed, index }) {
  const listItem = document.createElement('li');
  list.appendChild(listItem);

  listItem.innerHTML = `
  <div class="input-label"><input type="checkbox" name="${index}" id="${index}" class="id">
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

function edit(e) {
  const item = e.target;

  if (item.classList.contains('fa-trash-can')) {
    const removeParent = item.parentElement.parentElement;
    removeParent.remove();

    const removeTaskFromArray =
      item.parentElement.previousElementSibling.children[0].getAttribute(
        'name'
      );

    tasks = tasks
      .filter((newTask) => {
        if (newTask.index !== +removeTaskFromArray) {
          return true;
        }
      })
      .sort((task, newTask) => {
        if (task.index !== newTask.index + 1) {
          newTask.index -= 1;
          return task.index - newTask.index;
        }
      });

    localStorage.setItem('savedData', JSON.stringify(tasks));
  }

  if (item.classList.contains('fa-ellipsis-vertical')) {
    item.nextElementSibling.style.display = 'block';
    item.style.display = 'none';
  }

  if (item.classList.contains('id')) {
    item.nextElementSibling.classList.toggle('line-through');
  }

  if (item.classList.contains('user-input')) {
    item.removeAttribute('readonly');
  }
}

list.addEventListener('click', edit);
