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
