import './sass/styles.scss';
import moviesService from './js/fetchMovies';
// import switchPage from './js/switchPages';

// switchPage();

// moviesService.fetchTrendingMovies();
// moviesService.searchMovies();
// moviesService.getFullInfo();

// import headerHomeMarkUp from "./templates/header-home.hbs";
// import headerLibraryMarkUp from "./templates/header-lib.hbs";
const refs = {
    home: document.querySelector("#home"),
    myLibrary: document.querySelector("#library"),
    headerUp: document.querySelector("#header__markup"),
};
console.log(refs.home);
const pageHome = () => {
        // const markup =  headerHomeMarkUp();
        refs.headerUp.innerHTML = "";
        refs.home.classList.add("current");
        refs.myLibrary.remove("current");
        refs.headerUp.insertAdjacentElement('beforeend', markup);
}
const library = () => {
        // const markup = headerLibraryMarkUp();
    const markup = `<div class="header__buttons">
    <button class="button button-watched" type="button">
        watched
    </button>
    <button class="button button-transparent" type="button">queue</button>
</div>`;
        refs.headerUp.innerHTML = "";
        refs.myLibrary.classList.add("current");
        refs.home.remove("current");
        refs.headerUp.insertAdjacentElement('beforeend', markup);
}
refs.home.addEventListener('click', pageHome());
refs.myLibrary.addEventListener('click', library());