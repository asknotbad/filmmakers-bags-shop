<script>
  import PayMethods from '$lib/PayMethods/index.svelte';
</script>

<footer>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h3>
          Information
        </h3>
        <ul>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/">
              Press
            </a>
          </li>
          <li>
            <a href="/contacts">
              Contact us
            </a>
          </li>
          <li>
            <a href="/">
              Store location
            </a>
          </li>
        </ul>
      </div>
      <div class="col-6">
        <h3>
          Service
        </h3>
        <ul>
          <li>
            <a href="/">
              Customer service
            </a>
          </li>
          <li>
            <a href="/">
              My account
            </a>
          </li>
          <li>
            <a href="/">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="/">
              Cookie policy
            </a>
          </li>
          <li>
            <a href="/">
              Terms & condotions
            </a>
          </li>
          <li>
            <a href="/">
              Shipping & returns
            </a>
          </li>
        </ul>
      </div>
      <div class="col-12">
        <PayMethods />
      </div>
      <div class="col-12">
        <div class="logo">
          La Bagon<sup>®</sup>
        </div>
        <div class="contact">
          CONTACT INFO: VIA LOMELLINA, 38 20734 MILAN INFO@BAGON.COM +39 02 70127483
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    position: sticky;
    top: 100%;
    background: #fff;
    padding: 25px 0 50px 0;
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }
  h3 {
    color: #00406F;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: underline;
  }
  .logo {
    text-align: center;
    white-space: nowrap;
    color: #00406F;
    font-family: serif;
    font-weight: 600;
    font-style: italic;
    font-size: 36px;
    letter-spacing: .05em;
    text-decoration: none;
    margin-bottom: 32px;
  }
  sup {
    font-style: normal;
    font-size: 16px;
    display: inline-block;
    transform: translateY(-4px);
  }
  .contact {
    text-transform: uppercase;
    text-align: center;
    padding: 0 32px;
    font-size: 14px;
    font-weight: 600;
  }
  ul {
    margin: 32px 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }
  a {
    color: #59b6d0;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 12px;
  }
</style>
