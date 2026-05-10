import { useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import useAuth from "./useAuth";

const useAxios = () => {
  const { tokens, setTokens, logoutUser } = useAuth();

  useEffect(() => {

    // REQUEST INTERCEPTOR
    // Automatically attach access token
    const requestInterceptor =
      axiosInstance.interceptors.request.use(
        async (config) => {

          if (tokens?.access) {
            config.headers.Authorization =
              `Bearer ${tokens.access}`;
          }

          return config;
        },
        (error) => Promise.reject(error)
      );

    // RESPONSE INTERCEPTOR
    // Handle expired tokens automatically
    const responseInterceptor =
      axiosInstance.interceptors.response.use(
        (response) => response,

        async (error) => {

          const originalRequest = error.config;

          // If token expired and request hasn't retried yet
          if (
            error.response?.status === 401 &&
            !originalRequest._retry
          ) {

            originalRequest._retry = true;

            try {

              // Request new access token
              const response = await axiosInstance.post(
                "auth/refresh/",
                {
                  refresh: tokens.refresh,
                }
              );

              // Update tokens
              const newTokens = {
                ...tokens,
                access: response.data.access,
              };

              setTokens(newTokens);

              localStorage.setItem(
                "tokens",
                JSON.stringify(newTokens)
              );

              // Retry original request
              originalRequest.headers.Authorization =
                `Bearer ${response.data.access}`;

              return axiosInstance(originalRequest);

            } catch (refreshError) {

              console.error(
                "Refresh token expired",
                refreshError
              );

              logoutUser();

              return Promise.reject(refreshError);
            }
          }

          return Promise.reject(error);
        }
      );

    // CLEANUP
    return () => {
      axiosInstance.interceptors.request.eject(
        requestInterceptor
      );

      axiosInstance.interceptors.response.eject(
        responseInterceptor
      );
    };

  }, [tokens, setTokens, logoutUser]);

  return axiosInstance;
};

export default useAxios;