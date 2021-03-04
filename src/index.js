import './sass/styles.scss';
import moviesService from './js/fetchMovies';
import addCardTpl from './js/markup';
import modalTpl from './templates/modal.hbs';
import './js/modal'
// import modalTpl from './templates/modal.hbs'

moviesService.fetchTrendingMovies().then(results => {
  console.log(results);
  const items = results.map(
    ({ title, id, poster_path, genre_ids, release_date, vote_average }) => {
      const year = release_date.slice(0, 4);
      const rating = String(vote_average).padEnd(3, '.0');
      const properties = { id, poster_path, genre_ids, year, rating, title };
      return properties;
    },
  );
  console.log(items);
  addCardTpl(items);
});

//   .then(results => {
//   console.log(results);
//   addCardTpl(results);
// });
// moviesService.searchMovies();

// moviesService.getFullInfo().;


