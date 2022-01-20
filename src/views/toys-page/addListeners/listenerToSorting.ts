import { currentDataForSorting } from '../createFilteredArray';
import renderToysCards from '../renderToysCards';

function rerenderAfterSorting() {
  const allToyCards = renderToysCards(currentDataForSorting);
  const cardsContainerDiv = document.querySelector('.cards-container');
  cardsContainerDiv!.innerHTML = '';
  cardsContainerDiv!.appendChild(allToyCards);
}

export function addListenersToSelector() {
  const sortingOptionsSelector: HTMLInputElement = document.querySelector('.sorting-options') as HTMLInputElement;
  sortingOptionsSelector.onchange = function () {
    switch (sortingOptionsSelector.value) {
      case 'sort-a-z':
        // @ts-ignore
        currentDataForSorting = currentDataForSorting.sort((a, b) => a.name.localeCompare(b.name));
        rerenderAfterSorting();
        break;

      case 'sort-z-a':
        // @ts-ignore
        currentDataForSorting = currentDataForSorting.sort((a, b) => b.name.localeCompare(a.name));
        rerenderAfterSorting();
        break;

      case 'toys-amount-max':
        /* eslint-disable no-confusing-arrow, no-nested-ternary */
        // @ts-ignore
        currentDataForSorting = currentDataForSorting.sort((a, b) => +a.count !== +b.count ? +a.count < +b.count ? -1 : 1 : 0);
        rerenderAfterSorting();
        break;

      case 'toys-amount-min':
        // @ts-ignore
        currentDataForSorting = currentDataForSorting.sort((a, b) => +a.count !== +b.count ? +a.count > +b.count ? -1 : 1 : 0);
        rerenderAfterSorting();
        break;

      default:
        return 'no such option';
    }
  };
}
