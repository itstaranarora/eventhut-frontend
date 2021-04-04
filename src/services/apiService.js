import http from "../api/httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";

let tokenName = "@token";


export function getJwt() {
  return localStorage.getItem(tokenName);
}

setTimeout(() => {
  http.setJwt(getJwt());
}, 1000);

function getAndSetJwt() {
  http.setJwt(getJwt());
}

export function registerUser(data) {
  getAndSetJwt();
  return http.post(config.apiUserRegister, data);
}

export function registerAdmin(data) {
  getAndSetJwt();
  return http.post(config.apiAdminRegister, data);
}

export function loginUser(data) {
  getAndSetJwt();
  return http.post(config.apiUserLogin, data);
}

export function loginAdmin(data) {
  getAndSetJwt();
  return http.post(config.apiAdminLogin, data);
}

export function auth(data) {
  getAndSetJwt();
  return http.post(config.apiUserLogin, data);
}

export function createOrder(data) {
  getAndSetJwt();
  return http.post(config.apiOrder, data);
}

export function getOrders() {
  getAndSetJwt();
  return http.get(config.apiOrder);
}

export function getOrder(orderId) {
  getAndSetJwt();
  return http.get(config.apiOrder + "single/" + orderId);
}

export function getUserOrders(userId) {
  getAndSetJwt();
  return http.get(config.apiOrder + userId);
}

export function updateOrderDetails(statusData) {
  getAndSetJwt();
  return http.put(config.apiOrder, statusData);
}

export function getUsers() {
  getAndSetJwt();
  return http.get(config.apiUserDetails);
}

export function getUserData(userId) {
  getAndSetJwt();
  return http.get(config.apiUserDetails + userId);
}

export function updateUserDetails(userData) {
  getAndSetJwt();
  return http.put(config.apiUserDetails, userData);
}

export function updateAdminDetails(userData) {
  getAndSetJwt();
  return http.put(config.apiAdminDetails, userData);
}

export function getUserDataFromJwt(token) {
  try {
    return jwtDecode(token);
  } catch (error) {
    return false;
  }
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenName, jwt);
}

export function logout() {
  localStorage.removeItem(tokenName);
}

export function getJwt() {
  return localStorage.getItem(tokenName);
}

export const getIdentity = () => {
  return jwtDecode(getJwt())._id;
};

export const checkIsLoggedIn = () => {
  const jwt = getJwt();
  if (jwt) {
    if (getUserDataFromJwt(jwt)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
