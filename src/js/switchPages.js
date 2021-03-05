import pagination from './pagination';
import refs from '../js/refs';
window.onload = () => {
  refs.libraryPage.classList.add('visually-hidden');
  refs.home.classList.add('current');
  refs.error.classList.add('visually-hidden');
  pagination.paginationTrendingMovies();
};

refs.myLibrary.addEventListener('click', libraryPage);
refs.home.addEventListener('click', homePage);
refs.logo.addEventListener('click', homePage);

function homePage(event) {
  refs.libraryPage.classList.add('visually-hidden');
  refs.homepage.classList.remove('visually-hidden');
  refs.home.classList.add('current');
  refs.myLibrary.classList.remove('current');
  pagination.paginationTrendingMovies();
  refs.watched.removeEventListener('click', watchedList);
  refs.queue.removeEventListener('click', queueList);
  refs.header.classList.remove("library");
}
function libraryPage(event) {
  refs.homepage.classList.add('visually-hidden');
  refs.libraryPage.classList.remove('visually-hidden');
  refs.header.classList.add("library");
  refs.myLibrary.classList.add('current');
  refs.home.classList.remove('current');
  refs.filmsList.innerHTML = '';
  refs.watched.addEventListener('click', watchedList);
  refs.queue.addEventListener('click', queueList);
}
function watchedList(event) {
  refs.watched.classList.add('button--watched');
  refs.queue.classList.remove('button--watched');
}
function queueList(event) {
  refs.queue.classList.add('button--watched');
  refs.watched.classList.remove('button--watched');
}
