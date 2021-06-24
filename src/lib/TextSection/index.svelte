<script>

</script>

<section>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <slot name="header">
        </slot>
      </div>
      <div class="col-12 content">
        <slot name="content">
        </slot>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    text-align: center;
    color: #00406F;
    padding: 50px 0;
  }
  section :global(h2) {
    font-weight: 700;
    margin-bottom: 50px;
    font-size: 24px;
    text-transform: uppercase;
  }
  .content > :global(*) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    font-weight: 500;
    font-family: serif;
    font-style: italic;
    font-size: 20px;
    line-height: 24px;
  }
</style>
