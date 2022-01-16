const baseUrl = process.env.REACT_APP_FAKE_STORE_API;
const productsUrl = `${baseUrl}/products`;

const routes = {
  getAllProducts: () => productsUrl,
  getProductsById: (idProduct) => `${productsUrl}/${idProduct}`,
  addProduct: () => productsUrl,
  getAllCategories: () => `${productsUrl}/categories`,
  getProductsByCategory: (category) => `${productsUrl}/category/${category}`
};

export default routes;
