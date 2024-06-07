
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const moviesContainer = document.getElementById('movies-container');

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    data.results.forEach(movie => {
    const card = createMovieCard(movie);
    moviesContainer.appendChild(card);
    });
})

.catch(error => {
    console.error('Error fetching data:', error);
    moviesContainer.innerHTML = `<p>Sorry, something went wrong. Please try again later.</p>`;
});

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p>Rating: ${movie.vote_average}</p>
`;

return card;
}
