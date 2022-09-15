import React, { useState, useEffect } from "react";
import axios from "axios";

// GLOBALS
const API_URL = "https://women-of-hip-hop.herokuapp.com";
const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Stores an authentication token in the local storage
  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  // Check local storage for an authentication token and updates the state variables.
  const authenticateUser = () => {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      axios.post(`${API_URL}/auth/verify`, {token: storedToken})
        .then((response) => {
          const user = response.data.user; 
          console.log(user);
         setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    }
    else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  // keep user loged in
  useEffect(() => { authenticateUser(); }, []);
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user,
                                   storeToken, authenticateUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
