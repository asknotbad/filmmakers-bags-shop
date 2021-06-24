import { catalogItems } from './_catalog';

export async function get({ params }) {
  return {
    body: catalogItems,
  };
};
