import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import sessionReducer from './session';
import location from './location';


import thunk from "redux-thunk";
import locationReducer from "./location";

const rootReducer = combineReducers({
  // add reducer functions here
  location: locationReducer,
  session: sessionReducer,
  
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};










export default configureStore;
