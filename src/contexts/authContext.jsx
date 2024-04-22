import { createContext, useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import auth from "../config/firebase";
import { apiPrivate } from "@/services/api";

export const AuthContext = createContext(null);
AuthContext.displayName = "Auth Context";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        apiPrivate
          .get(`/user/${user.email}`, {
            headers: { Authorization: `Bearer ${user.accessToken}` },
          })
          .then((response) => {
            const userData = response?.data?.body;
            localStorage.setItem("token", user.accessToken);
            localStorage.setItem("user", JSON.stringify(userData));

            setIsLoadingUser(false);
          });
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
