import modalTpl from '../templates/modal.hbs';
import refs from '../js/refs'
import apiModalInfo from './fetchMovies';

refs.openModal.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdropClick.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onPressEscape);


function openModal() {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    refs.body.classList.add('show-modal');
    apiModalInfo.getFullInfo()
        .then(renderModalCard)
        .catch(error => console.log(error));
    
}

function onBackdropClick(e) { 
    if (e.target === e.currentTarget) { 
        onCloseModal();
    }
}
   
function onCloseModal() { 
    refs.body.classList.remove('show-modal');
}

function onPressEscape(event) {
    if (event.code === "Escape") {
        onCloseModal();
    }
}
 function renderModalCard(data) {
    const markup = modalTpl(data);
    refs.backdropClick.insertAdjacentHTML('beforeend', markup);
}



