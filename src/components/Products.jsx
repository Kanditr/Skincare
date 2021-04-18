import React, { useEffect, useState } from "react";
import { database } from "../config";
import {
  Grid,
  Typography,
  Button,
  Container,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 960,
    // marginLeft: theme.spacing(2),
    margin: "auto",
  },

  container: {
    marginBottom: theme.spacing(2),
  },

  button: {
    marginLeft: theme.spacing(2),
  },
}));

function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = database.collection("products");
    const items = [];
    db.get().then((querySnapshot) => {
      querySnapshot.forEach((product) => {
        console.log(product.id);
        items.push({ id: product.id, data: product.data() });
      });
      setProducts(items);
      console.log(items);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        {products.map((product) => (
          <Container className={classes.container}>
            <Paper className={classes.paper}>
              <Grid key={product.id} xs={12}>
                <Grid item xs={12}>
                  <Typography gutterBottom variant="inherit" component="h4">
                    {product.data.productName}
                  </Typography>
                  <Typography>
                    Base Price: {product.data.basePrice} Baht
                  </Typography>
                  <Grid container item justify="flex-end" xs={12}>
                    <Button
                      variant="outlined"
                      size="small"
                      className={classes.button}
                      onClick={() => {
                        alert("will do it later na");
                      }}
                    >
                      View more info
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
