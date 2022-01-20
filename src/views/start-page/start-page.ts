export default (): HTMLDivElement => {
  const startPageMarkup = `
    <div class="ball ball1"></div>
    <div class="ball ball2"></div>
    <div class="game-title">Новогодняя Игра "Наряди Ёлку"</div>
    <a href="#/toyspage"><button class="start-button">Начать</button></a>`;

  const startPageContentDiv: HTMLDivElement = document.createElement('div');
  startPageContentDiv.classList.add('start-page-container');
  startPageContentDiv.innerHTML = startPageMarkup;

  return startPageContentDiv;
};
