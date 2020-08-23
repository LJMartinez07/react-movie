
import Home from '../pages/home'
import Movies from '../pages/movies'
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
    path: '/404',
    component: NotFound,
  }
];