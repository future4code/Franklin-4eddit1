import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

const useRequestData = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0NWY2ZDdmLWJlNDQtNDk3ZS05NGVlLTc1OTY3M2NhNWQxNiIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY1ODg0MDM1MiwiZXhwIjoxNjU4ODgzNTUyfQ.IrP_7QFRAFSQ60urKPG3ThrTtrf-ee8tEpljzxgZqEc',
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
