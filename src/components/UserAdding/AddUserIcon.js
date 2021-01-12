import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  iconAdd: {
    width: "50px",
    height: "50px",
    boxShadow: "0 0 10px black",
    margin: "10px",
    "& a": {
      color: "white",
      lineHeight: "10px",
    },
  },
}));

function AddUserIcon() {
  const classes = useStyles();

  return (
    <Link to="/dashboard/adduser" title="Добавить пользователя">
      <Fab
        classes={{ root: classes.iconAdd }}
        color="secondary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </Link>
  );
}

export default AddUserIcon;
