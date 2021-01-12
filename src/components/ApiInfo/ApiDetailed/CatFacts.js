import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    textAlign: "center",
  },
  fact: {
    fontSize: "21px",
  },
}));

function CatFacts({ api }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item container>
      <Grid item xs="12">
        <h1>Котофакт</h1>
      </Grid>
      <Grid className={classes.fact} item xs="12">
        <b>А вы знали? - </b> <q>{api.text}</q>
      </Grid>
    </Grid>
  );
}

export default CatFacts;
