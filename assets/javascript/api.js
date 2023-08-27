import { apiKey } from './config.js';

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
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

