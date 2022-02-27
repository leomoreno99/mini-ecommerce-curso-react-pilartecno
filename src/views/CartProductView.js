import React, { useEffect } from "react";
// import { getProductById } from "../app/services/productCartServices";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Button, Chip, Divider, Typography } from "@mui/material";
import { byId } from "../redux/actions/products/productsActions";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  color: theme.palette.text.secondary,
}));

const useStyle = makeStyles({
  item: {
    height: "600px",
    overflow: "hidden",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "100%",
    justifyContent: "space-between",
  },
});

export const CartProductView = ({ match }) => {
  const classes = useStyle();

  // const [productDetail, setProductDetail] = useState(null);

  // useEffect(() => {
  //   const { params } = match;
  //   getProductById(params.id)
  //     .then((productFromDB) => {
  //       setProductDetail(productFromDB);
  //     })
  //     .catch((e) => console.log(e));
  // }, [match]);

    const productDetail = useSelector((state) => state.productsReducer.productById)
    const dispatcher = useDispatch()

    useEffect(()=>{
      const { params } = match;
      dispatcher(byId(params.id))
  },[dispatcher, match]) 

  return (
    productDetail && (
      <Box sx={{ flexGrow: 1, margin: "0 7%", mt: "100px", maxWidth: "100%" }}>
        <Grid container maxWidth="100%">
          <Grid item xs={4}>
            <Item className={classes.description}>
              <Box variant="div">
                <Typography
                  variant="h5"
                  color="black"
                  fontWeight="900"
                  textAlign="start"
                >
                  {productDetail.title}
                </Typography>
                <Box variant="div" mt="10px" mb="20px" display="flex">
                  <Chip
                    label={productDetail.category}
                    color="error"
                    variant="outlined"
                  />
                </Box>
                <Divider />
                <Typography variant="body1" textAlign="start" mt="20px">
                  {productDetail.description}
                </Typography>
                <Typography
                  variant="h4"
                  color="#13C296"
                  textAlign="start"
                  mt="40px"
                  mb="40px"
                  fontWeight='900'
                >
                  ${productDetail.price}
                </Typography>
                <Divider />
              </Box>
              <Box variant="div" mt="60px" mb="100px">
                <Button variant="contained" color="error" size="large">
                  Comprar
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item className={classes.item}>
              <img className={classes.image} src={productDetail.image} alt='img'/>
            </Item>
          </Grid>
        </Grid>
      </Box>
    )
  );
};
