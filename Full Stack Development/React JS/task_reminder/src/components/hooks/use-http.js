import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (reqConfig, applyData) => {

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(reqConfig.url, {
        method: reqConfig.method || "GET",
        body: JSON.stringify(reqConfig.body) || null,
        headers: reqConfig.headers || {},
      });

      if (!response.ok) {
        throw new Error("Request failed!");
        }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    sendRequest,
    isLoading,
    error,
  };
};

export default useHttp;
