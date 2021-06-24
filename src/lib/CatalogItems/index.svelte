<script>
  import { catalog } from "$lib/stores";
  import CatalogItemCard from '$lib/CatalogItemCard/index.svelte';

  let items = [];
  $: items = $catalog;
</script>

{#if items.length > 0}
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="items">
            {#each items as item}
              <CatalogItemCard {item} />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 48px 0;
  }
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;;
  }
</style>
