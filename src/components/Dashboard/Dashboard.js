import React, { memo } from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import CardApi from "./CardApi";

function Dashboard() {
  const apis = useSelector((state) => {
    const searchValue = state.apis.searchValue;

    return state.apis.items.filter((api) => {
      const lowerCase = api.title.toLowerCase();
      const lowerCaseSearch = searchValue.toLowerCase();

      return lowerCase.indexOf(lowerCaseSearch) !== -1;
    });
  });

  const shuffled = apis.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 3);

  return (
    <>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item container justify="center" xs={12} sm={8}>
          {selected.map((api) => {
            return <CardApi key={api.id} api={api} />;
          })}
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}

export default memo(Dashboard);
