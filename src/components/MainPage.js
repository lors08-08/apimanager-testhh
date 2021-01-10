import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Dashboard from "./Dashboard/Dashboard";
import { ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { useDispatch, useSelector } from "react-redux";
import { loadApis, loadUsers } from "../redux/actions";
import Loader from "./LoadingAndLogIn/Loader";
import AddUser from "./UserAdding/AddUser";
import { Redirect, Route, Switch } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f44343",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#000000",
    },
  },
});

function MainPage(props) {
  const dispatch = useDispatch();
  const loadingUsers = useSelector((state) => state.users.loading);
  const loadingApis = useSelector((state) => state.apis.loading);
  const users = useSelector((state) => state.users.items);

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadApis());
  }, [dispatch]);

  if (loadingUsers && loadingApis) {
    return <Loader />;
  }
  return (
    <Grid container>
      <ThemeProvider theme={theme}>
        {!users.length ? (
          <AddUser />
        ) : (
          <>
            <Header />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/dashboard/adduser" component={AddUser} />
              <Redirect to="/dashboard" />
            </Switch>
          </>
        )}
      </ThemeProvider>
    </Grid>
  );
}

export default MainPage;
