// const menuBtn = document.querySelector('.menu__btn');
// const menu = document.querySelector('.nav__menu');

//   menuBtn.addEventListener('click', () => {
//     menu.classList.toggle('nav__menu--active');
//   });

// const anchors = document.querySelectorAll('a[href*="#"]');
// for (let anchor of anchors) {
//   anchor.addEventListener('click', function(event) {
//     event.preventDefault();
//     const blockID = anchor.getAttribute('href')
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: 'smooth',
//       // block:'start'
//     })
//   })
// }
const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    
    const blockID = anchor.getAttribute('href').substring(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior:'smooth',
      block: 'start'
    });
  });
});