import '../style/style.css';

const toggleNav = document.querySelector('.toggleNav');
const ul = document.querySelector('.flex-nav ul');
const li = document.querySelectorAll('li');
const nav = document.querySelector('nav');

const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const experience = document.querySelector('#experience');
const volunteer = document.querySelector('#volunteer');
const contact = document.querySelector('#contact');

toggleNav.addEventListener('click', (e) => {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open');
    nav.classList.remove('black-background');
  } else {
    ul.classList.add('open');
    nav.classList.add('black-background');
  }
});

li.forEach(item => {
  item.addEventListener('click', () => {
    ul.classList.remove('open');
    nav.classList.remove('black-background');
  });
});

window.addEventListener('scroll', onScroll);

function onScroll(event) {
  const items = document.querySelectorAll('a[href^="#"]');
  const scrollY = window.scrollY;

  items.forEach(item => {
    const { offsetTop, offsetHeight } = document.querySelector(item.getAttribute('href'));
    
    if (offsetTop <= scrollY 
      && offsetTop + offsetHeight > scrollY) {
      item.classList.add('active-section');
    } else {
      item.classList.remove('active-section');
    }
  });
}