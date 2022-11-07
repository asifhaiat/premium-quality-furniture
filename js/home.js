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
