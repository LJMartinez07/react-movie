import Home from '../pages/home';
import Movies from '../pages/movies';
import TvShows from '../pages/tvShows';
import Movie from '../pages/movie';
import Tv from '../pages/tv';

import NotFound from '../pages/error';
export default [
    {
        path: '/react-movie/home',
        component: Home,
    },

    {
        path: '/react-movie/movies',
        component: Movies,
    },
    {
        path: '/react-movie/movie',
        component: Movie,
    },
    {
        path: '/react-movie/tv/:id',
        component: Tv,
    },
    {
        path: '/react-movie/tvshows',
        component: TvShows,
    },
    {
        path: '/react-movie/404',
        component: NotFound,
    },
];
