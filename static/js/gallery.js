
const galleryButton = document.getElementById('toggle-gallery');
const motionButtons = [...document.querySelectorAll('.motion-toggle')];
function setMotion(button, playing) {
  const img = button.parentElement.querySelector('img');
  const title = button.closest('.motion-card').querySelector('h3').textContent;
  img.src = playing ? img.dataset.gif : img.dataset.poster;
  img.alt = 'DiMoT: ' + title + '. Animation ' + (playing ? 'playing' : 'paused') + '.';
  button.setAttribute('aria-pressed', String(playing));
  button.setAttribute('aria-label', (playing ? 'Pause' : 'Play') + ' ' + title + ' GIF');
  button.textContent = playing ? 'Pause GIF' : 'Play GIF';
}
function updateGalleryButton() {
  const allPlaying = motionButtons.every(b => b.getAttribute('aria-pressed') === 'true');
  galleryButton.setAttribute('aria-pressed', String(allPlaying));
  galleryButton.textContent = allPlaying ? 'Pause all GIFs' : 'Play all GIFs';
}
motionButtons.forEach(button => button.addEventListener('click', () => {
  setMotion(button, button.getAttribute('aria-pressed') !== 'true');
  updateGalleryButton();
}));
galleryButton.addEventListener('click', () => {
  const playing = galleryButton.getAttribute('aria-pressed') !== 'true';
  motionButtons.forEach(button => setMotion(button, playing));
  updateGalleryButton();
});

