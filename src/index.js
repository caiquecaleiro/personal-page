import '../style/style.css';

const toggleNav = document.querySelector('.toggleNav');
const ul = document.querySelector('.flex-nav ul');

toggleNav.addEventListener('click', (e) => {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open');
  } else {
    ul.classList.add('open');
  }
});