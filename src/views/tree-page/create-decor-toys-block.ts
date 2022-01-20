import { CreatedFilteredArray } from '../../types/types';
import { chosenCards } from '../toys-page/addListeners/listenersToCards';

export function createDecorToysBlock(data: CreatedFilteredArray) {
  function createHTML(selectedToys: CreatedFilteredArray, decorToysBlock: string) {
    /* eslint-disable  no-param-reassign */
    decorToysBlock = selectedToys.map((toy) => {
      let toysBlock = '';
      for (let i = 0; i < Number(toy.count); i++) {
        toysBlock += `<img class="selected-toy-img" src="toys/${toy.num}.png" alt="toy" draggable="true">`;
      }
      return `<div class="single-selected-toy" data-num="${toy.num}">
      <p class="number-of-toys">${toy.count}</p>
      ${toysBlock}
      </div>`;
    }).join('');
    return decorToysBlock;
  }

  const decorToysBlock = '';
  const selectedToysContainer = document.createElement('div');
  selectedToysContainer.classList.add('selected-toys-container');
  if (chosenCards.length === 0) {
    const firstTwentyToys = data.slice(0, 20);
    selectedToysContainer.innerHTML = createHTML(firstTwentyToys, decorToysBlock);
    return selectedToysContainer;
  }
  const selectedToys: CreatedFilteredArray = [];
    for (let i = 0; i < chosenCards.length; i++) {
      selectedToys.push(data[Number(chosenCards[i]) - 1]);
    }
    selectedToysContainer.innerHTML = createHTML(selectedToys, decorToysBlock);
    return selectedToysContainer;
}
