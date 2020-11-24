import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer } from "./reducers/userReducers.js";

import {
  myticketlistReducer,
  singleTicketReducer,
} from "./reducers/ticketReducers.js";

import { createActionReducer } from "./reducers/IssueReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  ticketlist: myticketlistReducer,
  TicketIssue: singleTicketReducer,
  createTicketAction: createActionReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
