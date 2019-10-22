import Typed from 'typed.js';

// const options = {
//   strings: ['Programmer', 'Tester'],
//   typeSpeed: 40
// }

const typed = new Typed('#typed', {
  stringsElement: '.main__person-profession',
  typeSpeed: 80,
  loop: true,
  loopCount: Infinity,
  backDelay: 2000,
  backSpeed: 60
})