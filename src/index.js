import './sass/styles.scss';
import moviesService from './js/fetchMovies';
import addCardTpl from './js/markup';

moviesService.fetchTrendingMovies().then(results => {
  console.log(results);
  const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ];
  const items = results.map(
    ({ title, id, poster_path, genre_ids, release_date, vote_average }) => {
      const year = release_date.slice(0, 4);
      const rating = String(vote_average).padEnd(3, '.0');
      let genresNames = genre_ids.map(backebdId =>
        genres.find(({ id }) => id === backebdId),
      );
      genresNames = [...genresNames.map(({ name }) => name)];
      console.log(genresNames);
      const properties = { id, poster_path, genresNames, year, rating, title };
      return properties;
    },
  );
  console.log(items);
  addCardTpl(items);
});

// moviesService.searchMovies();
// moviesService.getFullInfo();
