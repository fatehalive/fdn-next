const initialState = {
  name: null,
  username: null,
  email: null,
  phone: null,
  doing: {
    view: true,
    add: false,
    edit: false,
    delete: false,
  },
  ip: null,
  lastLogin: null,
  token: null,
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case "USER/LOGIN":
      if (action.payload) return {
        ...state,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
        phone: action.payload.phone,
        ip: action.payload.ip,
        lastLogin: action.payload.lastLogin,
        token: action.payload.token,
      };
    case "USER/ACTION": {
      let newAction = { ...state.doing }

      if (action.payload === 'add') {
        newAction.add = true
        newAction.view = false
      } else {
        newAction.add = false
      }
      if (action.payload === 'edit') {
        newAction.edit = true
        newAction.view = false
      } else {
        newAction.edit = false
      }
      if (action.payload === 'delete') {
        newAction.delete = true
        newAction.view = false
      }
      else {
        newAction.delete = false
      }
      if (
        newAction.view && 
        (action.payload != 'add' || action.payload != 'edit' || action.payload != 'delete')
      ) {
        newAction.view = false
      }

      return {
        ...state,
        doing: newAction
      }
    }
    default:
      return state;
  }
}

export default currentUser;