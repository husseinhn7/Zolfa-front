import React, { useState, useEffect, createContext } from "react";
import { getLocalItem } from "../utility/local";
import jwtDecode from "jwt-decode";

const AuthContext = createContext("");

export default AuthContext;

export const AuthProvider = ({ children }) => {
    
  const setUser = (authentication, staff) => {
    setValue({
      isAuthenticated: authentication,
      isStaff: staff,
      setUser: setUser,
    });
  };
  const getToken = () => {
    
    const token =  getLocalItem("token");

    if (!!token) {
      const accessToken = jwtDecode(token.access);
      return { isAuthenticated: true,
               isStaff: accessToken.is_staff}
    } else {
        return { isAuthenticated: false,
            isStaff: false}
      
    }}


    
  const [value, setValue] = useState({
    isAuthenticated: getToken().isAuthenticated,
    isStaff: getToken().isStaff,
    setUser: setUser,
  });






//   useEffect(() => {
    
//     console.log('value before '  , value)
//     const token =  getLocalItem("token");

//     if (!!token) {
//       const accessToken = jwtDecode(token.access);
//         console.log(accessToken)
//       setUser(true, accessToken.is_staff);
//     } else {
//       setUser(false, false);
//     }

    
//   }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};