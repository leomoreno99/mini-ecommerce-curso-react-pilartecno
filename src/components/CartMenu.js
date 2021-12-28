import { MenuItem } from "@mui/material";


export const CartMenu = (prop) => {
  return <MenuItem onClick={prop.handleMenuClose}>{prop.item}</MenuItem>;
};
