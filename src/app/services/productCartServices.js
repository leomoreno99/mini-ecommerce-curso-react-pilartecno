import db from '../db/db'

export const getProductById = async (id) => {

    const productFromDB = await db.cart.get(Number(id))
    return productFromDB
}

export const getAllProducts = async () => {
    const allProductsFromDB = await db.cart.toArray();
    return allProductsFromDB;
}

export const getTotalPrice = (productsCart) => {
    const total = productsCart?.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price
    },0)
    return total
  }