import fetch from 'node-fetch';

const baseUrl = "https://api.themoviedb.org/3";

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.status_message || "TMDB request failed");
    }
    return response.json();
}

// Discover (homepage)
export const getMovies = async () => {
    return fetchJson(
    `${baseUrl}/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
};

// Single movie details
export const getMovie = async (id) => {
  return fetchJson(
    `${baseUrl}/movie/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
  );
};

// Upcoming
export const getUpcomingMovies = async () => {
  return fetchJson(
    `${baseUrl}/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
  );
};

// Genres
export const getGenres = async () => {
  return fetchJson(
     `${baseUrl}/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
  );
};

// Top rated
export const getTopRatedMovies = async () => {
  return fetchJson(
    `${baseUrl}/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
  );
};

// Trending (week)
export const getTrendingThisWeek = async () => {
  return fetchJson(
    `${baseUrl}/trending/movie/week?api_key=${process.env.TMDB_KEY}`
  );
};

// Credits (cast/crew)
export const getMovieCredits = async (id) => {
  return fetchJson(
    `${baseUrl}/movie/${id}/credits?api_key=${process.env.TMDB_KEY}&language=en-US`
  );
};

// Person details
export const getPerson = async (id) => {
  return fetchJson(
    `${baseUrl}/person/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
  );
};