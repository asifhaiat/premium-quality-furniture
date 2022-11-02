const parentContainer = document.querySelector(".read-more-container");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;
  const isShowMoreBtn = current.className.includes("show-more-btn");
  if (!isShowMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-text");
  currentText.classList.toggle("read-more-text--show");
  current.textContent = current.textContent.includes("Show more") ? "Show Less..." : "Show More...";
});

const parentContainer1 = document.querySelector(".read-more-container1");

parentContainer1.addEventListener("click", (event) => {
  const current = event.target;
  const isShowMoreBtn = current.className.includes("show-more-btn1");
  if (!isShowMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-text1");
  currentText.classList.toggle("read-more-text--show1");
  current.textContent = current.textContent.includes("Show more") ? "Show Less..." : "Show More...";
});

const parentContainer2 = document.querySelector(".read-more-container2");

parentContainer2.addEventListener("click", (event) => {
  const current = event.target;
  const isShowMoreBtn = current.className.includes("show-more-btn2");
  if (!isShowMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-text2");
  currentText.classList.toggle("read-more-text--show2");
  current.textContent = current.textContent.includes("Show more") ? "Show Less..." : "Show More...";
});

const parentContainer3 = document.querySelector(".read-more-container3");

parentContainer3.addEventListener("click", (event) => {
  const current = event.target;
  const isShowMoreBtn = current.className.includes("show-more-btn3");
  if (!isShowMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-text3");
  currentText.classList.toggle("read-more-text--show3");
  current.textContent = current.textContent.includes("Show more") ? "Show Less..." : "Show More...";
});
