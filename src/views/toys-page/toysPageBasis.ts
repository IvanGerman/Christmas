export default (): HTMLDivElement => {
  // here we create html elements and provide them classes, styles, eventListeners , etc.

  const toysPageMarkup = `
  <div class="toys-page">
    <div class="controls">
	    <div class="filters">
	      <h3 class="controls-title">Фильтры по значению</h3>
	      <div class="shape">
	        Форма:
	        <button data-filter="шар"></button>
	        <button data-filter="колокольчик"></button>
	        <button data-filter="шишка"></button>
	        <button data-filter="снежинка"></button>
	        <button data-filter="фигурка"></button>
	      </div>
						<div class="color">
							Цвет:
							<button data-filter="белый"></button>
							<button data-filter="желтый"></button>
							<button data-filter="красный" id="red-btn"></button>
							<button data-filter="синий"></button>
							<button data-filter="зелёный"></button>
						</div>
						<div class="size">
							Размер:
							<button data-filter="большой"></button>
							<button data-filter="средний"></button>
							<button data-filter="малый"></button>
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
						<div class="amount-range">
						  <span class="range-filter-span">Количество экземпляров:</span>
							<div class="amount-range-slider"></div>
						</div>  
						<div class="year-range">
						  <span class="range-filter-span">Год приобретения:</span>
							<div class="year-range-slider"></div>
						</div>
					</div>
					<div class="sorting">
						<h3 class="controls-title">Сортировка</h3>
						<select class="sorting-options">
						  <option value="sort-a-z" selected>По названию от «А» до «Я»</option>
							<option value="sort-z-a">По названию от «Я» до «А»</option>
							<option value="toys-amount-max">По количеству по возрастанию</option>
							<option value="toys-amount-min">По количеству по убыванию</option>
						</select>
						<button class="reset-filters">Сброс фильтров</button>
					</div>
				</div>
				<div class="cards-container"></div>
			</div>`;

  const toysPageContentDiv: HTMLDivElement = document.createElement('div');
  toysPageContentDiv.classList.add('toys-page-container');
  toysPageContentDiv.innerHTML = toysPageMarkup;

  return toysPageContentDiv;
};
