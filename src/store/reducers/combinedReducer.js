import { combineReducers } from "redux";
import favoritesReducer from "./favoritesMoviesReducer";

export default combineReducers({
  favorites: favoritesReducer,
});

// to combine all of reducers in one file
