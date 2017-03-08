import '../style/style.css';
import { DEV_SKILLS, LANGUAGES, EXPERIENCES } from './data';

const toggleNav = document.querySelector('.toggleNav');
const ul = document.querySelector('.flex-nav ul');
const navItems = ul.querySelectorAll('li');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('a[href^="#"]');

const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const experience = document.querySelector('#experience');
const volunteer = document.querySelector('#volunteer');
const contact = document.querySelector('#contact');

addExperiences();
addDevelopmentSkills();
addLanguageSkills();

toggleNav.addEventListener('click', (e) => {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open');
    nav.classList.remove('black-background');
  } else {
    ul.classList.add('open');
    nav.classList.add('black-background');
  }
});

forEach(navItems, (index, item) => {
  item.addEventListener('click', () => {
    ul.classList.remove('open');
    nav.classList.remove('black-background');
  });
});

window.addEventListener('scroll', onScroll);

function onScroll(event) {
  const scrollY = window.scrollY;

  forEach(links, (index, item) => {
    let { offsetTop, offsetHeight } = document.querySelector(item.getAttribute('href'));   
    offsetTop -= nav.offsetHeight;

    if (offsetTop <= scrollY 
      && offsetTop + offsetHeight > scrollY) {
      item.classList.add('active-section');
    } else {
      item.classList.remove('active-section');
    }
  });
}

function addExperiences() {
  const html = EXPERIENCES.map(exp => {
    return `
      <div class="experience">
        <div class="company-info">
          <h5>${exp.company}</h5>
          <p>${exp.period}</p>
        </div>
        <div class="additional-info">
          <strong>${exp.position}</strong>
          <span class="role-detail">${exp.description}</span>
          <span class="location">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            ${exp.location}
          </span>
        </div>
      </div>
    `;
  })
  .join('');

  experience.innerHTML += html;
}

function addDevelopmentSkills() {
  const html = DEV_SKILLS.map(skill => {
    return `
      <li class="skill-item">
        <span class="skill-description">${skill.description}</span>
        <span class="skill-rating">${renderRating(skill.rating)}</span>
      </li>
    `;
  })
  .join('');

  document.querySelector('.skill-list').innerHTML = html;
}

function addLanguageSkills() {
  const html = LANGUAGES.map(lang => {
    return `
      <li class="skill-item">
        <span class="skill-description">${lang.description}</span>
        <span class="skill-rating">${renderRating(lang.rating)}</span>
      </li>
    `;
  })
  .join('');

  document.querySelector('.language-list').innerHTML = html;
}

function renderRating(rating) {
  let html = '';

  for (let i = 1; i < 6; i++) {
    html += i <= rating ? '<span class="fa fa-star"></span>' : '<span class="fa fa-star-o"></span>';;
  }
 
  return html;
}

function forEach(array, callback, scope) {
  for (let i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};
