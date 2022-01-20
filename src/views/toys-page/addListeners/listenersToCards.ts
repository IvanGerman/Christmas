const selectedToysCounter: HTMLElement = document.querySelector('.count-selected-toys') as HTMLElement;

export const chosenCards: string[] = [];

function setCounterNumber(number: string, id: string, mode: string, favIndicator: NodeListOf<HTMLElement>) {
  if (mode === 'add') {
    if (chosenCards.length >= 20) {
      alert('Извините, все слоты заполнены');
      return;
    }
    chosenCards.push(number);
    selectedToysCounter!.innerHTML = String(chosenCards.length);
    favIndicator[Number(id)].style.background = '#CBB77A';
    favIndicator[Number(id)].style.setProperty('--color', '#CBB77A');
    return;
  }
  if (mode === 'remove') {
    const index = chosenCards.indexOf(number);
    if (index > -1) {
      chosenCards.splice(index, 1);
    }
    selectedToysCounter.innerHTML = String(chosenCards.length);
    favIndicator[Number(id)].style.background = '#24c5db';
    favIndicator[Number(id)].style.setProperty('--color', '#24c5db');
  }
}

export function addListenersToCards(): void {
  const cardsWrapper: HTMLElement = document.querySelector('.cards-wrapper') as HTMLElement;
  const favIndicator: NodeListOf<HTMLElement> = document.querySelectorAll('.fav-indicator') as NodeListOf<HTMLElement>;

  cardsWrapper!.onclick = function (event) {
    const target = event.target as HTMLElement;
    if (target!.className === 'single-toy-card') {
      if (target.dataset.num !== undefined) {
        if (!chosenCards.includes(target.dataset.num)) {
          setCounterNumber(target!.dataset.num, target!.id, 'add', favIndicator);
          return;
        }
        setCounterNumber(target!.dataset.num, target!.id, 'remove', favIndicator);
        return;
      }
    }
    if (target!.parentElement!.className === 'single-toy-card') {
      if (target!.parentElement!.dataset.num !== undefined) {
        if (!chosenCards.includes(target!.parentElement!.dataset.num)) {
        setCounterNumber(target!.parentElement!.dataset.num, target!.parentElement!.id, 'add', favIndicator);
        return;
        }
        setCounterNumber(target!.parentElement!.dataset.num, target!.parentElement!.id, 'remove', favIndicator);
          return;
      }
    }

    if (target!.parentElement!.parentElement!.className === 'single-toy-card') {
      if (target!.parentElement!.parentElement!.dataset.num !== undefined) {
        if (!chosenCards.includes(target!.parentElement!.parentElement!.dataset.num)) {
          setCounterNumber(target!.parentElement!.parentElement!.dataset.num, target!.parentElement!.parentElement!.id, 'add', favIndicator);
          return;
        }
        setCounterNumber(target!.parentElement!.parentElement!.dataset.num, target!.parentElement!.parentElement!.id, 'remove', favIndicator);
      }
    }
  };
}
