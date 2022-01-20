export function switchGarland() {
  const garlandSwitchButton: HTMLElement = document.querySelector('.garland-switch-button') as HTMLElement;
  const garlandContainer: HTMLElement = document.querySelector('.garland-container') as HTMLElement;
  garlandSwitchButton.onclick = () => {
    if (garlandSwitchButton.innerHTML === 'OFF') {
      garlandContainer.style.visibility = 'visible';
      garlandSwitchButton.innerHTML = 'ON';
      return;
    }
    garlandContainer.style.visibility = 'hidden';
    garlandSwitchButton.innerHTML = 'OFF';
  };
}
