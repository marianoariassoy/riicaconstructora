import { useState, useEffect } from "react";
const apiUrl = "https://imltenis.com.ar/riicabackend/api";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const urlOk = apiUrl + url;
        const response = await axios.get(urlOk);
        const json = await response.data;
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const urlOk = apiUrl + url;
  //       const response = await fetch(urlOk);
  //       const json = await response.json();
  //       setData(json);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, [url]);

  return { data, loading, error };
}

export default useFetch;
