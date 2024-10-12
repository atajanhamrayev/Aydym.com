import { createStore, combineReducers, applyMiddleware } from "redux";
import musicReducer from "./music-reducer";
import { thunk } from "redux-thunk";

let reducers = combineReducers({
  musicsPage: musicReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
