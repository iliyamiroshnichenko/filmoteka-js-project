import teamModalTpl from '../templates/team.hbs';
import footerTpl from '../templates/footer.hbs';
import team from '../js/team';

const refs = {
    openTeam: document.querySelector('.footer__link'),
    body: document.querySelector('body'),
    list: document.querySelector('.team-list') 
}

refs.openTeam.addEventListener('click', onOpenModal);

function onOpenModal(event) { 
    refs.body.classList.add('show-modal');
    renderTeamModal(team);
    window.addEventListener('keydown', onKeyPress);
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function onCloseModal() {
  refs.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onKeyPress);
}


function renderTeamModal(data) {
    const markup = teamModalTpl(team);
    refs.list.insertAdjacentHTML('beforeend', markup)
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}
