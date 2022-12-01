// Declare document elements
const form = document.querySelector("#searchForm");
const main = document.querySelector("main");

// Add event listener to form
form.addEventListener("submit", async function (e) {
  e.preventDefault();
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
      main.appendChild(img);
    }
  });
}
