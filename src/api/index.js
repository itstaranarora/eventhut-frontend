import http from "./httpService";
import axios from "axios"
import jwtDecode from "jwt-decode";
import useFetch from "hooks/useFetch"

let tokenName = "@token";

const BASE_URL = "https://eventhut.herokuapp.com"

export function getJwt() {
  return localStorage.getItem(tokenName);
}

function getAndSetJwt() {
  http.setJwt(getJwt());
}

export function registerUser(data) {
  return http.post( "/auth/local/register", data).then(res => localStorage.setItem(tokenName,  res.data.jwt));
}

export function loginUser(data) {
  return http.post("/auth/local/", data).then(res => localStorage.setItem(tokenName,  res.data.jwt));
}

export function createEvent(data) {
  getAndSetJwt()
  return http.post("/events", data)
}

export const events = BASE_URL + "/events";

const register_user = BASE_URL + "/auth/local/register";

export const event = (id) => BASE_URL + "/events/" + id;

export const imgPath = (url) => BASE_URL + url;
