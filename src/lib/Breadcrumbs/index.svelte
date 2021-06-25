<script>
  export let links;
</script>

<nav>
  <div class="container">
    <div class="row">
      <div class="col-12">
        {#each links as link, i}
          <a href={link.url}>
            {link.text}
          </a>
          {#if i < links.length - 1}
            &#10095;
          {/if}
        {/each}
      </div>
    </div>
  </div>
</nav>

<style>
  nav {
    padding-top: 16px;
    color: #59b6d0;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }
  a {
    color: inherit;
    text-decoration: none;
    margin: 0 4px;
  }
  a:first-child {
    margin-left: 0;
  }
  a:last-child {
    margin-right: 0;
    color: #000;
  }
</style>
