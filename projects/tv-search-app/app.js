// Declare document elements
const form = document.querySelector("#searchForm");
const main = document.querySelector("main");

// Add event listener to form
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  console.log(res);
  form.elements.query.value = "";
});
