import { IToy } from '../../types/types';

export default (currentData: IToy[]): HTMLDivElement => {
  // preparing rendering of all toys cards depending on chosen filter

	const toyCardsBlock: string = currentData.map((toy: IToy, index: number): string => `<div class="single-toy-card" data-num="${toy.num}" id="${index}">
		  <h2 class="card-title">${toy.name}</h2>
		  <img class="toy-img" src="toys/${toy.num}.png" alt="">
		  <div class="card-description">      
			  <p class="count">Количество:<span>${toy.count}</span></p>
			  <p class="year">Год покупки:<span>${toy.year}</span></p>
			  <p class="shape">Форма:<span>${toy.shape}</span></p>
			  <p class="color">Цвет:<span>${toy.color}</span></p>
			  <p class="size">Размер:<span>${toy.size}</span></p>
			  <p class="favorite">Любимая:<span>${toy.favorite}</span></p>
		  </div>
		  <div class="fav-indicator"></div>
	  </div>`).join('');

  const allCards = `    
    ${toyCardsBlock}
  `;
  const allCardsElement: HTMLDivElement = document.createElement('div');
  allCardsElement.classList.add('cards-wrapper');
  allCardsElement.innerHTML = allCards;
	return allCardsElement;
};
