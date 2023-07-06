const arrowIcon = document.querySelector('.material-symbols-outlined');

// Add event listener for mouseenter event
arrowIcon.addEventListener('mouseenter', () => {
  arrowIcon.style.transform = 'rotate(180deg)';
});

// Add event listener for mouseleave event
arrowIcon.addEventListener('mouseleave', () => {
  arrowIcon.style.transform = 'rotate(0deg)';
});