import refs from './refs';

function addToLibrary(movieProperties) {
  console.log(movieProperties);
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
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i]["title"] === value.title) {
      return;
    }
  }
  arr.push(value);
  localStorage.setItem(key, JSON.stringify(arr));
}
export default addToLibrary;
