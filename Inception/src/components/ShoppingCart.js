import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center mx-auto p-5 w-6/12 ">
      <h1 className="font-bold text-lg mt-2 mb-2">Cart</h1>
      <button
        className="  bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 p-1 border border-blue-700 rounded"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      {cartItems.length === 0 && <h1>Add products to the cart</h1>}
      <div className=" p-3   cursor-pointer">
        <ItemList ItemsData={cartItems} />
      </div>
    </div>
  );
};

export default ShoppingCart;
