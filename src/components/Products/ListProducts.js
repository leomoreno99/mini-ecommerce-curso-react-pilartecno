// import { ProductionQuantityLimitsRounded } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../app/services/productService";
import { allProducts } from "../../redux/actions/products/productsActions";
import { Product } from "./Product";


export const ListProduct = () => {
    // const [products, setProducts] = useState([])

    // useEffect(()=>{
    //     getAllProducts()
    //     .then(data => setProducts(data))
    // },[])

    const products = useSelector((state) => state.productsReducer.products)
    const dispatcher = useDispatch()


    useEffect(()=>{
        dispatcher(allProducts())
    },[dispatcher]) 
   

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