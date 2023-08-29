import { getMovies, movieArray } from "./api.js";

async function initialize() {
    await getMovies();
    printOut(movieArray);
}

 let printOut = async (list) => {
    list.forEach(element => {
        console.log(element);
        // call renderMovies function for each element
        renderMovies(element);
    });
}

initialize();


// function to create required html elements for each movie

function renderMovies(movie) {
    // Create a single film wrapper div
    const singleFilmWrapper = document.createElement('div');
    singleFilmWrapper.classList.add('single-film-wrapper');

    // Create a single film inner wrapper div
    const singleFilmInnerWrapper = document.createElement('div');
    singleFilmInnerWrapper.classList.add('single-film-inner-wrapper');

    // Create an image element
    const image = document.createElement('img');
    image.src = `${movie.primaryImage['url']}`;
    image.alt = `Title of movie: ${movie.titleText['text']}`;
    image.classList.add('movie-pic-small');

    // Create an h5 element for the film title
    const h5 = document.createElement('h5');
    h5.textContent = movie.titleText['text']; 

    // Create a p element for the movie year
    const p = document.createElement('p');
    p.textContent = movie.releaseYear['year'];
    p.classList.add('movie-year');

    // create a p element for the film description
    const paraDescription = document.createElement('p');
    paraDescription.textContent = movie.plot['plotText']['plainText'];
    paraDescription.classList.add('film-description');

    // create paragraph for rating
    const rating = document.createElement('p');
    rating.textContent = "IMDb Rating: " + movie.ratingsSummary['aggregateRating'] + "\nNumber of votes: " + movie.ratingsSummary['voteCount'];
    rating.classList.add('rating-text');

    // Append the elements to the DOM hierarchy
    singleFilmInnerWrapper.appendChild(image);
    singleFilmInnerWrapper.appendChild(h5);
    singleFilmInnerWrapper.appendChild(p);
    singleFilmInnerWrapper.appendChild(paraDescription);
    singleFilmInnerWrapper.appendChild(rating);

    singleFilmWrapper.appendChild(singleFilmInnerWrapper);

    // Append the entire single film wrapper to a container element (e.g., body)
    const container = document.querySelector('.random-movie-set'); // Replace with your container selector
    container.appendChild(singleFilmWrapper);


}

{/* <div class="single-film-wrapper">
                <div class="single-film-inner-wrapper">
                    <img src="./assets/pictures/testing-image.jpg" alt="" class="movie-pic-small">
                    <h5>Hellraiser 2: Revenge</h5>
             <p class="movie-year">2018</p>
       </div>
</div> */}




// array of objects will be likely approach to handling user input

// let formData = [
//     {
//       genre: 'action',
//       releaseYear: '2022',
//       language: 'english'
//     },
//     {
//       genre: 'comedy',
//       releaseYear: '2021',
//       language: 'french'
//     },
//     // more form submissions...
//   ];

// titleText.text