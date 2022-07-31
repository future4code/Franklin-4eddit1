import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const voteRequestComments = (direction, id) => {
  const token = localStorage.getItem("token");
  console.log(id);
  axios
    .post(
      `${BASE_URL}/comments/${id}/votes`,
      { direction: direction },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeVoteRequestComments = (direction, id) => {
  const token = localStorage.getItem("token");
  console.log(id);
  axios
    .put(
      `${BASE_URL}/comments/${id}/votes`,
      { direction: direction },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
