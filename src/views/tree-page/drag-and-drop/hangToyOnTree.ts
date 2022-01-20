export function hangToyOnTree(currentToy: HTMLImageElement) {
  function handleDrop(event: MouseEvent) {
    event.preventDefault();
    Object.assign(currentToy.style, {
      zIndex: '1000', position: 'absolute', left: `${event.clientX - 40}px`, top: `${event.clientY - 40}px`,
    });
    const toysCurrentNumberP: HTMLElement = currentToy.parentElement!.firstElementChild as HTMLElement;
    // next 3 lines to remove later
    if (toysCurrentNumberP.innerHTML === '0') {
      return;
    }
    toysCurrentNumberP.innerHTML = `${Number(toysCurrentNumberP.innerHTML) - 1}`;
  }

  const treeTargetZone: HTMLElement = document.querySelector('.treeTargetZone') as HTMLElement;
  treeTargetZone.ondrop = handleDrop;
}
