import teamModalTpl from '../templates/team.hbs';
import footerTpl from '../templates/footer.hbs';
import team from '../js/team';

const refs = {
  teamModalBackdrop: document.querySelector('.team-backdrop'),
  openTeam: document.querySelector('.footer__link'),
  body: document.querySelector('body'),
  teamModal: document.querySelector('.js-team'),
};

refs.openTeam.addEventListener('click', onOpenModal);
// refs.teamModalBackdrop.addEventListener('click', onBackdropClick)
// renderTeamModal(data);

function onOpenModal() {
  refs.body.classList.add('show-modal');
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

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function renderTeamModal(data) {
  const markup = teamModalTpl(data);
  refs.teamModal.insertAdjacentHTML('beforeend', markup);
}
