<script>
  import Carousel from '$lib/Carousel/index.svelte';
  import TextSection from '$lib/TextSection/index.svelte';
  import LeadForm from '$lib/LeadForm/index.svelte';
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
      For over than thirty years, Maria La Rosa atelier has created bags, socks and accessories made with artisan techniques, using ancient loom and other manual workmanships.
    </p>
    <p>
      Exclusive and refined garments, with a slow and timeless soul, born from a multidisciplinary stylistic research which conjugates art and fashion, tradition and contemporaneity, sustainability and usage. Produced in Italy, in limited editions and sold all over the world, in selected stores.
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
    History
  </h2>
  <div slot="content">
    <p>
      A world of passion and creativity is hidden in a courtyard in the oldest and most authentic Milan. Welcome to the Maria La Rosa atelier
    </p>
    <img src="media/bag02.jpg" alt="">
    <p>
      A completely manual creative process, the synthesis of a continuous multidisciplinary stylistic research that draws from the past and looks to the future.
    </p>
    <img src="media/bag07.jpg" alt="">
    <p>
      Vogue, Elle, Marie Claire and Vanity Fair, Harper's, Bazaar, W Magazine, Dazen ... La Bagon on the pages of fashion magazines.
    </p>
  </div>
</TextSection>

<LeadForm />

<style>

</style>
