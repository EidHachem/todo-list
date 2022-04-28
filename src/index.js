/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */

import './style/style.css';
import { addTask, createTask } from './modules/add';
import edit from './modules/edit';

const list = document.querySelector('.li');

list.addEventListener('click', edit);
