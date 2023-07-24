export const addToFavorite = (el) => {
  return { type: "ADD_TO_FAVORITE", payload: el };
};
export const deleteFromFavorite = (el) => {
  return { type: "DELETE_FROM_FAVORITE", payload: el };
};
