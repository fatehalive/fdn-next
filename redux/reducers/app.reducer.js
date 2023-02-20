const initialState = {
  currentPage: '',
  navigationToggle: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "APP/CHANGE_PAGE_NAME":
      return { ...state, currentPage: action.payload };
    case "APP/TOGGLE_NAV":
      return { ...state, navigationToggle: !state.navigationToggle }
    default:
      return state;
    }
}

export default app;