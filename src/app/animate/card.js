const cardExample = document.querySelectorAll(".examples__card");

window.addEventListener("click", e => {
  cardExample.forEach(el => {
    if (!el.contains(e.target)) {
      el.classList.remove("card");
    }
  });
});

cardExample.forEach(element => {
  element.addEventListener("click", () => {
    element.classList.toggle("card");
  });
});
