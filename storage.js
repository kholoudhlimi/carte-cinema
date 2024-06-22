
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");


const movie = JSON.parse(localStorage.getItem('Movie'));

    let Dom= `
        <div>
            <h2>${movie.Title}</h2>
            <img class="left-aligned" src="${movie.Poster}" alt="${movie.Title} Poster"> 
            <p>Year: ${movie.Year}</p> 

            <p>Plot: ${movie.Plot}</p>
            <p>Director: ${movie.Director}</p>
            <p>Actors: ${movie.Actors}</p>
            <p>Genre: ${movie.Genre}</p>
        </div>`;

        document.getElementById('filmResume').innerHTML += Dom







































