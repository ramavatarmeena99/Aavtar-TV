import { combineReducers, createStore } from "redux";
import videoReducer from "./reducers";

const rootReducer = combineReducers({
  videoReducer: videoReducer,
});

export const store = createStore(rootReducer);
