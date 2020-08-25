import React, { useState, useEffect } from 'react';
import Main from '../../layouts/main';
import MovieService from '../../http/service/MovieService';
import { MovieListComponent } from '../../components/movie/movie-list';
const service = new MovieService();
export default () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        service.getPopularMovies().then((res) => {
            setMovies(res.results);
        });
    }, []);

    return (
        <Main>
            {/* <h1>Movies</h1> */}
            <MovieListComponent movieList={movies} />
        </Main>
    );
};
