<script>
  import Header from '$lib/Header/index.svelte';
  import Footer from '$lib/Footer/index.svelte';
	import '../app.css';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
