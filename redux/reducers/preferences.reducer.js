const initialState = {
  lang: 'ID',
  rtl: false,
  dark: false
};

const preferences = (state = initialState, action) => {
  switch (action.type) {
    case "PREFERENCE/SET_LANG":
      return { ...state, lang: action.payload };
    case "PREFERENCE/TOGGLE_SWITCH_RTL":
      return { ...state, rtl: !state.rtl };
    case "PREFERENCE/TOGGLE_SWITCH_THEME":
      return { ...state, dark: !state.dark };
    default:
      return state;
  }
}

export default preferences;