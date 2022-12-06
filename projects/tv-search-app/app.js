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
      // Add transition for hover effect
      img.style.transition = "all 300ms";
      // Create card img overlay
      const overlay = document.createElement("div");
      overlay.classList.add("card-img-overlay");
      overlay.style.display = "none";

      // Card title (name + year)
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      if (result.show.premiered) {
        const year = result.show.premiered.substring(0, 4);
        cardTitle.innerHTML = `${result.show.name} (${year})`;
      } else {
        cardTitle.innerHTML = result.show.name;
      }

      // Card text (summary)
      const cardText = document.createElement("small");
      cardText.classList.add("card-text");
      if (result.show.summary) {
        cardText.innerHTML = truncateSummary(result.show.summary, 150);
      }

      // Link to read more
      const cardLink = document.createElement("a");
      cardLink.innerText = "(more info)";
      if (result.show.externals.imdb) {
        cardLink.href = `https://www.imdb.com/title/${result.show.externals.imdb}`;
        cardLink.target = `_blank`;
      } else {
        cardLink.href = result.show.url;
        cardLink.target = `_blank`;
      }

      // Card badges (country, genre, type)
      const cardBadges = document.createElement("div");
      // Language + Country badge
      const cardBadgeLanguage = document.createElement("span");
      cardBadgeLanguage.classList.add("badge", "text-bg-danger", "m-1");
      if (result.show.network) {
        cardBadgeLanguage.innerHTML += `${getFlagEmoji(
          result.show.network.country.code
        )} `;
      }
      if (result.show.language) {
        cardBadgeLanguage.innerHTML += result.show.language;
      }
      cardBadges.appendChild(cardBadgeLanguage);

      // Genre badge
      if (result.show.genres) {
        for (let genre of result.show.genres) {
          const cardBadgeGenre = document.createElement("span");
          cardBadgeGenre.classList.add("badge", "text-bg-primary", "m-1");
          cardBadgeGenre.innerHTML = genre;
          cardBadges.appendChild(cardBadgeGenre);
        }
      }

      // Type badge
      const cardBadgeType = document.createElement("span");
      cardBadgeType.classList.add("badge", "text-bg-secondary", "m-1");
      cardBadgeType.innerHTML = result.show.type;
      cardBadges.appendChild(cardBadgeType);

      // Append card contents to overlay
      overlay.appendChild(cardTitle);
      cardText.appendChild(cardLink);
      overlay.appendChild(cardText);
      overlay.appendChild(cardBadges);
      // Append img and overlay to card
      card.appendChild(img);
      card.appendChild(overlay);
      // Append card to results
      results.appendChild(card);
      // Hover effects - need both onmouseenter and onmouseout events
      if (matchMedia("hover: hover")) {
        card.onmouseover = function () {
          img.style.opacity = 0.3;
          overlay.style.display = "block";
        };
        card.onmouseout = function () {
          img.style.opacity = 1;
          overlay.style.display = "none";
        };
      } else {
        card.onclick = function () {
          img.style.opacity = 0.2;
          overlay.style.display = "block";
        };
        card.onmouseout = function () {
          img.style.opacity = 1;
          overlay.style.display = "none";
        };
      }
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
// Also removes <p> tags that are written into the API result
function truncateSummary(string, limit) {
  // Check for and remove first HTML tag
  if (string[0] === "<") {
    string = string.substring(3, string.length - 4);
  }
  // Cut down to limit and add ...
  if (string.length > limit) {
    return string.substring(0, limit) + "... ";
  } else {
    return string + " ";
  }
}
// Country flag emoji by Jorik https://dev.to/jorik/country-code-to-flag-emoji-a21
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
// API notes:
// Summary = result.show.summary
// Language = result.show.language
// Country = result.show.network.country.name
// Genre = 1. result.show.genres[0] -- if empty, use result.show.type
// IMDb page = `https://www.imdb.com/title/${imdbCode}` result.show.externals.imdb
