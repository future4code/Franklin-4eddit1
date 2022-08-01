import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { goToHome } from "../../Routes/coordinator";

export const login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body, {
      headers: {
        ContentType: localStorage.getItem("application/json"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToHome(navigate);
    })
    .catch((err) => alert("Erro no Login"));
};
