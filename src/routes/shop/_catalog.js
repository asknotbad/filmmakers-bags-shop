import { toSlug } from '$lib/helpers';

const catalogItems = [
  {
    name: 'Oasis',
    photo: '/media/bag01.jpg',
    slug: toSlug('Oasis'),
    price: 185,
    description: `
      <p>
        Small woman handbag in raffia fabric, handmade on ancient loom. Compact in size, equipped with magnetic closure, it is capacious enough to carry with you the essential. Its minimal shape is enriched by the interesting and lively interlacement of the fabric, combined with the round leather handle made with the macramé technique. Entirely designed and made in Italy.
      </p>
      <p>
        Material: 100% viscose raffia
      </p>
      <p>
        Processing: Handwoven
      </p>
      <p>
        Lining: 100% cotton with patch pocket
      </p>
      <p>
        Handle: 100% leather
      </p>
      <p>
        Made in Italy
      </p>
      <p>
        Width 23 cm Height 17 cm Depth 5 cm
      </p>
    `,
  },
  {
    name: 'Gargano',
    photo: '/media/bag02.jpg',
    slug: toSlug('Gargano'),
    price: 274,
    description: `
      <p>
        Small woman handbag in raffia fabric, handmade on ancient loom. Compact in size, equipped with magnetic closure, it is capacious enough to carry with you the essential. Its minimal shape is enriched by the interesting and lively interlacement of the fabric, combined with the round leather handle made with the macramé technique. Entirely designed and made in Italy.
      </p>
      <p>
        Material: 100% viscose raffia
      </p>
      <p>
        Processing: Handwoven
      </p>
      <p>
        Lining: 100% cotton with patch pocket
      </p>
      <p>
        Handle: 100% leather
      </p>
      <p>
        Made in Italy
      </p>
      <p>
        Width 23 cm Height 17 cm Depth 5 cm
      </p>
    `,
  },
  {
    name: 'Sorbonne',
    photo: '/media/bag03.jpg',
    slug: toSlug('Sorbonne'),
    price: 97,
    description: `
      <p>
        Small woman handbag in raffia fabric, handmade on ancient loom. Compact in size, equipped with magnetic closure, it is capacious enough to carry with you the essential. Its minimal shape is enriched by the interesting and lively interlacement of the fabric, combined with the round leather handle made with the macramé technique. Entirely designed and made in Italy.
      </p>
      <p>
        Material: 100% viscose raffia
      </p>
      <p>
        Processing: Handwoven
      </p>
      <p>
        Lining: 100% cotton with patch pocket
      </p>
      <p>
        Handle: 100% leather
      </p>
      <p>
        Made in Italy
      </p>
      <p>
        Width 23 cm Height 17 cm Depth 5 cm
      </p>
    `,
  },
  {
    name: 'Leuca',
    photo: '/media/bag04.jpg',
    slug: toSlug('Leuca'),
    price: 394,
    description: `
      <p>
        Small woman handbag in raffia fabric, handmade on ancient loom. Compact in size, equipped with magnetic closure, it is capacious enough to carry with you the essential. Its minimal shape is enriched by the interesting and lively interlacement of the fabric, combined with the round leather handle made with the macramé technique. Entirely designed and made in Italy.
      </p>
      <p>
        Material: 100% viscose raffia
      </p>
      <p>
        Processing: Handwoven
      </p>
      <p>
        Lining: 100% cotton with patch pocket
      </p>
      <p>
        Handle: 100% leather
      </p>
      <p>
        Made in Italy
      </p>
      <p>
        Width 23 cm Height 17 cm Depth 5 cm
      </p>
    `,
  },
  {
    name: 'Achilllea',
    photo: '/media/bag06.jpg',
    slug: toSlug('Achilllea'),
    price: 372,
    description: `
      <p>
        Small woman handbag in raffia fabric, handmade on ancient loom. Compact in size, equipped with magnetic closure, it is capacious enough to carry with you the essential. Its minimal shape is enriched by the interesting and lively interlacement of the fabric, combined with the round leather handle made with the macramé technique. Entirely designed and made in Italy.
      </p>
      <p>
        Material: 100% viscose raffia
      </p>
      <p>
        Processing: Handwoven
      </p>
      <p>
        Lining: 100% cotton with patch pocket
      </p>
      <p>
        Handle: 100% leather
      </p>
      <p>
        Made in Italy
      </p>
      <p>
        Width 23 cm Height 17 cm Depth 5 cm
      </p>
    `,
  },
  {
    name: 'Poppy',
    photo: '/media/bag14.jpg',
    slug: toSlug('Poppy'),
    price: 473,
    description: `
      <p>
        Small woman handbag in raffia fabric, handmade on ancient loom. Compact in size, equipped with magnetic closure, it is capacious enough to carry with you the essential. Its minimal shape is enriched by the interesting and lively interlacement of the fabric, combined with the round leather handle made with the macramé technique. Entirely designed and made in Italy.
      </p>
      <p>
        Material: 100% viscose raffia
      </p>
      <p>
        Processing: Handwoven
      </p>
      <p>
        Lining: 100% cotton with patch pocket
      </p>
      <p>
        Handle: 100% leather
      </p>
      <p>
        Made in Italy
      </p>
      <p>
        Width 23 cm Height 17 cm Depth 5 cm
      </p>
    `,
  },
  {
    name: 'Stromboli',
    photo: '/media/bag12.jpg',
    slug: toSlug('Stromboli'),
    price: 120,
    description: `
      <p>
        Small woman handbag in raffia fabric, handmade on ancient loom. Compact in size, equipped with magnetic closure, it is capacious enough to carry with you the essential. Its minimal shape is enriched by the interesting and lively interlacement of the fabric, combined with the round leather handle made with the macramé technique. Entirely designed and made in Italy.
      </p>
      <p>
        Material: 100% viscose raffia
      </p>
      <p>
        Processing: Handwoven
      </p>
      <p>
        Lining: 100% cotton with patch pocket
      </p>
      <p>
        Handle: 100% leather
      </p>
      <p>
        Made in Italy
      </p>
      <p>
        Width 23 cm Height 17 cm Depth 5 cm
      </p>
    `,
  },
  {
    name: 'Sorbonne',
    photo: '/media/bag17.jpg',
    slug: toSlug('Sorbonne'),
    price: 580,
    description: `
      <p>
        Small woman handbag in raffia fabric, handmade on ancient loom. Compact in size, equipped with magnetic closure, it is capacious enough to carry with you the essential. Its minimal shape is enriched by the interesting and lively interlacement of the fabric, combined with the round leather handle made with the macramé technique. Entirely designed and made in Italy.
      </p>
      <p>
        Material: 100% viscose raffia
      </p>
      <p>
        Processing: Handwoven
      </p>
      <p>
        Lining: 100% cotton with patch pocket
      </p>
      <p>
        Handle: 100% leather
      </p>
      <p>
        Made in Italy
      </p>
      <p>
        Width 23 cm Height 17 cm Depth 5 cm
      </p>
    `,
  },
];

export { catalogItems };
