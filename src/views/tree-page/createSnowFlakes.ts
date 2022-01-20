/* eslint-disable  import/no-mutable-exports */
export let snowflakesInterval: NodeJS.Timer;
export function createSnowFlakes() {
  const snowflakesWrapper: HTMLElement = document.querySelector('.snowflakes') as HTMLElement;
  function createSnowFlake() {
    const snowFlake = document.createElement('i');
    snowFlake.classList.add('fas');
    snowFlake.classList.add('fa-snowflake');
    snowFlake.style.left = `${Math.random() * window.innerWidth}px`;
    snowFlake.style.animationDuration = `${Math.random() * 3 + 2}s`; // between 2 - 5 seconds
    snowFlake.style.opacity = String(Math.random());
    snowFlake.style.fontSize = `${Math.random() * 10 + 10}px`;
    snowflakesWrapper.appendChild(snowFlake);
    setTimeout(() => {
      snowFlake.remove();
    }, 5000);
  }
  snowflakesInterval = setInterval(createSnowFlake, 10);
}
