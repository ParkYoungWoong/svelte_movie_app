import Home from './Home.svelte';
import About from './About.svelte';
import Movie from './Movie.svelte';
import NotFound from './NotFound.svelte';

const routes = {
  '/': Home,
  '/movie/:id': Movie,
  '/about': About,
  '*': NotFound,
};

export default routes;
