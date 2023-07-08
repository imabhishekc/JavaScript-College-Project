
const arrowIcon = document.querySelector('.material-symbols-outlined');
// Add event listener for mouseenter event
arrowIcon.addEventListener('mouseenter', () => {
  arrowIcon.style.transform = 'rotate(180deg)';
});

// Add event listener for mouseleave event
arrowIcon.addEventListener('mouseleave', () => {
  arrowIcon.style.transform = 'rotate(0deg)';
});


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener('mouseenter', () => {
  cursor.style.transform = 'translate(-50%, -50%)';
});

document.addEventListener('mouseleave', () => {
  cursor.style.transform = 'translate(-9999px, -9999px)';
});

const noCursor =document.querySelector('.honors');
document.addEventListener('mouseenter', () => {
  noCursor.style.transform = 'translate(-50%, -50%)';
});