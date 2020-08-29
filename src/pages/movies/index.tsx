import React from 'react';
import Main from '../../layouts/main';
import { MovieListComponent } from '../../components/movie/movie-list'
export default () => {
    const MOVIE_LIST_TYPE = {
        POPULAR: 'popular',
        TOP_RATED: 'top_rated'
    }
    return (
        <Main>
            <h1>Popular Movies</h1>
            <MovieListComponent type={MOVIE_LIST_TYPE.POPULAR} />
            <h1>Top Rated</h1>
            <MovieListComponent type={MOVIE_LIST_TYPE.TOP_RATED} />
        </Main>
    );
};
