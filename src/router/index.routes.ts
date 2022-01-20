import ToysPageBasis from '../views/toys-page/toysPageBasis';
import StartPage from '../views/start-page/start-page';
import TreePage from '../views/tree-page/tree-page';
import renderToysCards from '../views/toys-page/renderToysCards';
import { addAllListeners } from '../views/toys-page/addListeners/addAllListeners';
import data from '../data';
import nouislider from '../views/toys-page/nouislider';
import { createDecorToysBlock } from '../views/tree-page/create-decor-toys-block';
import { listenerToTreeCards } from '../views/tree-page/addListeners/listenerToTreeCards';
import { listenerToBgCards } from '../views/tree-page/addListeners/listenerToBgCards';
import { addListenerToAudio } from '../views/tree-page/audio-snow/audio';
import { addListenerToSnowIcon } from '../views/tree-page/audio-snow/snow';
import { dragListenerToToys } from '../views/tree-page/drag-and-drop/dragListenerToToys';
import { switchGarland } from '../views/tree-page/switchGarland';
import { chosenCards } from '../views/toys-page/addListeners/listenersToCards';
import { handleDragAndDropEvents } from '../views/tree-page/drag-and-drop/drag-and-drop-toy';

const content = document.querySelector('.page-container');

const router = (route: string): void | HTMLDivElement => {
  content!.innerHTML = '';

  switch (route) {
    case '#/':
      return content!.appendChild(StartPage());
    case '#/toyspage': {
      const pageToRender = content!.appendChild(ToysPageBasis());

      nouislider();

      const cardsContainerDiv = document.querySelector('.cards-container');
      cardsContainerDiv!.innerHTML = '';
      cardsContainerDiv!.appendChild(renderToysCards(data));// unchanged data
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // next 3 lines to remove later
      chosenCards = [];
      const selectedToysCounter = document.querySelector('.count-selected-toys');
      selectedToysCounter!.innerHTML = '0';
      // here we add eventlisteners to all our elements
      addAllListeners();
      return pageToRender;
    }
    case '#/treepage': {
      const treePageToRender = content!.appendChild(TreePage());

      // create selected decoration toys block
      const decorToysWrapper = document.querySelector('.decor-toys-wrapper');
      decorToysWrapper!.innerHTML = '';
      decorToysWrapper!.appendChild(createDecorToysBlock(data));
      listenerToTreeCards();
      listenerToBgCards();
      addListenerToAudio();
      addListenerToSnowIcon();
      handleDragAndDropEvents();
      dragListenerToToys();
      switchGarland();
      return treePageToRender;
    }
    default:
      return alert('404');
  }
};

export { router };
