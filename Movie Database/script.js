import movies from "./movieData.js";

// Checking if import works as expected
console.log(`Test: ${movies[0].title}`);

// To add new movie to the collection
const addMovie = (collection, input) => {
  // To avoid adding existing ones
  const duplicate = collection.some((movie) => movie.title === input.title);

  if (duplicate) {
    return `Already in the collection!`;
  } else {
    collection.push(input);
    return `Successfully added to the collection!`;
  }
};

const newMovie = {
  title: "Interstellar",
  director: "Christopher Nolan",
  releaseYear: 2014,
  rating: 8.6,
};
console.log(addMovie(movies, newMovie));
console.log(movies);

// Filter movies by rating
const filterMoviesByRating = (minRating) => {
  return movies.filter((movie) => movie.rating >= minRating);
};
console.table(filterMoviesByRating(9.1));

// Filter movies by year
const filterMoviesByYear = (year) => {
  return movies.filter((movie) => movie.releaseYear >= year);
};

console.log(filterMoviesByYear(2000));

// To find highest rated movie
const getTopRatedMovie = () => {
  return movies.reduce((movie, maxRating) => {
    return movie.rating > maxRating.rating ? movie : maxRating;
  });
};

const topMovie = getTopRatedMovie();
console.log(
  `Top-rated movie: ${topMovie.title} with a rating of ${topMovie.rating}`
);

// Sort movies alphabetically
const sortMoviesAlphabetically = () => {
  movies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
};

sortMoviesAlphabetically();
console.log("Movies sorted alphabetically:");
movies.forEach((movie) => {
  console.log(`${movie.title} (${movie.releaseYear})`);
});

// Display movies
const movieDisplay = () => {
  console.log("Movie Collection:");
  movies.forEach((movie) => {
    console.log(
      `- ${movie.title} ${movie.releaseYear}, directed by ${movie.director}, Rating: ${movie.rating}`
    );
  });
};

movieDisplay();
