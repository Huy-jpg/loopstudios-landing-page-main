const openHam = document.querySelector('.hamburger'),
          closeHam = document.querySelector('.close-ham'),
          navBar = document.querySelector('.navbar'),
          logo  = document.querySelector('.logo-section'),
          headerBox = document.querySelector('.box-title'),
          links = document.querySelectorAll('.nav-link a');

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