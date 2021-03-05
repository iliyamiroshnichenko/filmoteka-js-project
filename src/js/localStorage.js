import refs from './refs';

function addToLibrary(movieProperties) {
  const addToWatchedBtn = refs.modal.querySelector('#add-to-watched');
  addToWatchedBtn.addEventListener('click', () =>
    updateLocalStorage(movieProperties, 'watched'),
  );
  const addToQueueBtn = refs.modal.querySelector('#add-to-queue');
  addToQueueBtn.addEventListener('click', () =>
    updateLocalStorage(movieProperties, 'queue'),
  );
}

function updateLocalStorage(value, key) {
  const arr = JSON.parse(localStorage.getItem(key)) || [];
  arr.push(value);
  localStorage.setItem(key, JSON.stringify(arr));
}

// const ls = JSON.parse(localStorage.getItem('watched'));
// console.log(ls);
// console.log(typeof ls);
// ls.forEach(({ id }) => console.log(id));

export default addToLibrary;
