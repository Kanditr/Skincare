import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Container, Slider, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
      //   width: theme.spacing(40),
      //   height: theme.spacing(40),
    },
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      //   margin: theme.spacing(5),
      width: theme.spacing(40),
      height: theme.spacing(24),
    },
  },

  container: { margin: theme.spacing(2) },
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
      <Grid item xs={12}>
        <Paper elevation={2} className={classes.paper}>
          <Grid item xs={12}>
            <Container className={classes.container}>
              <p>test: user interface of customization engine</p>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container className={classes.container}>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
              />
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={60}
              />
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={40}
              />
            </Container>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
