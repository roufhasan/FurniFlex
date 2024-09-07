import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Container from "../../components/shared/Container";
import Loader from "../../components/Loader/Loader";
import Card from "../../components/Card/Card";
import useProducts from "../../hooks/useProducts";
import useCategories from "../../hooks/useCategories";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { categories } = useCategories();
  const {
    products,
    loading,
    renderPaginationButtons,
    currentPage,
    totalPages,
    handlePageChange,
  } = useProducts(category, searchParams, setSearchParams);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Helmet>
        <title>Products - FurniFlex</title>
      </Helmet>

      {/* Mobile, Tab Product Filter */}
      <div className="flex items-center justify-between pt-14 lg:hidden">
        <p className="text-lg font-medium">Filter:</p>

        <select
          className="rounded bg-black px-4 py-2 font-medium capitalize text-white"
          name="filter"
          id="filter"
          onChange={handleSelectChange}
        >
          {categories.map(({ _id, name, url }) => (
            <option key={_id} value={`/products/${url}`} className="capitalize">
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="pb-24 pt-14 md:pt-20 lg:flex lg:justify-center lg:gap-10">
        {/* Desktop Side Nav Links */}
        <ul className="hidden max-w-60 space-y-3 border border-zinc-100 py-10 pr-8 lg:block">
          {categories.map(({ _id, name, url }) => (
            <li key={_id}>
              <NavLink
                to={`/products/${url}`}
                className={({ isActive }) =>
                  `${isActive ? "bg-black font-semibold text-white" : null} inline-block w-full rounded-lg px-6 py-3 text-[22px] font-medium capitalize text-custom-gray-1`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex-1">
          {/* Products container */}
          <div className="grid grid-cols-12 gap-x-4 gap-y-14 lg:gap-x-8">
            {products &&
              products.length > 0 &&
              products.map((product) => (
                <Card key={product?._id} product={product} />
              ))}
          </div>

          {/* Pagination */}
          {products && products.length > 0 && (
            <div className="mt-16 flex items-center justify-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`rounded border p-1 ${
                  currentPage === 1
                    ? "bg-[#DADADA] text-[#C4CDD5] opacity-50"
                    : "hover:bg-gray-100"
                }`}
              >
                <RiArrowLeftSLine className="text-2xl" />
              </button>
              {renderPaginationButtons()}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`rounded border p-1 ${
                  currentPage === totalPages
                    ? "bg-[#DADADA] text-[#C4CDD5] opacity-50"
                    : "hover:bg-gray-100"
                }`}
              >
                <RiArrowRightSLine className="text-2xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Products;
