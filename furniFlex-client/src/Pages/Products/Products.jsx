import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Container from "../../components/shared/Container";
import Card from "../../components/Card/Card";
import { fetchCategories } from "../../api/fetchCategories";

const Products = () => {
  const { category } = useParams();
  const [categories, setCatgories] = useState([]);

  const { products } = useProducts(category);

  useEffect(() => {
    fetchCategories(setCatgories);
  }, []);

  return (
    <Container>
      <div className="flex justify-center gap-10">
        <ul className="max-w-60 space-y-3 border border-zinc-100 py-10 pr-8">
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
        <div className="grid flex-1 grid-cols-12 gap-x-8 gap-y-14">
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
