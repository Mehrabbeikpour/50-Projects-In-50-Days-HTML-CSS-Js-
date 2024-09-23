const btnToggle = document.querySelectorAll(".faq-toggle");

btnToggle.forEach((btnToggle) => {
  btnToggle.addEventListener("click", () => {
    btnToggle.parentNode.classList.toggle("active");
  });
});
