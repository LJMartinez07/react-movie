
import Home from '../pages/home'
import Movies from '../pages/movies'
import Tv from '../pages/tv'


import NotFound from '../pages/error';
export default [
  {
    path: '/home',
    component: Home
  },

  {
    path: '/movies',
    component: Movies
  },
  {
    path: '/tv',
    component: Tv
  },
  {
    path: '/404',
    component: NotFound
  }
];