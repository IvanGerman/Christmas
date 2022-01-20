import data from '../../data';

export default (): HTMLDivElement => {
  // here we create html elements and provide them classes, styles, eventListeners , etc.

  const toysPageMarkup = `
  <div class="toys-page">
				<div class="controls">
					<div class="filters">
						<h3 class="controls-title">Фильтры по значению</h3>
						<div class="shape">
							Форма:
							<button data-filter="ball"></button>
							<button data-filter="bell"></button>
							<button data-filter="cone"></button>
							<button data-filter="snowflake"></button>
							<button data-filter="statuette"></button>
						</div>
						<div class="color">
							Цвет:
							<button data-filter="white"></button>
							<button data-filter="yellow"></button>
							<button data-filter="red" id="red-btn"></button>
							<button data-filter="blue"></button>
							<button data-filter="green"></button>
						</div>
						<div class="size">
							Размер:
							<button data-filter="big"></button>
							<button data-filter="middle"></button>
							<button data-filter="small"></button>
						</div>
						<div class="fav-toys">
							Только любимые:
							<div class="input-wrapper">
								<input type="checkbox" class="fav-input" id="checkbox">
								<label for="checkbox" class="fav-input-label"></label>
							</div>
						</div>
					</div>
					<div class="range">
						<h3 class="controls-title">Фильтры по диапазону</h3>
					</div>
					<div class="sorting">
						<h3 class="controls-title">Сортировка</h3>
					</div>
				</div>
				<div class="cards-container"></div>
			</div>`;

  const toysPageContentDiv: HTMLDivElement = document.createElement('div');
  toysPageContentDiv.classList.add('toys-page-container');
  toysPageContentDiv.innerHTML = toysPageMarkup;
	// preparing rendering of all toys cards depending on chosen filter
  const x: string = data.map((toy) => `<div class="single-toy-card">
      <div>${toy.num}</div>
      <div>${toy.name}</div>
      <div>${toy.count}</div>
      <div>${toy.year}</div>
      <div>${toy.shape}</div>
      <div>${toy.color}</div>
      <div>${toy.size}</div>
      <div>${toy.favorite}</div>
      <br>
    </div>`).join('');

  const allCards = `    
    ${x}
  `;
  const allCardsElement: HTMLDivElement = document.createElement('div');
  allCardsElement.classList.add('cards-wrapper');
  allCardsElement.innerHTML = allCards;

  return toysPageContentDiv;
};
