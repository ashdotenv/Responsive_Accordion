const accordionTitles = document.querySelectorAll(".accordion-title");
accordionTitles.forEach((item) => {
  item.addEventListener("click", () => {
    const height = item.nextElementSibling.scrollHeight;
    item.classList.toggle("active-header");
    if (item.classList.contains("active-header")) {
      item.nextElementSibling.style.maxHeight = `${height}px`;
    } else {
      item.nextElementSibling.style.maxHeight = `0px`;
    }
  });
});
