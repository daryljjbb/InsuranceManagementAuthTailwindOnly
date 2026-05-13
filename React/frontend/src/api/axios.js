import axios from "axios";

const api = axios.create({

  baseURL:
    "http://127.0.0.1:8000/api/",
});


// REQUEST INTERCEPTOR
api.interceptors.request.use(

  (config) => {

    // GET TOKENS OBJECT
    const tokens =
      localStorage.getItem("tokens");

    if (tokens) {

      // PARSE TOKENS
      const parsedTokens =
        JSON.parse(tokens);

      // ATTACH ACCESS TOKEN
      config.headers.Authorization =
        `Bearer ${parsedTokens.access}`;
    }

    return config;
  },

  (error) => {

    return Promise.reject(error);
  }
);

export default api;