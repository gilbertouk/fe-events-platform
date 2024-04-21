import { createContext, useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import auth from "../config/firebase";

export const AuthContext = createContext(null);
AuthContext.displayName = "Auth Context";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsLoadingUser(false);
      } else {
        setCurrentUser(null);
        setIsLoadingUser(false);
        localStorage.clear();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, isLoadingUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
