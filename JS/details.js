//* Global
const searchParams = location.search;
const params = new URLSearchParams(searchParams);
imageSrc = params.get("src");
const detailsImg = document.getElementById("details-img");

console.log(imageSrc);

if (imageSrc) {
  detailsImg.src = imageSrc;
}
