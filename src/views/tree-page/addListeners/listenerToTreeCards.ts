import { changeMainTree } from '../changeMainTree';

export function listenerToTreeCards() {
  const treeCardsWrapper: HTMLElement = document.querySelector('.tree-sorts') as HTMLElement;
  treeCardsWrapper.onclick = function callback(event) {
    const target: HTMLImageElement = event.target as HTMLImageElement;
    if (target.tagName === 'IMG') {
        if (typeof (target.dataset.tree) === 'string') {
        changeMainTree(target.dataset.tree);
      }
    }
  };
}
