import getGenresName from './getGenresName';

function getItems(results) {
  const items = results.map(
    ({ title, id, poster_path, genre_ids, release_date, vote_average }) => {
      const year = release_date.slice(0, 4);
      const rating = String(vote_average).padEnd(3, '.0');
      const genresNames = getGenresName(genre_ids);
      const properties = { id, poster_path, genresNames, year, rating, title };
      return properties;
    },
  );
  return items;
}
export default getItems;
