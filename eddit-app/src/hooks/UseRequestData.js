import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

const useRequestData = (endpoint = '') => {
  const [data, setData] = useState(undefined);
  const token = localStorage.getItem('token');
  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/${endpoint}`, {
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
  }, []);
  return [data];
};

export default useRequestData;
