import pagination from 'paginationjs/dist/pagination.js';
import { addCardTpl, cleanMarkup, showSpinner, hideSpinner } from './markup';
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
        console.log(response);
        return Number(`${response.total_pages}0`);
      },

      hideWhenLessThanOnePage: true,

      ajax: {
        beforeSend: function () {
          cleanMarkup();
          showSpinner();
        },
      },

      callback: function (data, pagination) {
        const items = getItems(data);
        console.log(items);

        hideSpinner();
        addCardTpl(items);
      },
    });
  },

  paginationSearchMovies(searchQuery) {
    $('#pagination-container').pagination({
      dataSource: `${searchMovieUrl}&query=${searchQuery}`,
      locator: 'results',
      alias: {
        pageNumber: 'page',
      },

      // надо пофиксить костыль))
      totalNumberLocator: function (response) {
        console.log(response);
        return Number(`${response.total_pages}0`);
      },

      hideWhenLessThanOnePage: true,

      ajax: {
        beforeSend: function () {
          cleanMarkup();
          showSpinner();
        },
      },

      callback: function (data, pagination) {
        const items = getItems(data);
        console.log(items);
        hideSpinner();
        addCardTpl(items);
      },
    });
  },
};
