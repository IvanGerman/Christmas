import data from '../../../data';
import { CreatedFilteredArray } from '../../../types/types';
import renderToysCards from '../renderToysCards';

function rerenderAfterReseting(data2: CreatedFilteredArray) {
  const allToyCards = renderToysCards(data2);
  const cardsContainerDiv = document.querySelector('.cards-container');
  cardsContainerDiv!.innerHTML = '';
  cardsContainerDiv!.appendChild(allToyCards);
}

export function addListenersToResetFiltersButton() {
  const ResetFiltersButton: HTMLElement = document.querySelector('.reset-filters') as HTMLElement;
  ResetFiltersButton.onclick = function () {
    const renderData = [...data];
    rerenderAfterReseting(renderData);
  };
}
