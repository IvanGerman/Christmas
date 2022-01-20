import { createSnowFlakes, snowflakesInterval } from '../createSnowFlakes';

let isSnowOn = false;

export function addListenerToSnowIcon() {
  const snowIcon: HTMLElement = document.querySelector('.snow') as HTMLElement;
  snowIcon.onclick = function callback() {
    if (isSnowOn) {
      clearInterval(snowflakesInterval);
      isSnowOn = false;
      snowIcon.style.filter = '';
      return;
    }
    isSnowOn = true;
    snowIcon.style.filter = 'saturate(1.5) brightness(.8)';
    createSnowFlakes();
  };
}
