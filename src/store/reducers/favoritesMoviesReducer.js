const INITIAL_STATE = {
  currentFavorites: 0,
  favorites: [],
};
export default function favoritesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_FAVORITES":
      state.favorites.push(action.payload);
      state.currentFavorites = +1;
      return state;

    case "REMOVE_FAVORITES":
      state.favorites.splice(state.favorites.indexOf(action.payload), 1);
      state.currentFavorites = -1;

      return state;

    default:
      return state;
  }
}
