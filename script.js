const navToggler = document.querySelector(".navbar-toggler");
const navCollapse = document.querySelector(".navbar-collapse");

navToggler.addEventListener("click", () => {
  if (navCollapse.classList.contains("showNav")) {
    navCollapse.classList.remove("showNav");
    navToggler.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    navCollapse.classList.add("showNav");
    navToggler.innerHTML = '<i class="fas fa-times"></i>';
  }
});

/*simple lightbox*/
var lightbox = new SimpleLightbox(".gallery-wrapper a", {
  /* options */
});
