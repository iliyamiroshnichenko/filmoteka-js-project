import './sass/styles.scss';
import moviesService from './js/fetchMovies';
// import switchPage from './js/switchPages';
// switchPage();
import addCardTpl from './js/markup';
import modalTpl from './templates/modal.hbs';
import './js/modal'
import getItems from './js/getItems';
import pagination from './js/pagination';

pagination.paginationTrendingMovies();
// moviesService.searchMovies();
// moviesService.getFullInfo();
// moviesService.getFullInfo().;

// import headerHomeMarkUp from "./templates/header-home.hbs";
// import headerLibraryMarkUp from "./templates/header-lib.hbs";
// const refs = {
//     home: document.querySelector("#home"),
//     myLibrary: document.querySelector("#library"),
//     headerUp: document.querySelector(".header__markup")
// };
// // console.log(refs.home);
// const pageHome = () => {
//     // // const markup =  headerHomeMarkUp();
//     // const markup1 = document.createElement('div');
//     // markup1.innerHTML = ;
//     refs.headerUp.innerHTML = "";
//     refs.home.classList.add("current");
//     refs.myLibrary.classList.remove("current");
//     refs.headerUp.insertAdjacentElement("beforeend", `<div class="header__form"><form class="search-form" id="search-form"><div class="form__group"><input class="form-control" type="text" name="query" autocomplete="off" placeholder="Поиск фильмов" /><i class="material-icons search__icon">search</i></div></form></div><div class="error">
//     <p>
//         Search result not successful. Enter the correct movie name and
//     </p>
// </div>`);
// };
// // pageHome();
// const library = () => {
//     // const markup = headerLibraryMarkUp();
//     // const markup = (;
//     refs.headerUp.innerHTML = "";
//     refs.myLibrary.classList.add("current");
//     refs.home.classList.remove("current");
// //     refs.headerUp.insertAdjacentElement('beforeend', (`<div class="header__buttons">
// //     <button class="button button-watched" type="button">
// //         watched
// //     </button>
// //     <button class="button button-transparent" type="button">queue</button>
// // </div>`));
// };
// // library();
// refs.home.addEventListener('event', pageHome());
// refs.myLibrary.addEventListener('event', library());
