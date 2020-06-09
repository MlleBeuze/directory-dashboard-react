import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  loadContactsReducer,
  loadOneContactReducer
} from "./reducers";
import thunk from "redux-thunk";
import axiosMiddleware from "redux-axios-middleware";
import axios from "axios";

// axios api client
const client = axios.create({
  baseURL: "http://localhost:3000/api",
  responseType: "json",
});

const initialStore = {};
const reducer = combineReducers({
  loadContacts: loadContactsReducer,
  loadOneContact: loadOneContactReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialStore,
  composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(axiosMiddleware(client))
  )
);
export default store;
