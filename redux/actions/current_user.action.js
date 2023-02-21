export const setCurrentUser = (data) => {
    return { type: "USER/LOGIN", payload: data }
}

export const setAllowedMenus = (data) => {
    return { type: "USER/MENUS", payload: data }
}

export const setAction = (data) => {
    return { type: "USER/ACTION", payload: data }
}