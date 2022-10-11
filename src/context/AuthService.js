import axios from "axios";

const API_URL = "http://localhost:8000/api/users/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "token/", {
        email,
        password
      })
      .then(response => {
        console.log(response);
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      }).catch(error => {
        console.log(error.response)
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "register/", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();