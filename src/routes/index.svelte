<script>
  import Carousel from '$lib/Carousel/index.svelte';
  import TextSection from '$lib/TextSection/index.svelte';
</script>

<svelte:head>
	<title>Bagon</title>
</svelte:head>

<Carousel />

<TextSection>
  <h2 slot="header">
    Handmade & Made in Italy
  </h2>
  <div slot="content">
    <p>
      L’atelier Maria La Rosa, da oltre trent’anni, crea borse, calze e accessori realizzati a mano, utilizzando antichi telai e altre tecniche artigianali.
    </p>
    <p>
      Capi esclusivi e raffinati, dall’animo slow e senza tempo, frutto di una ricerca stilistica multidisciplinare che coniuga arte e moda, tradizione e contemporaneità, sostenibilità e costume. Prodotti in Italia in edizione limitata e venduti in tutto il mondo in store selezionati.
    </p>
  </div>
</TextSection>

<Carousel>
  <div slot="img">
    <img src="media/bag06.jpg" alt="">
  </div>
  <div slot="description">
    Spring - Summer 2021
  </div>
</Carousel>

<TextSection>
  <h2 slot="header">
    Storia
  </h2>
  <div slot="content">
    <p>
      In una corte della più vecchia e autentica Milano si nasconde un mondo fatto di passione e creatività. Benvenuti nell’atelier Maria La Rosa
    </p>
    <p>
      Un processo creativo completamente manuale, sintesi di una continua ricerca stilistica multidisciplinare che attinge dal passato e guarda al futuro.
    </p>
  </div>
</TextSection>

<style>

</style>
