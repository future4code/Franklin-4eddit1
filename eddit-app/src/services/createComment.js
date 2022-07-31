import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createComment = (id, body) => {
  const token = localStorage.getItem("token");
  const requestBody = { body: body };

  axios
    .post(`${BASE_URL}/posts/${id}/comments`, requestBody, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      //   console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};
