import React from 'react';
import Main from '../../layouts/main';
import MovieService from '../../http/service/MovieService'
const service = new MovieService();
export default () => {
    service.getPopularMovies()
    return (
        <Main>
            <h1>Movies</h1>
        </Main>
    );
};
