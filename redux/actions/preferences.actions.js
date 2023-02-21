export const changeLanguage = data => {
    return { type: "PREFERENCE/SET_LANG", payload: data }
};

export const switchRTL = _ => {
    return { type: "PREFERENCE/TOGGLE_SWITCH_RTL", payload: null }
};

export const switchDarkTheme = _ => {
    return { type: "PREFERENCE/TOGGLE_SWITCH_THEME", payload: null }
};