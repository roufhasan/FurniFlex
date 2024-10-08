import { useEffect, useState } from "react";
import axios from "axios";

const useCategories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCatgories] = useState([]);

  const getCategories = (setCatgories) => {
    axios
      .get("https://furniflex-server-hridoy.vercel.app/category")
      .then((res) => {
        setLoading(false);
        setCatgories(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(`error fetching categories: ${err}`);
      });
  };

  useEffect(() => {
    getCategories(setCatgories);
  }, []);

  return { categories, loading };
};

export default useCategories;
