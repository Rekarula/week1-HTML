





const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favoriteMovieTitle");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(58, 58, 129, 0.708), rgba(131, 60, 60, 0.601)), 
    `url("${imageUrlInStorage}")`;
}


btn.addEventListener("click", () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem("title", movieTitleInput);
    localStorage.setItem("imageUrl", posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(58, 58, 129, 0.708), rgba(131, 60, 60, 0.601)),
    url("${posterUrlInput}")`; 
    movieTitle.value ="";
    moviePosterUrl.value = "";





});

