import { Divider, Menu, MenuItem } from "@mui/material";
import { ShoppingCartItem } from "./ShoppingCartItem";
// import db from "../../app/db/db";
// import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTotalPrice } from "../../app/services/productCartServices";
import { useSelector } from "react-redux";

export const RenderMenu = (props) => {
  // const [productsCart, setProductsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const productsCart = useSelector((state) => state.cartReducer.list)

  // useLiveQuery(async () => {
  //   const productsDB = await db.cart.toArray();
  //   setProductsCart(productsDB);
  // });

  useEffect(() => {
    if (productsCart.length > 0) {
      setTotalPrice(getTotalPrice(productsCart));
    }
  }, [productsCart]);

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
      {productsCart.map((product) => (
        <ShoppingCartItem handleMenuClose={props.handleMenuClose} key={product.id} item={product} />
      ))}
      <Divider />
      <Link style={{ color: "black", textDecoration: "none" }} to="/purchase">
        <MenuItem onClick={props.handleMenuClose} style={{ fontWeight: "900", fontSize: "18px" }}>
          Total: ${totalPrice}
        </MenuItem>
      </Link>
    </Menu>
  );
};
