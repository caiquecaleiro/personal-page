import '../style/style.css';

const toggleNav = document.querySelector('.toggleNav');
const ul = document.querySelector('.flex-nav ul');
const li = document.querySelectorAll('li');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('a[href^="#"]');

const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const experience = document.querySelector('#experience');
const volunteer = document.querySelector('#volunteer');
const contact = document.querySelector('#contact');

const experiences = [
  { company: 'Senior Sistemas', period: 'Jun 2016 - Feb 2017', position: 'Front End Developer', location: 'Blumenau, Brazil', description: 'Senior Sistemas is one of the largest software companies in Brazil. There I was helping on the development of new features for the ERP, using AngularJS and Metronic design. I also have motivated my teammates to study and to build prototypes using new technologies, such as ES6, React, NodeJS and MongoDB.' },
  { company: 'Philips', period: 'Jun 2015 - Jun 2016', position: 'Development Lead', location: 'Blumenau, Brazil', description: 'I was responsible to lead and help the teams on the most important project at Philips Brazil, the Tasy HTML5 Health System. I have led and helped over 80 developers in Brazil and worked in India for two months, leading a team with 20 developers.', },
  { company: 'Philips', period: 'Oct 2013 - Jun 2016', position: 'Front End Developer', location: 'Blumenau, Brazil - Bengaluru, India', description: 'Philips has developed the Tasy Health System, which is being used by over 1000 hospitals and health clinics in Latin America. As a Software Engineer, I have developed new features to help on the software internationalization for the Latin America and I have worked on many projects for Desktop, Web and Mobile platforms.' }
];

addExperiences();

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
  const scrollY = window.scrollY;

  links.forEach(item => {
    const { offsetTop, offsetHeight } = document.querySelector(item.getAttribute('href'));
    
    if (offsetTop <= scrollY 
      && offsetTop + offsetHeight > scrollY) {
      item.classList.add('active-section');
    } else {
      item.classList.remove('active-section');
    }
  });
}

function addExperiences() {
  const html = experiences.map(exp => {
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