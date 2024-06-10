const moviesContainer = document.getElementById('movies-container');
const dataTypeSelect = document.getElementById('data-type');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');

let currentPage = 1;
let currentDataType = 'movie';

dataTypeSelect.addEventListener('change', () => {
    currentDataType = dataTypeSelect.value;
    currentPage = 1;
    displayMovies();
});

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayMovies();
    }
});

nextPageButton.addEventListener('click', () => {
    currentPage++;
    displayMovies();
});

async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
        moviesContainer.innerHTML = `<p>Spiacente, si è verificato un problema. Per favore riprova più tardi.</p>`;
    }
}

async function displayMovies() {
    const endpoint = `https://api.themoviedb.org/3/${currentDataType}/popular?api_key=${API_KEY}&page=${currentPage}`;
    const data = await fetchData(endpoint);
    moviesContainer.innerHTML = ''; 
    if (data && data.results) {
        data.results.forEach(item => {
            const card = createMovieCard(item);
            moviesContainer.appendChild(card);
        });
    }
}

function createMovieCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    const title = currentDataType === 'movie' ? item.title : item.name;
    const rating = item.vote_average;
    const posterPath = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'placeholder.jpg'; 

    card.innerHTML = `
        <img src="${posterPath}" alt="${title}">
        <h2>${title}</h2>
        <p>Valutazione: ${rating}</p>
    `;
    return card;
}


displayMovies();
