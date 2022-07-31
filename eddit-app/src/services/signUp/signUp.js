import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { goToHome } from "../../Routes/coordinator";

export const signUp = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/users/signup`, body, {
      headers: {
        ContentType: localStorage.getItem("application/json"),
      },
    })
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      clear();
      goToHome(navigate);
    });
};
