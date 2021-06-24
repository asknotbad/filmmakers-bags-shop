import { toSlug } from '$lib/helpers';

const catalogItems = [
  {
    name: 'Oasis',
    photo: 'media/bag01.jpg',
    slug: toSlug('Oasis'),
    price: 185,
  },
  {
    name: 'Gargano',
    photo: 'media/bag02.jpg',
    slug: toSlug('Gargano'),
    price: 274,
  },
  {
    name: 'Sorbonne',
    photo: 'media/bag03.jpg',
    slug: toSlug('Sorbonne'),
    price: 97,
  },
  {
    name: 'Leuca',
    photo: 'media/bag04.jpg',
    slug: toSlug('Leuca'),
    price: 394,
  },
];

export { catalogItems };
