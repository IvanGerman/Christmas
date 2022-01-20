export function changeMainTreeBg(bgNumber: string) {
  const mainTreeContainer: HTMLElement = document.querySelector('.tree-main') as HTMLElement;
  mainTreeContainer.style.backgroundImage = `url(./bg/${bgNumber}.jpg)`;
}
