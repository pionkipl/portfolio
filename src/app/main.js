const sendBtn = document.querySelector('.contact-button');

sendBtn.addEventListener('click', () => {
  window.open('mailto:jarek491@gmail.com');
})

console.log('%cHello there. I wanted to place my phone here so no random users would get it: Here is mine: %c 791 571 174',
'font-size: 18px', 'font-size: 26px; color: white; background: red');