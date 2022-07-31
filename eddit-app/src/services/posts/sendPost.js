import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const sendPost = (body) => {
  const token = localStorage.getItem("token");
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((r) => {
      window.location.reload(true);
    })
    .catch((e) => {
      console.log(e);
    });
};
