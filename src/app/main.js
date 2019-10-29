import { createDecipher } from "crypto";

const sendBtn = document.querySelector('.contact-button');
const portfolio = document.querySelectorAll('.examples__card');
const cardExample = document.querySelectorAll('.examples__card');
const card = document.querySelectorAll('.card');
const portfolioSection = document.querySelector('.portfolio');

let opened = false;

sendBtn.addEventListener('click', () => {
  window.open('mailto:jarek491@gmail.com');
})

console.log('%cHello there. I wanted to place my phone here so no random users would get it: Here is mine: %c 791 571 174',
'font-size: 18px', 'font-size: 26px; color: white; background: red');

if (window.innerHeight < 650 && window.innerWidth > 800) {
  portfolio.forEach(el => {
    el.style.width = "22%"
  })
}

// Portfolio animation on click

window.addEventListener('click', (e) => {
  cardExample.forEach(el => {
    if (!el.contains(e.target)) {
      el.classList.remove('card');
    }
  })
})

cardExample.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('card');
  })
})

// Go to section on load if previously were outside the page

if (performance.navigation.type === 2) {
  window.location.href = window.location.hash;
}




