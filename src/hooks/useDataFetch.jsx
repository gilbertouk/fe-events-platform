/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { api } from "../services/api";

const useDataFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await api.get(endpoint);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(endpoint);
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useDataFetch;
