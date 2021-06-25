<script context="module">
	export async function load({ page, fetch, session, context }) {
		const url = `/shop/${page.params.slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					catalogItem: await res.json()
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
  import CatalogItem from '$lib/CatalogItem/index.svelte';
  export let catalogItem;
</script>

<CatalogItem item={catalogItem} />
