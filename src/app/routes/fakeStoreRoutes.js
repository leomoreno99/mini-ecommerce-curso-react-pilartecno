const baseUrl = process.env.REACT_APP_FAKE_STORE_API;
const productsUrl = `${baseUrl}/products`;

const routes = {
  getAllProducts: () => productsUrl,
  getProductsById: (idProduct) => `${productsUrl}/${idProduct}`,
  addProduct: () => productsUrl,
};

export default routes;
