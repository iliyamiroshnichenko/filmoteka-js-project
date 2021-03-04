import cardTpl from '../templates/card.hbs';
import refs from './refs';

function addCardTpl(items) {
  const markup = cardTpl(items);
  refs.filmsList.insertAdjacentHTML('beforeend', markup);
}

export default addCardTpl;
