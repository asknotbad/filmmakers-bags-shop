<script>
  import { numSpace } from '$lib/helpers';

  export let item;
</script>

<section>
  {#if item}
    <div class="container">
      <div class="row">
        <div class="col-12">
          <article>
            <img src={item.photo} alt="">
            <h2>
              {item.name}
            </h2>
            <div class="price">
              € {numSpace(item.price)}
            </div>
            <div class="buttons">
              <button>
                Add to cart
              </button>
            </div>
            <div class="description">
              {@html item.description}
            </div>
          </article>
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  section {
    padding: 50px 0;
  }
  article {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 350px min-content min-content min-content min-content;
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
  h2 {
    color: #59b6d0;
    font-family: serif;
    font-style: italic;
    font-weight: 700;
    letter-spacing: .05em;
    font-size: 40px;
  }
  .price {
    color: #8b6e60;
    font-weight: 600;
    font-size: 24px;
  }
  .buttons {
    padding: 32px 0;
  }
  button {
    margin: 0;
    margin-bottom: 16px;
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
  }
  .description {
    color: #8b6e60;
    font-size: 20px;
    line-height: 22px;
    font-family: serif;
    font-style: italic;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }
</style>
