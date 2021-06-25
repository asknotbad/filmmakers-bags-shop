<script>
  import { itemsInCart } from "$lib/stores";
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
          {/if}
        </div>
        <div class="continue">
          <a class="button" href="/shop">
            Continue shopping
          </a>
        </div>
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
</style>
