import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

const useRequestData = (endpoint = '') => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('token')
  console.log(token);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/${endpoint}`, {
        headers: {
          Authorization: token
        },
      })
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  return [data];
};

export default useRequestData;
