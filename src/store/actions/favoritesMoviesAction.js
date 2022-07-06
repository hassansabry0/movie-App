export const setFavoritesMovies = (payload) => ({
  type: "SET_FAVORITES",
  payload, // get from component
}); // action fun return type and payload

export const removeFavoritesMovies = (payload) => ({
  type: "REMOVE_FAVORITES",
  payload,
});
