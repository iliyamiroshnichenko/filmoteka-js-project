import headerHomeMarkUp from "../templates/header-home.hbs";
import headerLibraryMarkUp from "../templates/header-lib.hbs";
const refs = {
    home: document.querySelector("#home"),
    myLibrary: document.querySelector("#library"),
    headerUp: document.querySelector("#header__markup"),
};
const pageHome = () => {
        const markup =  headerHomeMarkUp();
        refs.headerUp.innerHTML = "";
        refs.home.classList.add("current");
        refs.myLibrary.remove("current");
        refs.headerUp.insertAdjacentElement('beforeend', markup);
}
const library = () => {
        const markup = headerLibraryMarkUp();
        refs.headerUp.innerHTML = "";
        refs.myLibrary.classList.add("current");
        refs.home.remove("current");
        refs.headerUp.insertAdjacentElement('beforeend', markup);
}
refs.home.addEventListener('click', pageHome());
refs.myLibrary.addEventListener('click', library());