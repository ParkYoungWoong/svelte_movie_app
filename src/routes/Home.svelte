<script>
  import Headline from '~/components/Headline.svelte';
  import Search from '~/components/Search.svelte';
  import MovieList from '~/components/MovieList.svelte';
  import { initMovies } from '~/store/movie';

  initMovies();
</script>

<div class="container">
  <Headline />
  <Search />
  <MovieList />
</div>
