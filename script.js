const API_KEY = 'api_key=a37ffc7d0f58d1417019ffc8f414d002';
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = DOMAIN + '/discover/movie?sort_by=popularity.desc'

const searchButton = document.getElementById('search')
const movieInput = document.querySelector('.search')
const movieList = document.querySelector('.movie-list')

searchButton.addEventListener('click', async () => {
  let movie = movieInput.value;
  let response = await axios.get(DOMAIN+'search/movie?query='+movie+'api_key='+API_KEY)
  let searchedMovie = response.data.message;
  movieList.innerHTML = 
  `
    <img src=${response}>
    <h3>${movie}</h3>
  `
})

