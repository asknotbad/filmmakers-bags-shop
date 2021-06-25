<script>
  import Breadcrumbs from '$lib/Breadcrumbs/index.svelte';
  import Cart from '$lib/Cart/index.svelte';

  let breadcrumbs = [
    {
      url: '/',
      text: 'Home',
    },
    {
      text: 'Cart',
    },
  ];

</script>

<Breadcrumbs links={breadcrumbs} />

<Cart />
