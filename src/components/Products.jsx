import React, { useEffect, useState } from "react";
import { database } from "../config";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Button,
  Container,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 960,
    marginTop: theme.spacing(5),
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
      <Grid>
        {products.map((product) => (
          <Container key={product.id} className={classes.container}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
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
                    >
                      View more info
                    </Button>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Container>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
