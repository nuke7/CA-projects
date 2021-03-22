import { useState, useEffect } from "react";

function useFetch(initRequest) {
  const [request, setRequest] = useState(initRequest); //loading state
  const [data, setData] = useState(undefined); //adat state

  useEffect(() => {
    if (request) {
      const url = request.url;
      const init = request.init;

      if (url)
        fetch(url, init)
          .then((response) => {
            if (response.status !== 200) return "status is not 200";
            return response.json();
          })
          .then((json) => {
            console.log(json.mails);
            return setData(json);
          })
          .catch((error) => {
            console.log(error.statusText + ": " + error.statusText);
          });
    }
  }, [request]);
  return [data, setRequest];
}

export { useFetch };
