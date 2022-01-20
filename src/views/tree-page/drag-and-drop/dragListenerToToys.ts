import { hangToyOnTree } from './hangToyOnTree';

export function dragListenerToToys() {
  const selectedToysContainer: HTMLElement = document.querySelector('.selected-toys-container') as HTMLElement;

  selectedToysContainer.ondragstart = function callback(event) {
    const currentToy: HTMLImageElement = event.target as HTMLImageElement;
    if (currentToy.tagName === 'IMG') {
      hangToyOnTree(currentToy);
    }
  };
}
