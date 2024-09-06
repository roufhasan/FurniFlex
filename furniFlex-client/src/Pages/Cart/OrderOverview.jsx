import ListItem from "../../components/ListItem/ListItem";

const OrderOverview = ({ carts }) => {
  return (
    <div className="md:flex-1">
      <h1 className="mb-10 text-[1.75rem] font-semibold text-[#1e1e1e]">
        An overview of your order
      </h1>
      <ul className="rounded-xl bg-[#fafafa] p-6">
        {carts &&
          carts.length > 0 &&
          carts.map((item) => <ListItem key={item._id} item={item} />)}
      </ul>
    </div>
  );
};

export default OrderOverview;
