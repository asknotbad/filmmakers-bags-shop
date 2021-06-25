<script>
  import Breadcrumbs from '$lib/Breadcrumbs/index.svelte';
  import { numSpace } from '$lib/helpers';
  import { itemsInCart } from "$lib/stores";

  let subTotal = 0;

  $itemsInCart.map(el => {
    subTotal += el.price;
  });

  let isPayed = false;

  function checkout() {
    itemsInCart.set([]);
    isPayed = !isPayed;
  };

  let breadcrumbs = [
    {
      url: '/',
      text: 'Home',
    },
    {
      url: '/cart',
      text: 'Cart',
    },
    {
      text: 'Checkout',
    },
  ];

</script>

<Breadcrumbs links={breadcrumbs} />

<section>
  {#if $itemsInCart.length > 0}
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>
            Subtotal: <span>€ {numSpace(subTotal)}</span>
          </h2>
        </div>
        <div class="col-12">
          Contact information
        </div>
        <div class="col-12">
          <form on:submit|preventDefault>
            <input type="email" placeholder="Email">
            <input type="text" placeholder="First name">
            <input type="text" placeholder="Last name">
            <input type="text" placeholder="Shipping address">
          </form>
        </div>
        <div class="col-12">
          <button on:click|preventDefault={checkout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  {/if}
  {#if isPayed}
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="done">
            Thank you for your purchase!
            <a class="button" href="/">
              Go to main page
            </a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  section {
    padding: 50px 0;
    font-size: 18px;
  }
  h2 {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    color: #00406F;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 32px;
  }
  form {
    margin: 32px 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  input {
    width: 100%;
    height: 32px;
    padding: 0 16px;
    border: 1px solid #59b6d0;
    border-radius: 4px;
    font-size: 16px;
  }
  .done {
    text-align: center;
    font-size: 32px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 64px;
  }
  button,
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
    font-size: 16px;
    padding: 0 16px;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: .1em;
    text-decoration: none;
  }
</style>
