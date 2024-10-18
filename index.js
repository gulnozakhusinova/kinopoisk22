const API_KEY = 'eb43132e'

async function fetchData(title) {
  const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t="${title}"`)
  const data = await response.json()
  return data
}

console.log(fetchData());



const searchInputElement = document.querySelector('#movie-search-input')
const searchButtonElement = document.querySelector("#movie-search-button")

 
let movieTitleValue = ''
let movie = null

searchButtonElement.addEventListener('click', async () => {
  const searchResultsContainer = document.querySelector('.search-results')
  searchResultsContainer.innerHTML = ""


  movieTitleValue = searchInputElement.value
  movie = await fetchData(movieTitleValue)
  const cardElementTemplate = `
  <div class="card" style="width: 18rem">
      <img
      src="${movie.Poster}"
      class="card-img-top"
      alt="${movie.Title} movie poster"
      />
      <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
          <p class="card-text">${movie.Plot}</p>
          <a
              href="#"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              >
              Подробнее
          </a>
      </div>
  </div>`
  
 
  console.log(searchResultsContainer.children)
  
  searchResultsContainer.insertAdjacentHTML('beforeend', cardElementTemplate)
})


const myModalEl = document.getElementById('exampleModal')

myModalEl.addEventListener('show.bs.modal', event => {
  console.log("hello");
  document.getElementById('exampleModalLabel').textContent = movie.Title
  document.querySelector("#cardTitle").textContent= movie.Title
  document.getElementById('modal-body-image').src = movie.Poster

  document.getElementById('cardActors').textContent = movie.Actors
  document.getElementById('cardPlot').textContent = movie.Plot
  document.getElementById('cardYear').textContent = movie.Year
  document.getElementById('cardRating').textContent = movie.Rating
  document.getElementById('cardReleased').textContent = movie.Released
  document.getElementById('cardType').textContent = movie.Type

  // document.querySelector('.modal-body-card2').textContent = JSON.stringify(movie)

})



const modalBoxesElement = document.querySelector("#modal-boxes")

// modalBoxesElement.addEventListener("click", async() => {

// })



























// console.log(titanic);
// console.log(titanic.Director);
// console.log(titanic["Director"]);
