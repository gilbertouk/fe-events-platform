import { createContext, useState } from 'react';

export const AuthContext = createContext(null);
AuthContext.displayName = 'Auth Context';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [isLoadingUser, setIsLoadingUser] = useState(true);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
