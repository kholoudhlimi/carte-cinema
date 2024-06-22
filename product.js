

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");
const apiKey = "4ccef685";

const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        let movie = data;
        let Myhtml = `
         <a href="./storage.html?id=§{movie.imdbID}"
            <div class="cont">
                <h2>${movie.Title}</h2> 
                <p>Year: ${movie.Year}</p> 
                <img src="${movie.Poster}" alt="${movie.Title} Poster">
            </div>
             </a>`;
        document.getElementById('card').innerHTML += Myhtml;
        document.getElementById('card').addEventListener('click', () => {
            localStorage.setItem('Movie', JSON.stringify(movie));
        });
    })
    .catch(error => console.error("Error", error));
