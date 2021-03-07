import './sass/styles.scss';
import moviesService from './js/fetchMovies';
import switchPage from './js/switchPages';
import addCardTpl from './js/markup';
import modalTpl from './templates/modal.hbs';
import './js/modal';
import getItems from './js/getItems';
import pagination from './js/pagination';
import refs from './js/refs';
import theme from './js/theme';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const searchQuery = form.elements.query.value;
  const trimSearchQuery = searchQuery.trim();
  // debugger
  if (!trimSearchQuery) {
    refs.error.classList.remove('visually-hidden');
    return;
  }
  else {
    refs.error.classList.add('visually-hidden');
    refs.filmsList.innerHTML = '';
    pagination.paginationSearchMovies(searchQuery);
  }
  form.reset();
});

// moviesService.searchMovies();
// moviesService.getFullInfo();
// moviesService.getFullInfo().;
