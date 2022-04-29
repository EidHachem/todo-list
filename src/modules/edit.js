/* eslint-disable import/no-mutable-exports */
const x = JSON.parse(localStorage.getItem('savedData'));
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

    tasks = tasks.filter((newTask) => {
      if (newTask.index !== +removeTaskFromArray) return true;
      return false;
    });

    tasks.forEach((item, i) => {
      item.index = i + 1;
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
