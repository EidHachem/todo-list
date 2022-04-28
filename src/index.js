/* eslint-disable no-unused-vars */

import './style/style.css';
import { addTask, createTask } from './modules/add';
import edit from './modules/edit';

const list = document.querySelector('.li');

list.addEventListener('click', edit);
