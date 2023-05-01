export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const DISPLAY_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};
export const addMovie = (movie) => {
  return { type: ADD_MOVIE, payload: movie };
};
export const displayFavorites = (value) => {
  return { type: DISPLAY_FAVORITES, payload: !value };
};
export const addFavorites = (id) => {
  return { type: ADD_FAVORITE, payload: id };
};
