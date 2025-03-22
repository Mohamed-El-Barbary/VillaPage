//! Global
const vilaSale = document.querySelectorAll(".villaSale");
const housePage = document.querySelectorAll(".housePage");
const landsPage = document.querySelectorAll(".landsPage");

//! Start JS

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
