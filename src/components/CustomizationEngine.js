import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Slider,
  Paper,
  Grid,
  Typography,
  Container,
  Button,
  Box,
} from "@material-ui/core";
import { database, firebaseApp } from "../config";
import { auth, provider } from "../config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 2,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function CustomizationEngine() {
  const classes = useStyles();
  const activeUser = firebaseApp.auth().currentUser;
  const db = database.collection("users");
  const [valueOne, setValueOne] = useState(30);
  const [valueTwo, setValueTwo] = useState(30);

  if (activeUser != null) {
    var userEmail = activeUser.email;
    var userDoc = db.doc(activeUser.email);
  }

  const handleSliderChangeOne = (event, newValue) => {
    setValueOne(newValue);
  };

  const handleSliderChangeTwo = (event, newValue) => {
    setValueTwo(newValue);
  };

  const handleReset = () => {
    setValueOne(30);
    setValueTwo(30);
  };

  const handleSave = () => {
    if (!activeUser) {
      // middleware to check auth is success before call an api
      auth.signInWithPopup(provider).then(() => {
        alert("Please click save button again after logged in (to be enhance)");
        console.log("middleware to check auth is success before call an api");
      });
    } else {
      console.log(valueOne, valueTwo, userEmail);

      userDoc.get().then((doc) => {
        if (doc.exists) {
          db.doc(userEmail)
            .update({
              product: {
                ingredient1: valueOne,
                ingredient2: valueTwo,
              },
            })
            .then(() => {
              alert("Document successfully updated!");
              console.log("Document successfully updated!");
            });
        } else {
          db.doc(userEmail)
            .set({
              userEmail: userEmail,
              product: {
                productId: "mockProduct 1",
                ingredient1: valueOne,
                ingredient2: valueTwo,
              },
            })
            .then(() => {
              alert("Document successfully created!");
              console.log("Document successfully created!");
            });
        }
      });
    }
  };

  return (
    <div className={classes.root}>
      <Container>
        <Paper className={classes.paper}>
          <Container className={classes.container}>
            <Typography gutterBottom>Customization Engine</Typography>
          </Container>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={4} sm={2}>
              <Typography>Ingredient 1</Typography>
            </Grid>
            <Grid item xs={8} sm={4}>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={valueOne}
                onChange={handleSliderChangeOne}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={4} sm={2}>
              <Typography>Ingredient 2</Typography>
            </Grid>
            <Grid item xs={8} sm={4}>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={valueTwo}
                onChange={handleSliderChangeTwo}
              />
            </Grid>
          </Grid>
          <Box pt={2}>
            <Grid container>
              <Grid container item justify="flex-start" xs={6}>
                <Button variant="outlined" size="small" onClick={handleReset}>
                  Reset
                </Button>
              </Grid>
              <Grid container item justify="flex-end" xs={6}>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                >
                  Buy
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
