import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Slider, Paper, Grid, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    flexGrow: 1,
    // flexWrap: "wrap",
    // "& > *": {
    // margin: theme.spacing(5),
    //   width: theme.spacing(40),
    //   height: theme.spacing(40),
    // },
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
                defaultValue={20}
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
                defaultValue={20}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
