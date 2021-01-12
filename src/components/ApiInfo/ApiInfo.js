import React from "react";
import { Grid } from "@material-ui/core";
import CatFacts from "./ApiDetailed/CatFacts";
import { useSelector } from "react-redux";
import BreakingBad from "./ApiDetailed/BreakingBad";
import NasaPic from "./ApiDetailed/NasaPic";
import FoxPic from "./ApiDetailed/FoxPic";
import DogPic from "./ApiDetailed/DogPic";
import ChackFacts from "./ApiDetailed/ChackFacts";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    textAlign: "center",
    borderRadius: "10px",
    marginTop: "10px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function ApiInfo() {
  const classes = useStyles();

  const loading = useSelector((state) => state.apis.loading);
  const api = useSelector((state) => state.apis.currentItem);
  const apiId = useParams().id;

  const components = {
    1: CatFacts,
    2: BreakingBad,
    3: NasaPic,
    4: FoxPic,
    5: DogPic,
    6: ChackFacts,
  };

  const CurrentComponent = components[apiId];
  if (loading) {
    return (
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  return (
    <Grid item container>
      <Grid className={classes.root} xs="12">
        <Link to="/dashboard">
          <Fab
            className={classes.extendedIcon}
            color="secondary"
            aria-label="add"
          >
            <ArrowBackIosIcon />
          </Fab>
        </Link>
      </Grid>
      <Grid item container>
        <CurrentComponent api={api} />
      </Grid>
    </Grid>
  );
}

export default ApiInfo;
