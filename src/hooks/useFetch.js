import { useState } from 'react';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async ({ url, method, body }) => {
    setLoading(true);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODIyODM3MzYsImV4cCI6MTY4MjM3MDEzNiwic3ViIjoiZDY2NGRkODUtMjcxOS00MmI3LWJhMTYtMzczM2EyNTQ4MWNhIn0.bF_HDvlq-YAFfcWAHdAalru5VA0_9wGhBqSHt3eHx24',
        },
        body,
      });

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
