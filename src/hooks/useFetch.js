import { useState, useEffect } from "react";

import getSongs from "../api/getSongs";

const useFetch = () => {
  const [data, setData] = useState({
    query: " ",
    results: [],
  });

  useEffect(() => {
    if (data.query === "") {
        data.query = "*" //todo: remove this if statement
    }
    const timeoutId = setTimeout(() => {
    const fetch = async () => {
        try {
        const res = await getSongs.get(`?query=${data.query}`);
        setData({ ...data, results: res.data });
        // console.log(res.data);
        } catch (err) {
        // console.error(err);
        setData({ ...data, results: {} });
        }
    };
    fetch();
    }, 1000);
    return () => clearTimeout(timeoutId);
    
  }, [data.query]);

  return { data, setData };
};

export default useFetch;