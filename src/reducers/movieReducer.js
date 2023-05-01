import {
  ADD_MOVIE,
  DELETE_MOVIE,
  displayFavorites,
  DISPLAY_FAVORITES,
  ADD_FAVORITE,
} from "../actions/movieActions.js";
import movies from "./../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
  //   displayFavorites: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      const newMovie = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        movies: [...state.movies, newMovie],
      };
    case DISPLAY_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    case ADD_FAVORITE:
      const newFav = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        newFav,
      };

    default:
      return state;
  }
};

export default reducer;
