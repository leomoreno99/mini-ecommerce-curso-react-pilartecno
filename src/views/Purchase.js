import React from "react";

import DetailCart from "../components/ShoppingCart/DetailCart";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Purchase = ({history}) => {
  
    const handleCancelButton = () =>  {
        history.push('/')
    }


  return (
    <Box sx={{ m: "0 7%", mt:"50px", flexGrow: 1 }}>
      <Typography
        variant="h4"
        fontWeight="900"
        mb='10px'
      >
        Carrito
      </Typography>
      <DetailCart />
      
      <Stack direction="row" justifyContent="flex-end" spacing={2} mt='80px' >
        <Button onClick={handleCancelButton} variant="outlined" color="error">
          Cancelar
        </Button>
        <Button variant="contained" color="success">
          Comprar
        </Button>
      </Stack>
    </Box>
  );
};
