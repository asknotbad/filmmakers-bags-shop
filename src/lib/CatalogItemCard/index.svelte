<script>
  import { numSpace } from '$lib/helpers';

  export let item;
</script>

{#if item}
  <a href="/catalog/{item.slug}">
    <img src={item.photo} alt="">
    <h3>
      {item.name}
    </h3>
    <div class="price">
      € {numSpace(item.price)}
    </div>
  </a>
{/if}

<style>
  a {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px min-content min-content;
    text-align: center;
    gap: 8px;
    text-decoration: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  h3 {
    color: #59b6d0;
    font-family: serif;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    font-weight: 500;
  }
  .price {
    color: #8b6e60;
    font-weight: 600;
  }
</style>
