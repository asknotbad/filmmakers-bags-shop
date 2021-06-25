<script>
  import { numSpace } from '$lib/helpers';
  import ItemInCart from './ItemInCart.svelte';
  import { itemsInCart } from "$lib/stores";

  let items = $itemsInCart.filter((item, index, self) =>
    index === self.findIndex((el) => (
      el.slug === item.slug
    ))
  );

  items.map((item, i) => {
    let count = 0;
    $itemsInCart.map(el => {
      if (el.slug === item.slug) {
        count++;
      };
    });
    items[i].count = count;
  });

  let subTotal = 0;

  $itemsInCart.map(el => {
    subTotal += el.price;
  });
</script>

<section>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>
          Shopping cart
        </h2>
        <div class="contents">
          {#if $itemsInCart.length < 1}
            <p class="empty">
              Your shopping cart is empty.
            </p>
          {:else}
            <div class="header">
              Product
            </div>
            <div class="items">
              {#each items as item}
                <ItemInCart {item} />
              {/each}
            </div>
          {/if}
        </div>
        <div class="continue">
          <a class="button" href="/shop">
            Continue shopping
          </a>
        </div>
        {#if $itemsInCart.length > 0}
          <div class="header subtotal">
            Subtotal
          </div>
          <div class="price">
            € {numSpace(subTotal)}
          </div>

          <div class="continue">
            <a class="button" href="/cart/checkout">
              Proceed to checkout
            </a>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding: 50px 0;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    color: #00406F;
  }
  .contents {
    padding: 25px 0;
  }
  .empty {
    font-weight: 500;
    font-family: serif;
    font-style: italic;
    font-size: 20px;
    line-height: 24px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    color: #fff;
    text-transform: uppercase;
    border: 1px solid #00406F;
    background: #00406F;
    padding: 0 16px;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: .1em;
    text-decoration: none;
  }
  .header {
    padding: 8px 16px;
    text-transform: uppercase;
    background: #f4f3f9;
    font-weight: 700;
    font-size: 14px;
    color: #000;
    margin-bottom: 24px;
  }
  .subtotal {
    text-align: center;
    margin-bottom: 32px;
  }
  .items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .continue {
    margin-bottom: 32px;
  }
  .price {
    text-align: center;
    color: #00406F;
    font-weight: 700;
    font-size: 32px;
  }
</style>
