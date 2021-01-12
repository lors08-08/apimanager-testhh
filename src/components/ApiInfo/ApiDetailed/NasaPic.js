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
  pic: {
    height: "400px",
    width: "250px",
    margin: "auto",
  },
  text: {
    height: "250px",
    margin: "auto",
    marginTop: "10px",
  },
}));

function NasaPic({ api }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item container>
      <Grid item xs="12">
        <h1>Фото дня от НАСА</h1>
      </Grid>
      <Grid item xs="12">
        <h3>{api.title}</h3>
        <p>{api.date}</p>
      </Grid>
      <Grid item className={classes.pic} xs="12">
        {api.media_type === "image" ? (
          <img alt="pic" src={api.url} height="100%" width="50%" />
        ) : (
          <iframe title={api} src={api.url} height="100%" width="50%" />
        )}
      </Grid>
      <Grid item className={classes.text} xs="6">
        {api.explanation}
      </Grid>
    </Grid>
  );
}

export default NasaPic;
