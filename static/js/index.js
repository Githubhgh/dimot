'use strict';
const copyButton = document.getElementById('copy-citation');
copyButton.addEventListener('click', async () => {
  const citation = document.getElementById('bibtex-code');
  const status = document.getElementById('copy-status');
  const copyText = copyButton.querySelector('.copy-text');
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copyText.textContent = 'Copied!';
    status.textContent = 'BibTeX copied to clipboard.';
    setTimeout(() => { copyText.textContent = 'Copy'; }, 2000);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
  }
});
const scrollButton = document.getElementById('scroll-top');
scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});
function updateScrollButton() { scrollButton.classList.toggle('visible', window.scrollY > 300); }
window.addEventListener('scroll', updateScrollButton, { passive: true });
updateScrollButton();

const motionCarousel = document.querySelector('.motion-carousel');
const motionTrack = document.getElementById('motion-track');
const motionSlides = Array.from(motionTrack.children);
const motionIndicators = Array.from(motionCarousel.querySelectorAll('.indicator'));
let currentMotion = 0;

function showMotion(index) {
  currentMotion = (index + motionSlides.length) % motionSlides.length;
  motionTrack.style.transform = `translateX(-${currentMotion * 100}%)`;
  motionSlides.forEach((slide, i) => {
    slide.setAttribute('aria-hidden', String(i !== currentMotion));
    motionIndicators[i].classList.toggle('active', i === currentMotion);
    motionIndicators[i].setAttribute('aria-current', String(i === currentMotion));
  });
  document.getElementById('motion-status').textContent = `Motion ${currentMotion + 1} of ${motionSlides.length}`;
}

motionCarousel.querySelector('.arrow-left').addEventListener('click', () => showMotion(currentMotion - 1));
motionCarousel.querySelector('.arrow-right').addEventListener('click', () => showMotion(currentMotion + 1));
motionIndicators.forEach((indicator, i) => indicator.addEventListener('click', () => showMotion(i)));
motionCarousel.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showMotion(currentMotion + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});
