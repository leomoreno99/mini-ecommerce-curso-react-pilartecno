import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../app/services/productService";
import { Product } from "./Product";


export const ListProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getAllProducts()
        .then(data => setProducts(data))
    },[])

    return(
        <Box sx={{ m: "7%", mt:"50px", flexGrow: 1 }}>
            <Grid container spacing={2} >
                {products.map((product, index) => (
                    <Product key={index} product={product}/>
                ))}
            </Grid>
        </Box>
    )
}