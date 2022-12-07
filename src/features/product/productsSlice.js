import { PRODUCTS } from "../../app/shared/PRODUCTS";

export const selectAllProducts = () => {
  return PRODUCTS;
};
export const selectProductById = (id) => {
  return PRODUCTS.find((product) => product.id === id);
};
