import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { loadApis, loadUsers } from "../redux/actions";
import Loader from "./LoadingAndLogIn/Loader";
import AddUser from "./UserAdding/AddUser";
import { Redirect, Route, Switch } from "react-router-dom";
import ApiInfo from "./ApiInfo/ApiInfo";

function MainPage() {
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
      {!users.length ? (
        <AddUser />
      ) : (
        <>
          <Header />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/adduser" component={AddUser} />
            <Route path="/dashboard/api-info/:id?" component={ApiInfo} />
            <Redirect to="/dashboard" />
          </Switch>
        </>
      )}
    </Grid>
  );
}

export default MainPage;
