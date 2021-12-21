import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    cardHover: {
    "&:hover": {
      boxShadow: "0px 10px 10px rgb(0 0 0 / 20%);",
      cursor: "pointer",
    }
  },
});

export const Product = ({ product }) => {
  const { title, image, price, description } = product;
  const classes = useStyle();


  return (
    <Grid item xs={6}>
      <Card className={classes.cardHover} sx={{ maxWidth: "100%" }}>
        <Grid container>
          <Grid height={"15rem"} item xs={6}>
            <CardMedia component="img" image={image} alt="green iguana" />
          </Grid>
          <Grid item xs={6}>
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
            <CardActions></CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
