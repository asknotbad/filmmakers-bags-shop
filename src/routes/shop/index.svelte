<script context="module">
	export async function load({ page, fetch, session, context }) {
		const url = `/shop.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					catalogItems: await res.json()
				}
			};
		};

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
  };
</script>

<script>
  import CatalogItems from '$lib/CatalogItems/index.svelte';
  import { catalog } from "$lib/stores";

  export let catalogItems;

  catalog.set(catalogItems);
</script>

<CatalogItems />

<style>

</style>
