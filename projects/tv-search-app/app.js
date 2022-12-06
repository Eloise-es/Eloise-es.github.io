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
      overlay.style.display = "none";

      // Card title (name)
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.innerHTML = result.show.name;
      // Card text (summary)
      const cardText = document.createElement("small");
      cardText.classList.add("card-text");
      if (result.show.summary) {
        cardText.innerHTML = truncateString(result.show.summary, 180);
      }
      // Link to read more
      const cardLink = document.createElement("a");
      cardLink.innerText = "Read more";
      if (result.show.externals.imdb) {
        cardLink.href = `https://www.imdb.com/title/${result.show.externals.imdb}`;
        cardLink.target = `_blank`;
      } else {
        cardLink.href = result.show.url;
        cardLink.target = `_blank`;
      }

      // Card badges (genre)
      const cardBadges = document.createElement("div");
      if (result.show.genres) {
        for (let genre of result.show.genres) {
          const cardGenre = document.createElement("span");
          cardGenre.classList.add("badge", "text-bg-primary", "m-1");
          cardGenre.innerHTML = genre;
          cardBadges.appendChild(cardGenre);
        }
      }
      const cardBadge = document.createElement("span");
      cardBadge.classList.add("badge", "text-bg-secondary", "m-1");
      cardBadge.innerHTML = result.show.type;
      cardBadges.appendChild(cardBadge);

      // Append card contents to overlay
      overlay.appendChild(cardTitle);
      overlay.appendChild(cardText);
      overlay.appendChild(cardLink);
      overlay.appendChild(cardBadges);
      // Append img and overlay to card
      card.appendChild(img);
      card.appendChild(overlay);
      // Append card to results
      results.appendChild(card);
      // Hover effects - need both onmouseenter and onmouseout events
      card.onmouseover = function () {
        img.style.opacity = 0.3;
        overlay.style.display = "block";
      };
      card.onmouseout = function () {
        img.style.opacity = 1;
        overlay.style.display = "none";
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

// Cuts the end of a string to a specified length and replaces end with ... (so it fits)
function truncateString(string, limit) {
  if (string.length > limit) {
    return string.substring(0, limit) + "...";
  } else {
    return string;
  }
}
// API notes:
// Summary = result.show.summary
// Language = result.show.language
// Country = result.show.network.country.name
// Genre = 1. result.show.genres[0] -- if empty, use result.show.type
// IMDb page = `https://www.imdb.com/title/${imdbCode}` result.show.externals.imdb
