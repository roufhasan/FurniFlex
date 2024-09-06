import { Link } from "react-router-dom";
import { TfiClose, TfiMinus, TfiPlus } from "react-icons/tfi";
import chairImg from "../../assets/chair.png";

const ListItem = ({ item }) => {
  return (
    <li className="border-b border-[#ECECEC] pb-14 pt-6 last:border-b-0">
      <div className="flex items-center gap-3">
        {/* quantity buttons */}
        <div className="inline-flex items-center gap-2 rounded-md border border-[#dedede] bg-white px-2 py-2.5">
          <TfiMinus
            className={`${item.quantity > 1 ? "cursor-pointer text-[#5C5C5C]" : "text-[#CFCFCF]"}`}
          />
          <span className="text-xl font-semibold text-[#0E0E0E]">
            {item.quantity}
          </span>
          <TfiPlus className="cursor-pointer text-[#5C5C5C]" />
        </div>

        {/* product title, image */}
        <div className="flex flex-1 justify-between">
          <div className="flex gap-4">
            <Link
              className="inline-block rounded-md bg-[#eaeaea]"
              to={`/products/${item.productId}`}
            >
              <img
                className="size-[5.5rem] object-cover object-center transition-all hover:scale-105"
                src={chairImg}
                alt={`${item.title} image`}
              />
            </Link>
            <Link
              className="py-2 font-bold text-[#434343] transition-all hover:text-black"
              to={`/products/${item.productId}`}
            >
              {item.title}
            </Link>
          </div>

          <TfiClose className="cursor-pointer text-2xl text-[#939393] transition-all ease-in hover:text-black" />
        </div>
      </div>

      <p className="text-right text-xl font-semibold text-[#0E0E0E]">
        €{item.price}
      </p>
    </li>
  );
};

export default ListItem;
