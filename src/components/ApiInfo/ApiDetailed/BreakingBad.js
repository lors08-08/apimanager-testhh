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
  quote: {
    fontSize: "21px",
  },
}));

function BreakingBad({ api }) {
  const classes = useStyles();
  console.log(api);
  return (
    <Grid className={classes.root} item container>
      <Grid item xs="12">
        <h1>Цитаты из сериала "Во все тяжкие"</h1>
      </Grid>
      {api.map((item) => (
        <Grid key={item} className={classes.quote} item xs="12">
          <b>{item.author} - </b> <q>{item.quote}</q>
        </Grid>
      ))}
    </Grid>
  );
}

export default BreakingBad;
