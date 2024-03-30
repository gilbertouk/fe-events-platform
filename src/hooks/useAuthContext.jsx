import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
