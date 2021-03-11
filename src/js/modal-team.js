import teamModalTpl from '../templates/team.hbs';
import footerTpl from '../templates/footer.hbs';
import team from '../js/team';
import { showSpinnerInModal, hideSpinnerInModal } from './markup';

const refs = {
  openTeam: document.querySelector('.footer__link'),
  body: document.querySelector('body'),
  team: document.querySelector('.team'),
};

refs.openTeam.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  hideSpinnerInModal();
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
  refs.team.insertAdjacentHTML('beforeend', markup);
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}
