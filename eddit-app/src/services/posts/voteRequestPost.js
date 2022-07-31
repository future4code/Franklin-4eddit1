import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const voteRequest = (direction, id) => {
  const token = localStorage.getItem("token");
  axios
    .post(
      `${BASE_URL}/posts/${id}/votes`,
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

export const removeVoteRequest = (direction, id) => {
  const token = localStorage.getItem("token");
  axios
    .put(
      `${BASE_URL}/posts/${id}/votes`,
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
