import * as React from "react";
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

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.card} sx={{ maxWidth: "100%" }}>
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
                fontWeight="500"
                marginTop="2rem"
                color="#13C296"
                gutterBottom
                variant="h5"
                component="div"
              >
                ${price}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} >
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon sx={{ color: "#C21D3A" }} />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
