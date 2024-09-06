import { useContext } from "react";
import Container from "../../components/shared/Container";
import { CartContext } from "../../Providers/CartProvider";
import OrderOverview from "./OrderOverview";
import OrderDetails from "./OrderDetails";
import Loader from "../../components/Loader/Loader";

const Cart = () => {
  const { carts, loading } = useContext(CartContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="flex flex-col justify-between gap-y-10 pb-24 pt-5 md:flex-row md:gap-x-10 lg:gap-x-20">
        <OrderOverview carts={carts} />
        <OrderDetails carts={carts} />
      </div>
    </Container>
  );
};

export default Cart;
