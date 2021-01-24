import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height: "90px",
    "& img": {
      width: "150px",
      height: "70px",
      color: "white",
    },
  },
  title: {
    width: "100px",
  },
  avatar: {
    backgroundColor: "#e8c72a",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "24px",
    width: "60px",
    height: "60px",
    lineHeight: "16px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "30%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    height: "40px",
    fontSize: "24px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuItem: {
    width: "200px",
    height: "70px",
    lineHeight: "15px",
    fontSize: "1.5em",
  },
  itemWrapper: {
    display: "flex",
    padding: "5px",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  intro: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5em",
  },
  logout: {
    textDecoration: "none",
    color:"black",
    "& svg":{
      fontSize:"32px"
    }
  }

}));
