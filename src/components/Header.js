import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import logo from "../logo/api.png";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, switchUser } from "../redux/actions";
import { Link } from "react-router-dom";
import { ButtonGroup } from "@material-ui/core";
import AddUserIcon from "./UserAdding/AddUserIcon";

const useStyles = makeStyles((theme) => ({
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
}));

function Header(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.apis.searchValue);
  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const userId = useSelector((state) => state.users.itemId);
  const users = useSelector((state) => state.users.items);
  const currentUser = useSelector((state) =>
    state.users.items.find((user) => userId === user.id)
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleSwitchUser = (id) => {
    setAnchorEl(null);
    dispatch(switchUser(id));
  };

  const handleMobileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {users.map((user) => {
        const logo = user.name[0];
        return (
          <div key={user.id} className={classes.itemWrapper}>
            <Avatar aria-label="recipe" className={classes.avatar}>
              {logo}
            </Avatar>
            <Link to="/dashboard">
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleSwitchUser(user.id);
                }}
              >
                {user.name + " " + user.surname}
              </MenuItem>
            </Link>
          </div>
        );
      })}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <ButtonGroup>
            <img src={logo} alt="logo" />
          </ButtonGroup>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={searchValue}
              onChange={handleChange}
              placeholder="поиск по API"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <AddUserIcon />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.intro}>
              Привет, {currentUser.name + " " + currentUser.surname}
            </div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar aria-label="recipe" className={classes.avatar}>
                {currentUser.name[0]}
              </Avatar>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default Header;
