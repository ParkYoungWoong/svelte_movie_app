<script>
  import Router, { location } from 'svelte-spa-router';
  import Header from '~/components/Header.svelte';
  import routes from '~/routes/index';
  import Footer from '~/components/Footer.svelte';
  import { fade } from 'svelte/transition';
  const colors = [
    { id: 1, name: 'red', hex: '#FF0000' },
    { id: 2, name: 'green', hex: '#00FF00' },
    { id: 3, name: 'blue', hex: '#0000FF' },
    { id: 4, name: 'white', hex: '#FFFFFF' },
    { id: 5, name: 'black', hex: '#000000' },
  ];
</script>

<Header />
{#key $location}
  <div in:fade>
    <Router restoreScrollState {routes} />
  </div>
{/key}
<Footer />
