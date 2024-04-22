import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";
import { getIdToken } from "firebase/auth";
import { apiPrivate } from "../services/api";

const usePrivateAxios = () => {
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const funcToken = async () => {
    const requestIntercept = apiPrivate.interceptors.request.use(
      (config) => {
        const currentToken = localStorage.getItem("token");
        if (currentToken) {
          config.headers["Authorization"] = `Bearer ${currentToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = apiPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const newAccessToken = await getIdToken(currentUser, true);
            console.log(newAccessToken);
            localStorage.setItem("token", newAccessToken);

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return apiPrivate(originalRequest);
          } catch (error) {
            navigate("/login");
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      apiPrivate.interceptors.request.eject(requestIntercept);
      apiPrivate.interceptors.response.eject(responseIntercept);
    };
  };

  funcToken();

  return apiPrivate;
};

export default usePrivateAxios;
