import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setList(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getList();
    // eslint-disable-next-line
  }, [url]);
  return { isLoading, list };
};

export default useFetch;
