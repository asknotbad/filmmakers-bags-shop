<script>
	import { page } from '$app/stores';
  import heart from './heart.svg';
  import bag from './bag.svg';
  import { yearFrom } from '$lib/helpers';
  import { itemsInCart } from '$lib/stores';

  let isOpen = false;

  function toggleOpen() {
    isOpen = !isOpen;
  }

  function closeNav() {
    isOpen = false;
  }

</script>

<!-- <li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li> -->
<header>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="nav">
          <button on:click|preventDefault={toggleOpen}>
            <span class:open={isOpen}></span>
            <span class:open={isOpen}></span>
            <span class:open={isOpen}></span>
          </button>
          <a href="/" class="logo" on:click={closeNav}>
            La Bagon<sup>®</sup>
          </a>
          <a href="/favorites" class="favorites">
            <img src={heart} alt="">
          </a>
          <a href="/cart" class="cart">
            <img src={bag} alt="">
            <div class="count">
              {$itemsInCart.length}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

<div class="bg" class:open={isOpen}></div>

<nav class:open={isOpen}>
  <ul>
    <li>
      <a class:active={$page.path === '/'} href="/" on:click={closeNav}>Home</a>
    </li>
    <li>
      <a class:active={$page.path === '/shop'} href="/shop" on:click={closeNav}>Shop</a>
    </li>
    <li>
      <a class:active={$page.path === '/about'} href="/about" on:click={closeNav}>About</a>
    </li>
    <li>
      <a class:active={$page.path === '/boutiques'} href="/boutiques" on:click={closeNav}>Boutiques</a>
    </li>
    <li>
      <a class:active={$page.path === '/contacts'} href="/contacts" on:click={closeNav}>Contacts</a>
    </li>
    <li class="light lined">
      <a class:active={$page.path === '/'} href="/" on:click={closeNav}>Login</a>
    </li>
    <li class="light">
      <a class:active={$page.path === '/'} href="/" on:click={closeNav}>Register</a>
    </li>
  </ul>
  <a href="/" class="copy">
    &copy; {yearFrom(2016)}, La Bagon
  </a>
</nav>

<style>
  header {
    background: rgba(255,255,255,.9);
    padding: 8px 0;
    z-index: 10;
    position: sticky;
    top: 0;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }
  .nav {
    display: grid;
    grid-template-columns: min-content 1fr min-content min-content;
    gap: 16px;
    align-items: center;
  }
  button {
    display: grid;
    grid-template-columns: 1fr;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    width: 32px;
    gap: 4px;
    cursor: pointer;
  }
  button span {
    display: block;
    width: 100%;
    height: 4px;
    background: #59b6d0;
    transition: .25s ease-in-out;
    margin: 0 auto;
  }
  button span:nth-of-type(1).open {
    transform: translate(0%, 200%) rotate(45deg);
  }
  button span:nth-of-type(2).open {
    width: 0;
  }
  button span:nth-of-type(3).open {
    transform: translate(0%, -200%) rotate(-45deg);
  }
  .logo {
    text-align: center;
    white-space: nowrap;
    color: #00406F;
    font-family: serif;
    font-weight: 500;
    font-style: italic;
    font-size: 32px;
    letter-spacing: .05em;
    text-decoration: none;
  }
  sup {
    font-style: normal;
    font-size: 14px;
    display: inline-block;
    transform: translateY(-4px);
  }
  .nav a {
    display: block;
    z-index: 1;
    position: relative;
  }
  .favorites {
    width: 18px;
    height: 18px;
    margin-top: 4px;
  }
  .favorites img,
  .cart img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  .cart {
    width: 38px;
    height: 38px;
    padding: 4px;
    text-decoration: none;
  }
  .count {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    min-width: 16px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    padding: 4px;
    border-radius: 8px;
    background: #59b6d0;
    pointer-events: none;
  }
  .bg {
    pointer-events: none;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0);
    z-index: 8;
    width: 100%;
    height: 100vh;
    transition: .25s ease-in-out;
  }
  .bg.open {
    background: rgba(0,0,0,.5);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    transition: .25s ease-in-out;
    height: 100vh;
    margin-right: auto;
    width: auto;
    z-index: 9;
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    padding: 96px 16px 16px 16px;
    white-space: nowrap;
    min-width: 75%;
    pointer-events: none;
    transform: translateX(-110%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    letter-spacing: .05em;
  }
  nav.open {
    pointer-events: all;
    transform: translateX(0);
  }
  nav a {
    text-transform: uppercase;
    text-decoration: none;
    color: #00406F;
    font-size: 18px;
    font-weight: 600;
  }
  .light {
    position: relative;
  }
  .lined {
    padding-top: 32px;
  }
  .lined::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #59b6d0;
    position: absolute;
    left: 0;
    top: 8px;
  }
  .light a {
    color: #59b6d0;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .copy {
    margin-left: auto;
    text-align: right;
    font-style: italic;
    text-transform: none;
    font-weight: 500;
    font-family: serif;
    font-size: 16px;

  }
</style>
