import './sass/styles.scss';
import moviesService from './js/fetchMovies';
import addCardTpl from './js/markup';
import getItems from './js/getItems';
import pagination from './js/pagination';

pagination.paginationTrendingMovies();

// moviesService.fetchTrendingMovies().then(results => {
//   console.log(results);

//   const items = getItems(results);
//   console.log(items);

//   addCardTpl(items);
// });

// moviesService.searchMovies();
// moviesService.getFullInfo();
