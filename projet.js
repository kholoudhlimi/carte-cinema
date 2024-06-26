
// let myButton = document.getElementById('mybtn');
// myButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     let reqMovie = document.getElementById('film-name').value;
//     let Apikey = '4ccef685';


//     const url = "http://www.omdbapi.com/?s=" + reqMovie + "&apikey=" + Apikey;

//     function getMymovie() {

//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 let movie = data.Search;

//                 for (myMovies of movie) {
//                     let Myhtml =`
//                     <a href="./product.html?id=${myMovies.imdbID}">
//                         <div class="ender"> 
//                         <h2> ${myMovies.Title}</h2>
//                         <p>Year : ${myMovies.Year}</p>
//                         <img class="fig" src="${myMovies.Poster}" alt="${myMovies.Title} Poster">
//                     </div>
//                          </a>`;
//                     document.getElementById("carte").innerHTML += Myhtml;
//                 }
//             })

//             .catch(error => console.error("Error", error));
//     }
//                       getMymovie()
                    
//                  });
                
                


//------------------------------------------------------------- async------------------------------------------------------
let myButton = document.getElementById('mybtn');
myButton.addEventListener('click', (e) => {
    e.preventDefault();
    let reqMovie = document.getElementById('film-name').value;
    let Apikey = '4ccef685';
const url = "http://www.omdbapi.com/?s=" + reqMovie + "&apikey=" + Apikey;

async function fetchMovies() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        let movies = data.Search;

        for (let movie of movies) {
            let Myhtml = `
                <a href="./product.html?id=${movie.imdbID}">
                    <div class="ender">
                        <h2>${movie.Title}</h2>
                        <p>Year: ${movie.Year}</p>
                        <img src="${movie.Poster}" alt="${movie.Title} Poster">
                    </div>
                </a>`;
            document.getElementById("carte").innerHTML += Myhtml;
        }
    } catch (error) {
        console.error("Error", error);
    }
}

fetchMovies();

})