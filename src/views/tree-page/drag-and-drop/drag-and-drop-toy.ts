export function handleDragAndDropEvents() {
  function handleOver(event: Event) {
    event.preventDefault();
  }

  function handleLeave(event: Event) {
    event.preventDefault();
  }

  function handleEnter(event: Event) {
    event.preventDefault();
  }

  function handleDrop(event: Event) {
    event.preventDefault();
  }

  const treeTargetZone: HTMLElement = document.querySelector('.treeTargetZone') as HTMLElement;

  treeTargetZone.ondragover = handleOver;
  treeTargetZone.ondragenter = handleEnter;
  treeTargetZone.ondragleave = handleLeave;
  treeTargetZone.ondrop = handleDrop;
}
