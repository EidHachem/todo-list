import './style.css';
import { addTask, createTask } from './modules/add.js';
import edit from './modules/edit.js';

const list = document.querySelector('.li');

list.addEventListener('click', edit);

list.addEventListener('touchend', addTask);
list.addEventListener('touchend', createTask);
