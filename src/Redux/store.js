import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import videoReducer from "./reducers";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["videoReducer"],
}; 
const rootReducer = combineReducers({
  videoReducer: videoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

