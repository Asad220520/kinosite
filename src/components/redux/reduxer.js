const initialState = {
  fovarite: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE": {
      return {
        ...state,
        fovarite: [...state.fovarite, { ...action.payload, liked: true }],
      };
    }
    case "DELETE_FROM_FAVORITE":
      {
        return {
          ...state,
          fovarite: state.fovarite.filter((el) => el.id !== action.payload.id),
        };
      }
    default:
      return state;
  }
};
