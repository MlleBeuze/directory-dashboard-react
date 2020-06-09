import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { contactListReducer,contactDetailsReducer } from "./reducers";
import thunk from "redux-thunk";

const initialStore = {};
const reducer = combineReducers({
  contactList: contactListReducer,
  contactDetails: contactDetailsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialStore,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
