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

function ChackFacts({ api }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item container>
      <Grid item xs="12">
        <h1>Факты о Чак Норрисе</h1>
      </Grid>
      <Grid item xs="12">
        <img alt="pic" width="50px" src={api.icon_url} />
      </Grid>
      <Grid className={classes.fact} item xs="12">
        <b>А вы знали, что? - </b> <q>{api.value}</q>
      </Grid>
    </Grid>
  );
}

export default ChackFacts;
