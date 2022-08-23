import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";
const register = (empID, email, phone, password) => {
  return axios.post(API_URL + "signup", {
    empID,
    email,
    phone,
    password,
  });
};
const login = (empID, password) => {
  console.log("in login");
  return axios
    .post(API_URL + "signin", {
      empID,
      password,
    })
    .then((response) => {
      if (response.data.empID) { //TODO : we are not even sending access token back from server
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;