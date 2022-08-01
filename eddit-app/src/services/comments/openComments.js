import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const openComments = (id, onToggle, isOpen, setData) => {
  const token = localStorage.getItem("token");
  onToggle();
  if (!isOpen) {
    axios
      .get(`${BASE_URL}/posts/${id}/comments`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
