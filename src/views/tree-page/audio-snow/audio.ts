export function addListenerToAudio() {
  const audioIcon: HTMLElement = document.querySelector('.audio') as HTMLElement;
  const audioElement: HTMLAudioElement = document.querySelector('.audioElement') as HTMLAudioElement;

  audioIcon.onclick = function callback() {
    if (audioElement.currentTime === 0 || audioElement.paused) {
      audioElement.play();
      audioIcon.style.filter = 'saturate(1.5) brightness(.8)';
      return;
    }
    audioIcon.style.filter = '';
    audioElement.pause();
  };
}
