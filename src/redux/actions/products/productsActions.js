import { getAllProducts, getProductsById } from "../../../app/services/productService";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const CHANGE_NAME_FILTER = "CHANGE_NAME_FILTER";
export const GET_BY_ID = "GET_BY_ID";

// Actions creator
const getAllProductsAction = (products) => ({
  type: GET_ALL_PRODUCTS,
  payload: products,
});

const getProductByIdAction = (product) => ({
  type: GET_BY_ID,
  payload: product,
});

const filterProducts = (products) => ({
  type: FILTER_PRODUCTS,
  payload: products,
});

export const changeNameFilter = (nameFilter) =>({
    type: CHANGE_NAME_FILTER,
    payload: nameFilter
})

// Async actions
export const allProducts = () => {
  return async (dispatch) => {
    try {
      const products = await getAllProducts();
      dispatch(getAllProductsAction(products));
    } catch (e) {
      console.log(e);
    }
  };
};

export const byId = (id) => {
  return async (dispatch) => {
    try {
      const product = await getProductsById(id);
      dispatch(getProductByIdAction(product));
    } catch (e) {
      console.log(e);
    }
  };
};

export const filterByCategory = (category) => {
  return (dispatch, getState) => {
    const state = getState();
    const { products } = state.productsReducer;
    const filtered = products.filter(
      (product) => product.category === category
    );
    dispatch(filterProducts(filtered));
  };
};
