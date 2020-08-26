import React from 'react';
import Main from '../../layouts/main';
import { MovieListComponent } from '../../components/movie/movie-list'
export default () => {
    const MOVIE_LIST = {
        POPULAR: 'popular',
        LATEST: 'top_rated'
    }
    return (
        <Main>
            <h1>Popular Movies</h1>
            <MovieListComponent KIND={MOVIE_LIST.POPULAR} />
            <h1>Top Rated</h1>
            <MovieListComponent KIND={MOVIE_LIST.LATEST} />
        </Main>
    );
};
