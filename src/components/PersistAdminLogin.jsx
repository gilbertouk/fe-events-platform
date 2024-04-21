import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { apiPrivate } from "@/services/api";

import useAuthContext from "@/hooks/useAuthContext";
import Loading from "./Loading";

const PersistAdminLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser, isLoadingUser } = useAuthContext();
  const [userData, setUserData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        if (currentUser) {
          apiPrivate.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${currentUser.accessToken}`;
          const response = await apiPrivate.get(`/user/${currentUser.email}`);
          setUserData(response?.data?.body);
          localStorage.setItem("user", JSON.stringify(response?.data?.body));
        }
      } catch (error) {
        console.log(error);
        localStorage.clear();
      } finally {
        setIsLoading(false);
      }
    };

    verifyAdmin();
  }, [currentUser]);

  return isLoading || isLoadingUser ? (
    <Loading />
  ) : userData?.role === "ADMIN" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PersistAdminLogin;
