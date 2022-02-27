import { CHANGE_NAME_FILTER, FILTER_PRODUCTS, GET_ALL_PRODUCTS, GET_BY_ID } from "../../actions/products/productsActions";

const initialState = {
  products: [],
  filterProducts: [],
  productById: {},
  nameFilter: "Filtrar"
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: payload };
    case FILTER_PRODUCTS:
      return { ...state, filterProducts: payload };
      case CHANGE_NAME_FILTER:
        return { ...state, nameFilter: payload };
      case GET_BY_ID:
        return { ...state, productById: payload };
      
    default:
      return state;
  }
};
