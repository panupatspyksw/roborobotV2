import { createContext, useState, useEffect } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem('login')) ?? false
  );
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem('carts')) instanceof Array
      ? JSON.parse(localStorage.getItem('carts'))
      : []
  );
  useEffect(() => {
    // console.log(carts);
  }, [carts]);

  const addItemCart = (item) => {
    if (carts.filter((e) => e.id === item.id).length === 0) {
      localStorage.setItem('carts', JSON.stringify([...carts, item]));

      setCarts((old) => {
        return [...old, item];
      });
    } else {
      alert('สินค้านี้อยู่ในตะกร้าสินค้าแล้ว');
    }
    return null;
  };

  const removeItemCart = (item) => {
    setCarts((old) => {
      return carts.filter((e) => e.id !== item.id);
    });

    localStorage.setItem(
      'carts',
      JSON.stringify(carts.filter((e) => e.id !== item.id))
    );

    return null;
  };

  const UserLogin = (data) => {
    var {
      username = login.username ?? 'user123',
      name = login.name ?? 'John William',
      email = login.email ?? 'example@gmail.com',
      password = login.password ?? '123',
    } = data;

    window.location.pathname = '/';

    localStorage.setItem(
      'login',
      JSON.stringify({ username, name, email, password })
    );
    setLogin({ username, name, email, password });
    // navigate('/');
    // window.location.href = 'http://localhost:3000/';

    return null;
  };

  const UserLogout = async () => {
    window.location.pathname = '/login';

    await setLogin(false);
    await localStorage.removeItem('login');

    return null;
  };

  const checkItemNotInCarts = (item) => {
    return carts.filter((e) => e.id === item.id).length > 0 ? false : true;
  };

  return (
    <SessionContext.Provider
      value={{
        login,
        carts,
        addItemCart,
        removeItemCart,
        checkItemNotInCarts,
        UserLogin,
        UserLogout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
