import { useState, useEffect } from "react";

import got from "../api/got";

const useFetch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
  });

  useEffect(() => {
    if (data.slug === "all") {
        data.slug = "products" //todo: update this to a parameter that retrieves all songs when the search bar is empty
    }
    const timeoutId = setTimeout(() => {
    const fetch = async () => {
        try {
        const res = await got.get(`/${data.slug}`);
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
    
  }, [data.slug]);

  return { data, setData };
};

export default useFetch;