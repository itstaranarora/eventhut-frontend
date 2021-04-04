import axios from "axios";
import { toast } from "react-toastify";

console.log("https://eventhut.herokuapp.com");

axios.defaults.baseURL = "https://eventhut.herokuapp.com";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;
  if (!expectedError) {
    toast.error("Unexpected error");
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  if (jwt) axios.defaults.headers.authorization = `Bearer ${jwt}`
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
