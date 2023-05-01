import { combineReducers } from "redux";

import movieReducer from "./movieReducer";

export default movieReducer;

const rootReducer = combineReducers({
  movieReducer,
});
