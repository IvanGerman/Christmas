import { changeMainTreeBg } from '../changeMainTreeBg';

export function listenerToBgCards() {
  const bgCardsWrapper: HTMLElement = document.querySelector('.background-sorts') as HTMLElement;
  bgCardsWrapper.onclick = function callback(event) {
    const target: HTMLElement = event.target as HTMLElement;
    if (typeof (target.dataset.bg) === 'string') {
      changeMainTreeBg(target.dataset.bg);
    }
  };
}
