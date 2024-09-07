import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";
import Container from "../../components/shared/Container";
import useCategories from "../../hooks/useCategories";

const Categories = () => {
  const { categories, loading } = useCategories();

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      {/* page title */}
      <Helmet>
        <title>Categories - FurniFlex</title>
      </Helmet>

      <div className="h-[calc(100vh-127px)] max-h-[740px]">
        <h1 className="mb-10 mt-5 text-center text-[1.75rem] font-semibold text-[#1e1e1e]">
          Browse Top Categories
        </h1>
        <div className="grid grid-cols-3 gap-20 text-center">
          {categories &&
            categories.length > 0 &&
            categories.map(({ _id, name, url }) => (
              <motion.button
                key={_id}
                whileTap={{ scale: 0.95 }}
                className="bg-categoryImg col-span-1 inline-block w-full rounded-md bg-cover bg-center bg-no-repeat"
              >
                <Link
                  to={`/products/${url}`}
                  className="inline-block w-full rounded-md bg-black/60 bg-cover bg-center bg-no-repeat py-6 text-xl font-semibold capitalize text-white transition-all hover:bg-black/70"
                >
                  {name}
                </Link>
              </motion.button>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
