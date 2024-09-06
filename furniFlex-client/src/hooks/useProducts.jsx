import axios from "axios";
import { useEffect, useState } from "react";
import usePagination from "./usePagination";

const useProducts = (category, searchParams, setSearchParams) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const getProducts = (category = "rocking-chair", currentPage) => {
    axios
      .get(`http://localhost:5000/products/${category}?page=${currentPage}`)
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .then((err) => {
        setLoading(false);
        console.log(`error fetching products: ${err}`);
      });
  };

  const { renderPaginationButtons, handlePageChange } = usePagination(
    totalPages,
    currentPage,
    setSearchParams,
  );

  useEffect(() => {
    getProducts(category, currentPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category, currentPage]);

  return {
    loading,
    products,
    currentPage,
    totalPages,
    renderPaginationButtons,
    handlePageChange,
  };
};

export default useProducts;
