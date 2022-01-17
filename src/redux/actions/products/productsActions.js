import { getAllProducts } from "../../../app/services/productService"

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"

// Actions creator
const getAllProductsAction = (products) => ({type: GET_ALL_PRODUCTS, payload: products})

// Async actions
export const allProducts = () => {
    return async dispatch => {
        try {
            const products = await getAllProducts()
            dispatch(getAllProductsAction(products))
        } catch (e) {
            console.log(e)
        }
    }
}