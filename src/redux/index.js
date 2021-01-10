import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import apis from "./apis";
import logging from "./logging";
import users from "./users";

const rootReducer = combineReducers({
  apis,
  logging,
  users,
});
const index = createStore(rootReducer, applyMiddleware(thunk, logger));

export default index;
