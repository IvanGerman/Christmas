export function changeMainTree(treeNumber: string) {
  const mainTreeImage: HTMLImageElement = document.querySelector('.main-tree') as HTMLImageElement;
  mainTreeImage.src = `tree/${treeNumber}.png`;
}
