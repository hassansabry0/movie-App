import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular",
  params: {
    api_key: "4aad0ed6186b78dac8796280bde2fded",
  },
});
export default axiosInstance;
