import http from "./httpService";
import axios from "axios";

let tokenName = "@token";

export const setLocalStorage = (token) => {
  localStorage.setItem(tokenName, token);
};

const BASE_URL = "https://eventhut.herokuapp.com";

export function getJwt() {
  return localStorage.getItem(tokenName);
}

function getAndSetJwt() {
  http.setJwt(getJwt());
}

export function registerUser(data) {
  const instance = axios.create();
  delete instance.defaults.headers.authorization;

  return instance.post("/auth/local/register", data);
}

export function saveUserAndPassword(username, password) {
  localStorage.setItem("@user", username);
  localStorage.setItem("@secret", password);
}

export function getUserAndPassword() {
  const user = localStorage.getItem("@user");
  const password = localStorage.getItem("@secret");
  return { identifier: user, password: password };
}

export function loginUser(data) {
  const instance = axios.create();
  delete instance.defaults.headers.authorization;

  return instance.post("/auth/local/", data);
}

export function getUserEvents(userId) {
  getAndSetJwt();
  return http.post(`/events?user.id=${userId}`);
}

export function createEvent(data) {
  getAndSetJwt();
  return http.post("/events", data);
}

export const events = BASE_URL + "/events";

export const login_user = BASE_URL + "/auth/local";

export const event = (id) => BASE_URL + "/events/" + id;

export const imgPath = (url) => BASE_URL + url;
