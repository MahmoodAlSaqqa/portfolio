'use strict';

const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// toggle the menu open/closed when the burger is clicked
burger.addEventListener('click', function () {
  const isOpen = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
});

// close the menu after clicking a link (so it doesn't cover the page)
navLinks.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});
