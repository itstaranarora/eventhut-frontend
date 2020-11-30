import axios from "axios";

const BASE_URL = "https://eventhut.herokuapp.com";

export const events = BASE_URL + "/events";

const register_user = BASE_URL + "/auth/local/register";

export const event = (id) => BASE_URL + "/events/" + id;

export const imgPath = (url) => BASE_URL + url;

export const Signup = (username, password, email) => {
  axios
    .post(register_user, {
      username,
      password,
      email,
    })
    .then((response) => {
      console.log("USER CREATED");
      localStorage.setItem("token", response.data.jwt);
    })
    .catch((error) => {
      console.log(error);
    });
};
