import { MenuItem } from "@mui/material";


export const ShoppingCartItem = (prop) => {
  const {price, title, category} = prop.item
  return <MenuItem onClick={prop.handleMenuClose}>{`${title} - ${category} - $${price}`}</MenuItem>;
};
