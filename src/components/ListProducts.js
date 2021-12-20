import { Grid } from "@mui/material";
import json from "../examples/products.json";
import { Product } from "./Product";


export const ListProduct = () => {
    const products = json.products;

    return(
        <Grid container spacing={2}>
            {products.map((product, index) => (
                <Product key={index} product={product}/>
            ))}
        </Grid>
    )
}