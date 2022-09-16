import React, { useState, useEffect } from "react";
import axios from "axios";

// GLOBALS
const API_URL = "https://women-of-hip-hop.herokuapp.com";
const AuthContext = React.createContext();


function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Stores an authentication token in the local storage
  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  const removeToken = () => localStorage.removeItem("authToken");

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  };

  // Check local storage for an authentication token and updates the state variables.
  const authenticateUser = () => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      axios.post(`${API_URL}/auth/verify`, {token: storedToken})
        .then((response) => {
          const user = response.data.user;
          setIsLoggedIn(true);
          setUser(user);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setUser(null);
        });
    }
    else {
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  // keep user loged in
  useEffect(() => { authenticateUser(); }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, storeToken,
                                   authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
