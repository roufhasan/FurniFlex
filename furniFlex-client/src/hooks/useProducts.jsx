import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = (category) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = (category) => {
    axios
      .get(`http://localhost:5000/products/${category}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .then((err) => {
        setLoading(false);
        console.log(`error fetching products: ${err}`);
      });
  };

  useEffect(() => {
    getProducts(category);
  }, [category]);

  return { loading, products };
};

export default useProducts;
