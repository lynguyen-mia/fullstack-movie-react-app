import { useState, useCallback } from "react";

const useFetch = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (fetchConfig, dataHandleFn) => {
    setError(null);
    try {
      const response = await fetch(fetchConfig.url, {
        method: fetchConfig.method ? fetchConfig.method : "GET",
        body: fetchConfig.body ? JSON.stringify(fetchConfig.body) : null,
        headers: fetchConfig.header ? fetchConfig.header : {}
      });

      if (response.status === 404 || response.status === 400) {
        const data = await response.json();
        dataHandleFn(data);
        throw new Error(data.message);
      } else {
        const data = await response.json();
        dataHandleFn(data);
      }
    } catch (err) {
      console.error(err || "Something went wrong!");
    }
  }, []);

  return { error, sendRequest };
};

export default useFetch;
