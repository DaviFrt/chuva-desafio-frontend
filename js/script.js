function seeMore() {
  const dots = document.querySelector(".dots");
  const seeMoreBtn = document.querySelector("button.see-more");
  const firstParagraph = document.querySelector(".card-content p");
  const moreText = document.querySelectorAll(".more-text");

  seeMoreBtn.addEventListener("click", () => {
    moreText.forEach(text => {
      text.classList.remove("hidden");
      dots.textContent = ".";
      seeMoreBtn.style.visibility = "hidden";
    });
  });
}

seeMore();