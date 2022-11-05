/* second review show more text
const parentContainer = document.querySelector(".read-more-container");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;
  const isShowMoreBtn = current.className.includes("show-more-btn");
  if (!isShowMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-text");
  currentText.classList.toggle("read-more-text--show");
  current.textContent = current.textContent.includes("Show more") ? "Show Less..." : "Show More...";
}); */


/* first review show more text
function showMoreFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more..."; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less..."; 
    moreText.style.display = "inline";
  }
} */

const noOfCharacter = 120;
const contents = document.querySelectorAll(".contents");
//console.log(contents)
contents.forEach((content) => {
  if(content.textContent.length < noOfCharacter){
    content.nextElementSibling.style.display = "none";
  }
  else{
    const displayText = content.textContent.slice(0, noOfCharacter);
    // console.log(displayText);
    const moreText = content.textContent.slice(noOfCharacter);
    // console.log(moreText);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});

function showMore(btn) {
  const post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Show more" ? btn.textContent = "Show less" : btn.textContent = "Show more";
}