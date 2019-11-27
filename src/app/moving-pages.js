const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");

let firstHash = "#first";
let secondHash = "#second";
let thirdHash = "#third";
let fourthHash = "#fourth";
let fifthHash = "#fifth";

// checkWhichPage = () => {
//   if (window.location.hash === (firstHash || "")) {
//     console.log(window.location.hash);
//     return 1;
//   } else if (window.location.hash === secondHash) {
//     console.log(window.location.hash);
//     return 2;
//   } else if (window.location.hash === this.thirdHash) {
//     console.log(window.location.hash);
//     return 3;
//   } else if (window.location.hash === this.fourthHash) {
//     console.log(window.location.hash);
//     return 4;
//   } else if (window.location.hash === this.fifthHash) {
//     console.log(window.location.hash);
//     return 5;
//   }
// };

goToPage = event => {
  if (window.location.hash === firstHash || !window.location.hash) {
    console.log(event);
    if (event === 39) {
      window.location.hash = secondHash;
    }
  } else if (window.location.hash === secondHash) {
    if (event === 39) {
      window.location.hash = thirdHash;
    } else if (event === 37) {
      window.location.hash = firstHash;
    }
  } else if (window.location.hash === thirdHash) {
    if (event === 39) {
      window.location.hash = fourthHash;
    } else if (event === 37) {
      window.location.hash = secondHash;
    }
  } else if (window.location.hash === fourthHash) {
    if (event === 39) {
      window.location.hash = fifthHash;
    } else if (event === 37) {
      window.location.hash = thirdHash;
    }
  } else if (window.location.hash === fifthHash) {
    if (event === 37) {
      window.location.hash = fourthHash;
    }
  }
};

document.addEventListener("keydown", event => {
  if (event.keyCode === 39) {
    console.log("right key");
    console.log(event.keyCode);
    console.log(firstHash);
    goToPage(39);
  } else if (event.keyCode === 37) {
    console.log("left key");
    goToPage(37);
  }
});
