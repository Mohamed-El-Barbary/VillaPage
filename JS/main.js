//! Global
const vilaSale = document.querySelectorAll(".villaSale");
const housePage = document.querySelectorAll(".housePage");
const landsPage = document.querySelectorAll(".landsPage");
const contactOwnerPage = document.querySelectorAll("contact-owner");

//! Start JS
document.querySelectorAll(".go-details").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".card");
    const photoSrc = card.querySelector(".photo-src").getAttribute("src");
    location.href = `../pages/detailsPage.html?src=${photoSrc}`;
  });
});
document.querySelectorAll(".go-Villas").forEach((button) => {
  button.addEventListener("click", function () {
    location.href = `../pages/villaPage.html`;
  });
});
document.querySelectorAll(".go-aparts").forEach((button) => {
  button.addEventListener("click", function () {
    location.href = `../pages/housePage.html`;
  });
});

document.querySelectorAll(".contact-owner").forEach((button) => {
  button.addEventListener("click", function () {
    location.href = `../pages/contactPage.html`;
    console.log("Hello");
  });
});

vilaSale.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "../pages/villaPage.html";
    console.log("Navigating to villaPage.html");
  });
});

housePage.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "../pages/housePage.html";
    console.log("Navigating to housePage.html");
  });
});

landsPage.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "../pages/landPage.html";
    console.log("Navigating to landPage.html");
  });
});
