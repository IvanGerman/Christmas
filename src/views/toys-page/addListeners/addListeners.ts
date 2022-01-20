import { modifyFilter } from '../modifyFilter';
import { createFilteredArray } from '../createFilteredArray';
import renderToysCards from '../renderToysCards';
/* eslint-disable  import/no-cycle */
import { addAllListeners } from './addAllListeners';

function handleBtnClick(button: HTMLElement) {
  const selectedBtn = button;
  let currentData;
  let allToyCards;
  function toysCardsRerendering() {
    modifyFilter(selectedBtn!.parentElement!.className, selectedBtn.dataset.filter);
    currentData = createFilteredArray();
    allToyCards = renderToysCards(currentData);
    const cardsContainerDiv = document.querySelector('.cards-container');
    cardsContainerDiv!.innerHTML = '';
    cardsContainerDiv!.appendChild(allToyCards);
    addAllListeners();
  }
  if (button.className === 'chosenBtn') {
    button.classList.remove('chosenBtn');
    // change currentData(remove filter-value from filter), make rerendering of all toy cards
    toysCardsRerendering();
    return;
  }

  button.classList.add('chosenBtn');
  toysCardsRerendering();
}

export default () => {
  function handleFavoriteToggle(favFilter: string, favoriteValue: boolean) {
    modifyFilter(favFilter, favoriteValue);
    const currentData = createFilteredArray();
    const allToyCards = renderToysCards(currentData);
    const cardsContainerDiv = document.querySelector('.cards-container');
    cardsContainerDiv!.innerHTML = '';
    cardsContainerDiv!.appendChild(allToyCards);
  }
  // eventlistener for shape/color/size buttons
  const filtersWrapper: HTMLElement = document.querySelector('.filters') as HTMLElement;
  // let selectedBtn;
  filtersWrapper!.onclick = function (event) {
  const target: HTMLElement = event.target as HTMLElement; // где был клик?

  if (target!.tagName !== 'BUTTON') return; // не на button? тогда не интересует
    handleBtnClick(target);
  };

  // eventlistener for favorit-input
  const favToysCheckBox: HTMLElement = document.querySelector('#checkbox') as HTMLElement;
  favToysCheckBox.onchange = function () {
    const x: HTMLInputElement = this as HTMLInputElement;
    const favoriteValue = x.checked;
    const favFilter = x.className;
    handleFavoriteToggle(favFilter, favoriteValue);
  };
};
