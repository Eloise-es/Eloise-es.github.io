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
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      results.appendChild(img);
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
