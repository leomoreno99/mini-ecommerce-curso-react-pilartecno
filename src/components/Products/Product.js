import * as React from "react";
// import db from "../../app/db/db"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/actions/cart/cartActions";

const useStyle = makeStyles({
  card: {
    "&:hover": {
      boxShadow: "0px 10px 10px rgb(0 0 0 / 20%);",
      cursor: "pointer",
    },
    borderRadius: "20px",
  },

  cardActions: {
    justifyContent: "flex-end"
  },

  "@media (max-width: 600px)": {
    backgroundCard: {
      background:
        "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
    },
  },
});



export const Product = ({ product }) => {
  const { title, image, price, description } = product;
  const classes = useStyle();

  const dispatcher = useDispatch()

  const addProductToCart = (item) => {
    // db.cart.add({
    //   title: title,
    //   price: price,
    //   category: category,
    //   description: description,
    //   image: image
    // })

    dispatcher(addItemToCart(item))
  }

  return (
    <Grid item xs={12} md={6}>
      <Card variant="outlined" className={classes.card} sx={{ maxWidth: "100%" }}>
        <Grid container>
          <Grid height={"15rem"} item xs={12} sm={6}>
            <CardMedia component="img" image={image} alt="green iguana" />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.backgroundCard}>
            <CardContent>
              <Typography
                fontWeight="900"
                gutterBottom
                variant="h5"
                component="div"
              >
                {title}
              </Typography>
              <Typography noWrap variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography
                marginTop="2rem"
                color="#13C296"
                gutterBottom
                variant="h5"
                component="div"
                fontWeight='900'
              >
                ${price}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} >
              <IconButton onClick={()=>addProductToCart(product)} color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon sx={{ color: "#C21D3A" }} />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
