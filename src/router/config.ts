import Home from '../pages/home';
import Movies from '../pages/movies';
import TvShows from '../pages/tvShows';
import Movie from '../pages/movie';
import Tv from '../pages/tv';

import NotFound from '../pages/error';
export default [
    {
        path: '/home',
        component: Home,
    },

    {
        path: '/movies',
        component: Movies,
    },
    {
        path: '/movie',
        component: Movie,
    },
    {
        path: '/tv',
        component: Tv,
    },
    {
        path: '/tvshows',
        component: TvShows,
    },
    {
        path: '/404',
        component: NotFound,
    },
];
