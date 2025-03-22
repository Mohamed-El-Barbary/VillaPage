//* Global
const goToHome = document.getElementById("go-home");
const pullPhotoSrc = document.querySelectorAll("go-details");
const photoSrc = document.querySelectorAll("photo-src");
const contactOwnerPage = document.querySelectorAll("contact-owner");

//!  Start JS
goToHome.addEventListener("click", (e) => {
  location.href = "/index.html";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".go-details").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".card");
    const photoSrc = card.querySelector(".photo-src").getAttribute("src");
    location.href = `./detailsPage.html?src=${photoSrc}`;
  });
});


document.querySelectorAll(".contact-owner").forEach((button) => {
  button.addEventListener("click", function () {
    location.href = `./contactPage.html`;
    console.log("Hello");
  });
});
