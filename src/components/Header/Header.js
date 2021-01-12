import React from "react";
import logo from "../../logo/api.png";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, switchUser } from "../../redux/actions";
import { Link } from "react-router-dom";
import {
  ButtonGroup,
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
  InputBase,
  MenuItem,
  Menu,
} from "@material-ui/core";
import AddUserIcon from "../UserAdding/AddUserIcon";
import { useStyles } from "./styles";

function Header() {
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
