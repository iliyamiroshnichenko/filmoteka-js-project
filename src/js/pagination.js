import pagination from 'paginationjs/dist/pagination.js';
import addCardTpl from './markup';
import getItems from './getItems';

const basicUrl = 'https://api.themoviedb.org/3/';
const key = '8e2d6c50ec8673fce37d0988f16fea97';
const trendingMovieUrl = `${basicUrl}trending/movie/day?api_key=${key}&per_page=12`;
const searchMovieUrl = `${basicUrl}search/movie/?api_key=${key}`;

export default {
  paginationTrendingMovies() {
    $('#pagination-container').pagination({
      dataSource: trendingMovieUrl,
      locator: 'results',
      alias: {
        pageNumber: 'page',
      },

      totalNumberLocator: function (response) {
        // you can return totalNumber by analyzing response content
        return Math.floor(Math.random() * (1000 - 100)) + 100;
      },

      callback: function (data, pagination) {
        const items = getItems(data);
        addCardTpl(items);
      },
    });
  },
};
