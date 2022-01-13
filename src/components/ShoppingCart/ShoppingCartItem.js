import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

export const ShoppingCartItem = (prop) => {
  const {price, title, category, id} = prop.item
  return (
    <Link style={{color: 'black', textDecoration: 'none'}} to={`/cartproduct/${id}`} >
      <MenuItem onClick={prop.handleMenuClose}>{`${title} - ${category} - $${price}`}</MenuItem>
    </Link>
  )
};
