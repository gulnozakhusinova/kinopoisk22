const API_KEY = 'eb43132e'

async function fetchData(title) {
  const spiner = document.querySelector("#spiner")
  spiner.style.display = 'block'
  const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t="${title}"`)
  const data = await response.json()
  spiner.style.display = 'none'
  return data
}





const searchInputElement = document.querySelector('#movie-search-input')
const searchButtonElement = document.querySelector("#movie-search-button")


let movieTitleValue = ''
let movie = null

searchButtonElement.addEventListener('click', async () => {
  const searchResultsContainer = document.querySelector('.search-results')

  if (movie && movie.Title.toLowerCase().includes(movieTitleValue.toLocaleLowerCase())) return
  searchResultsContainer.innerHTML = ""

  movieTitleValue = searchInputElement.value
  movie = await fetchData(movieTitleValue)

  if (movie.Response === "False") {
    alertMessage('movie not found', 'error')
    return
  }

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

  alertMessage("success", 'success')
})



const myModalEl = document.getElementById('exampleModal')

myModalEl.addEventListener('show.bs.modal', event => {
  console.log("hello");
  document.getElementById('exampleModalLabel').textContent = movie.Title
  document.querySelector("#cardTitle").textContent = movie.Title
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



function alertMessage(message, type) {
  const toastBody = document.querySelector("#toast-body")
  let toast = document.getElementById('toast')

  toastBody.textContent = message
  
  if (type === "success") {
    toast.style.border = '1px solid green'
    toastBody.style.color ='green'
  } else if (type === "error") {
    toast.style.border = '1px solid red'
      toastBody.style.color ='red'
  }

  $('.toast').toast('show')
}





const a = [1, 2, 3]
console.log(a[2]);
console.log(a.at(-1));
























// console.log(titanic);
// console.log(titanic.Director);
// console.log(titanic["Director"]);
