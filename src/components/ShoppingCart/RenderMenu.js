import { Divider, Menu, Typography } from "@mui/material"
import { ShoppingCartItem } from "./ShoppingCartItem"
import db from '../../app/db/db'
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const RenderMenu = (props) => {

  const [productsCart, setProductsCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useLiveQuery( async () => {
      const productsDB = await db.cart.toArray()
      setProductsCart(productsDB)
  })

  const getTotalPrice = () => {
    const total = productsCart?.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price
    },0)
    setTotalPrice(total)
  }

  useEffect(()=>{
    if(productsCart.length > 0){
      getTotalPrice()
    }
  },[productsCart])

    return (
        <Menu
          anchorEl={props.anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          id={props.menuId}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={props.isMenuOpen}
          onClose={props.handleMenuClose}
        >
         {productsCart.map((product)=>  <ShoppingCartItem key={product.id} item={product}/>)}
         <Divider />
        <Link to="/purchase" >
        <Typography variant="h6" pl="16px" >
          Total: ${totalPrice}
        </Typography>
        </Link>
        </Menu>
    )
}