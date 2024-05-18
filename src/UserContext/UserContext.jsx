import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext({
  user: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(null);
  const LoggedUSer = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (LoggedUSer) setUser({ ...LoggedUSer });
    console.log(user);
  }, []);

  // const loginUser = (userData) => {
  // setUser(userData);
  //};

  return (
    <UserContext.Provider value={{ user, setUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const getUser = () => useContext(UserContext);
// exported the Full Context ,
//so for any Need in any Component you just Descruct from getUser()
// (e.g : const {user , isAuthenticated , login } = getUser())
