import express from 'express';
import asyncHandler from 'express-async-handler';
import {getMovies, getMovie, getUpcomingMovies, getGenres, getTopRatedMovies, getTrendingThisWeek, getMovieCredits, getPerson} from '../tmdb-api'; 

const router = express.Router();

// Discover movies (homepage)
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

// Get upcoming movies
router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

// Get movie genres
router.get('/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

// Get top rated movies
router.get('/top-rated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));

// Get trending movies this week
router.get('/trending/week', asyncHandler(async (req, res) => {
    const trendingMovies = await getTrendingThisWeek();
    res.status(200).json(trendingMovies);
}));

 // Get movie details by id
router.get('/:id', asyncHandler(async (req, res) => {
    const movie = await getMovie(req.params.id);
    res.status(200).json(movie);
}));

// Get movie credits (cast & crew)
router.get('/:id/credits', asyncHandler(async (req, res) => {
    const credits = await getMovieCredits(req.params.id);
    res.status(200).json(credits);
}));

// Get person details
router.get('/person/:id', asyncHandler(async (req, res) => {
    const person = await getPerson(req.params.id);
    res.status(200).json(person);
}));

export default router;
