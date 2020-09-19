export const initialState = {
  darkMode: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_DARKMODE":
      return { ...state, darkMode: action.dark };
    default:
      return state;
  }
};

export default reducer;
