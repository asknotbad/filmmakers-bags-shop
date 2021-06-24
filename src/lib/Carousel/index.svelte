<script>

</script>

<section>
  <div class="carousel">
    <div class="slide">
      <slot name="img">
        <img src="media/bag05.jpg" alt="">
      </slot>
      <div class="description">
        <slot name="description">
          Simply the best
        </slot>
      </div>
    </div>
  </div>
  <div class="controls">
    <div class="dot active"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</section>

<style>
  section {
    width: 100%;
    position: relative;
  }
  .slide {
    position: relative;
    height: calc(100vh - 120px);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .description {
    position: absolute;
    left: 0;
    top: 30%;
    background: #fff;
    z-index: 1;
    width: 100%;
    text-align: center;
    font-weight: 700;
    letter-spacing: .1em;
    font-size: 24px;
    text-transform: uppercase;
    padding: 8px;
    color: #00406F;
  }
  .controls {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dot {
    margin: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background: #ccc;
    transition: .25s ease-in-out;
  }
  .dot.active {
    background: #fff;
    transform: scale(1.2);
  }
</style>
