import './style/style.css';

const list = document.querySelector('.todo-list');

const tasks = [
  {
    description: 'Read a new article',
    completed: false,
    index: 3,
  },
  {
    description: 'Watch a movie',
    completed: true,
    index: 1,
  },
  {
    description: 'Finish todo list project',
    completed: false,
    index: 2,
  },
];

const addTask = tasks
  .sort((task1, task2) => {
    return task1.index - task2.index;
  })
  .map((task) => {
    const listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.innerHTML = `
  <li><input type="checkbox" name="${task.index}" id="${task.index}">
  <label for="${task.index}">${task.description}</label><br> </li>`;
  });
