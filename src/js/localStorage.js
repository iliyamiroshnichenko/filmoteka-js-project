import refs from './refs';

function addToLibrary(movieProperties) {
  const addToWatchedBtn = refs.modal.querySelector('#add-to-watched');
  addToWatchedBtn.addEventListener('click', () => console.log(movieProperties));
  const addToQueueBtn = refs.modal.querySelector('#add-to-queue');
  addToQueueBtn.addEventListener('click', () => console.log(movieProperties));
}

export default addToLibrary;
