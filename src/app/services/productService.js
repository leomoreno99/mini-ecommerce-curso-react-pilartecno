import api from "../clients/api"
import routes from "../routes/fakeStoreRoutes"

export const getAllProducts = async () => {
    return api.get(routes.getAllProducts())
}

export const getProductsById = async (idProduct) => {
    return api.get(routes.getProductsById(idProduct))
}

export const addNewProduct = async (product) => {
    return api.post(routes.addProduct(), product)
}

export const getAllCategories = async () => {
    return api.get(routes.getAllCategories())
}

export const getProductBycategory = async (category) => {
    return api.get(routes.getProductsByCategory(category))
}