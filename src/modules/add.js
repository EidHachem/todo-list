/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

import { tasks } from './edit';

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
