import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import db from "../../app/db/db";
import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { useSelector } from "react-redux";

export const ShoppingCart = (props) => {
  // const [productsCart, setProductsCart] = useState([]);

  const productsCart = useSelector((state) => state.cartReducer.list)

  // useLiveQuery(async () => {
  //   const productsDB = await db.cart.toArray();
  //   setProductsCart(productsDB);
  // });

  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={props.menuId}
      aria-haspopup="true"
      onClick={props.handleProfileMenuOpen}
      color="inherit"
    >
      <Badge badgeContent={productsCart.length} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
