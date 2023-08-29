import { apiKey } from './config.js';

export let movieArray;

export async function getMovies() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?list=most_pop_movies&genre=Action&info=base_info';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, ...[options]);
        const data = await response.json();
        return movieArray = data.results;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch movies ' + error.message);
    }
}


// function to populate movieArray 

export const populateMovieArray = async () => {
    try {
        movieArray = await getMovies();
    } catch (error) {
        console.log(error);
    }
}