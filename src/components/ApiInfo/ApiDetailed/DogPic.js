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
}));

function DogPic({ api }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item container>
      <Grid item xs="12">
        <h1>Фото и гифки собак</h1>
      </Grid>
      <Grid item xs="12">
        <img alt="pic" width="300px" src={api.url} />
      </Grid>
    </Grid>
  );
}

export default DogPic;
