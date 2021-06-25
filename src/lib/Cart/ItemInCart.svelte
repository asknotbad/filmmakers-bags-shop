<script>
  import { numSpace } from '$lib/helpers';

  export let item;

  function deleteItem() {
    item = null;
  };
</script>

{#if item}
  <article>
    <img src={item.photo} alt="">
    <div class="params">
      <h3>
        {item.name}
      </h3>
      <div class="count">
        Quantity: <b>{item.count}</b>
      </div>
      <div class="price">
        € {numSpace(item.price * item.count)}
      </div>
      <button on:click|preventDefault={deleteItem}>
        Remove
      </button>
</div>
  </article>
{/if}

<style>
  article {
    display: grid;
    grid-template-columns: 30% 1fr;
    gap: 16px;
  }
  .params {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: auto;
  }
  h3 {
    color: #00406F;
    font-family: serif;
    font-style: italic;
    font-weight: 500;
    letter-spacing: .05em;
    font-size: 22px;
  }
  .count {
    color: #59b6d0;
    font-size: 14px;
  }
  .price {
    color: #8b6e60;
    font-weight: 600;
    font-size: 24px;
  }
  button {
    margin: 0;
    height: 32px;
    font-size: 14px;
    width: auto;
    margin-right: auto;
    color: #fff;
    text-transform: uppercase;
    border: 1px solid #00406F;
    background: #00406F;
    padding: 0 16px;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: .1em;
  }
</style>
