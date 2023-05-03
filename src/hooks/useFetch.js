import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (e) {
    console.log('Error getting token from AsyncStorage:', e);
    return null;
  }
};

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async ({ url, method, body }) => {
    setLoading(true);

    try {
      const requestOptions = {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getToken()}`,
        },
      };

      if (method !== 'GET') {
        requestOptions.body = body;
      }

      const response = await fetch(url, requestOptions);

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }

      setData(json);
      setError(null);
    } catch (e) {
      setData(null);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fetchData };
};

export default useFetch;
