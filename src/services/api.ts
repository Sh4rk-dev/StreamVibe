import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover",
  params: {
    api_key: "fcad61e8efc59c0e115460d4c7975648",
    language: "pt-BR",
  },
});

export { api };
