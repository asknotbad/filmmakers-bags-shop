<script>
  import paypal from './logo_paypal.png';
  import visa from './logo_visa.png';
  import mastercard from './logo-mastercard.png';
  import amexpress from './logo_amexpress.png';
</script>

<section>
  <img src={paypal} alt="">
  <img src={visa} alt="">
  <img src={mastercard} alt="">
  <img src={amexpress} alt="">
</section>

<style>
  section {
    display: flex;
    padding: 25px 0;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 32px;
    margin: 0 16px;
  }
</style>
