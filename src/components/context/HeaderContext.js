import { createContext, useRef } from 'react';
import { useReducer } from 'react';
import HeaderReducer from './HeaderReducer';
const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const initialState = {
    login: false,
    mode: 'light',
    disappear: false,
  };
  const menulinks = useRef();

  const [state, dispatch] = useReducer(HeaderReducer, initialState);

  return (
    <HeaderContext.Provider
      value={{
        ...state,
        dispatch,
        menulinks,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContext;
