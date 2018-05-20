import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./indexReducer";

let logger = createLogger({
  collapsed: true
});

let configureStore = createStore(rootReducer, applyMiddleware(logger));

export default configureStore;
