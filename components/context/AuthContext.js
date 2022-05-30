import React, { useContext, createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  function signup(email, password) {
    return createUserWithEmailAndPassword(email, password);
  }

  const value = {
    currentUser,
    signup,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}