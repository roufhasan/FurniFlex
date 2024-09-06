import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Container from "../../components/shared/Container";
import Card from "../../components/Card/Card";
import { getCategories } from "../../api/getCategories";

const Products = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [categories, setCatgories] = useState([]);

  const { products } = useProducts(category);

  useEffect(() => {
    getCategories(setCatgories);
  }, []);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
    }
  };

  return (
    <Container>
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

        {/* Products container */}
        <div className="grid flex-1 grid-cols-12 gap-x-4 gap-y-14 lg:gap-x-8">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <Card key={product?._id} product={product} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
