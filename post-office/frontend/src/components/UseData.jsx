import { useEffect } from "react";
import { useFetch } from "./UseFetch";

export const useData = (url, init /*, options */) => {
  const [data, setData] = useFetch({});

  useEffect(() => {
    if (url) {
      setData({ url: url /*  + query */, init: init });
    }
  }, [url, init, setData]);

  return data === undefined ? "Loading..." : data;
};
