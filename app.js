const openHam = document.querySelector('.hamburger'),
          closeHam = document.querySelector('.close-ham'),
          navBar = document.querySelector('.navbar'),
          logo  = document.querySelector('.logo-section'),
          headerBox = document.querySelector('.box-title'),
          links = document.querySelectorAll('.nav-link a');

// Hamburger bars
openHam.addEventListener('click', () =>{
  openHam.classList.add('not-ready')
  closeHam.classList.remove('not-ready')
  logo.classList.add('logo-active')
  headerBox.classList.add('box-title-active')
  navBar.classList.add('navbar-active')
  links.forEach(link => {
    link.style.opacity = 1;
  });
})

closeHam.addEventListener('click', () =>{
  openHam.classList.remove('not-ready')
  closeHam.classList.add('not-ready')
  logo.classList.remove('logo-active')
  headerBox.classList.remove('box-title-active')
  navBar.classList.remove('navbar-active')
  links.forEach(link => {
    link.style.opacity = 0;
  });
})

// Page animation
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({defaults: {duration: 1, opacity: 0}});

tl.from('.box-title', {yPercent: 100})
  .from('.background-img', {xPercent: -20}, '-=.7')

gsap.from('.lead-header', {
  scrollTrigger: {
    trigger: '.lead-header',
    start: 'top 80%',
  },
  duration: .7,
  opacity: 0,
  xPercent: 40
})

gsap.from('.creation-section', {
  scrollTrigger:{
    trigger: '.creation-section',
    start: 'top 80%',
  },
  duration: 1,
  opacity: 0,
  yPercent: 20
})