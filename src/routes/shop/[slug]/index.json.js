import { catalogItems } from '../_catalog';

export async function get({ params }) {
  const { slug } = params;

  let catalogItem;
  catalogItems.map(item => {
    if (item.slug === slug) {
      return catalogItem = item;
    };
  });

  return {
    body: catalogItem,
  };
};
