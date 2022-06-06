function HeaderReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        login: false,
      };
    case 'HIDING':
      return {
        ...state,
        disappear: true,
      };
    case 'SHOWING':
      return {
        ...state,
        disappear: false,
      };
    case 'SwitchNavToLight':
      return {
        ...state,
        mode: 'light',
      };
    case 'SwitchNavToDark':
      return {
        ...state,
        mode: 'dark',
      };
    default:
      return state;
  }
}

export default HeaderReducer;
