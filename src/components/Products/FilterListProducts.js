import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getProductBycategory } from "../../app/services/productService";
import { Product } from "./Product";


export const FilterListProduct = ({match}) => {
    const [products, setProducts] = useState([])

    const {filter} = match.params

    useEffect(()=>{
        getProductBycategory(filter)
        .then(data => setProducts(data))
    },[filter])

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