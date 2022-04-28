/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */

let x = JSON.parse(localStorage.getItem('savedData'));
export let tasks = [];

if (x) {
  tasks = x;
}

export default function edit(e) {
  const item = e.target;

  if (item.classList.contains('fa-trash-can')) {
    const removeParent = item.parentElement.parentElement;
    removeParent.remove();

    const removeTaskFromArray = item.parentElement.previousElementSibling.children[0].getAttribute('name');

    tasks = tasks
      .sort((a, b) => {
        return a.index - b.index;
      })
      .filter((newTask) => {
        if (newTask.index !== +removeTaskFromArray) {
          return true;
        }
      })
      .sort((task, newTask) => {
        if (task.index + 1 === newTask.index) {
          return;
        } else {
          newTask.index = task.index + 1;
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
