const dialog = document.getElementById('lightbox');
const fullImage = document.getElementById('lightbox-image');
const closeButton = dialog.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    fullImage.src = button.dataset.full;
    const img = button.querySelector('img');
    fullImage.alt = img ? img.alt : 'Expanded image';
    dialog.showModal();
  });
});

closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && dialog.open) dialog.close();
});
