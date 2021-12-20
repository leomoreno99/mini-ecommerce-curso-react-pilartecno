import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const Product = ({product}) => {

    const { title, image, price, description } = product;

    return (
        <Grid item xs={4}>
        <Card sx={{ maxWidth: "100$" }}>
            <CardMedia
                component="img"
                height="140"
                image= {image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Grid>
    )
}