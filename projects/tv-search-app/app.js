// Declare document elements
const form = document.querySelector("#searchForm");
const results = document.querySelector("#results");

// Add event listener to form
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  removeImages();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=", config);
  console.log(res);
  addImages(res.data);
  form.elements.query.value = "";
});

// Iterate through results to append images of shows
function addImages(shows) {
  shows.forEach((result) => {
    if (result.show.image) {
      // Create card
      const card = document.createElement("div");
      card.classList.add("card", "text-bg-dark", "p-0", "m-2");
      card.style.width = "14rem";
      // Create img
      const img = document.createElement("img");
      img.classList.add("card-img");
      img.src = result.show.image.medium;
      // Create card img overlay
      const overlay = document.createElement("div");
      overlay.classList.add("card-img-overlay");
      // Append img and overlay to card
      card.appendChild(img);
      card.appendChild(overlay);
      // Append card to results
      results.appendChild(card);
      // Hover effects - need both onmouseenter and onmouseout events
      card.onmouseover = function () {
        img.style.opacity = 0.3;
        card.style.cursor = "pointer";
      };
      card.onmouseout = function () {
        img.style.opacity = 1;
        card.style.cursor = "auto";
      };
    }
  });
}
// Remove all images from the results section
function removeImages() {
  var first = results.firstElementChild;
  while (first) {
    first.remove();
    first = results.firstElementChild;
  }
}
