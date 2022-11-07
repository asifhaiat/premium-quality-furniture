/* Navbar */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  //   console.log(scrollY);
  if (scrollY >= 110) {
    navbar.classList.add("bg");
  } else {
    navbar.classList.remove("bg");
  }
});

/* Collage Images */
const collageImages = [...document.querySelectorAll(".collage-img")];

collageImages.map((item, i) => {
  // console.log(item, i);
  item.addEventListener("mouseover", () => {
    collageImages.map((image, index) => {
      // console.log(image, index);
      if (index != i) {
        image.style.filter = `blur(5px)`;
        item.style.zIndex = 2;
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    collageImages.map((image, index) => {
      // console.log(image, index);
      image.style = null;
    });
  });
});

/* Back to Top Scroll */
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (scrollY >= 110) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
