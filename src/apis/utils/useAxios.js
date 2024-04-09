import { useEffect, useState, useCallback } from 'react';

const useAxios = (callback, deps = [], skip = false) => {
  const [responseData, setResponseData] = useState(null);
  const [status, setStatus] = useState('Idle');

  const axiosData = useCallback(async () => {
    setStatus('Loading');
    try {
      const data = await callback();
      setResponseData(data);
      setStatus('Successs');
      return data;
    } catch {
      setStatus('Error');
      throw error;
    }
  }, deps);

  useEffect(() => {
    if (skip) return;
    axiosData();
  }, [axiosData, skip]);

  return { axiosData, responseData, status };
};

export default useAxios;
