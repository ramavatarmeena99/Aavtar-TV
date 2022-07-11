import { combineReducers, createStore } from "redux";
import likevideoReducer from "./reducers";

const rootReducer = combineReducers({
  likevideoReducer: likevideoReducer,
});

export const store = createStore(rootReducer);
