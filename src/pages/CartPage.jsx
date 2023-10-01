import React from "react";
import { useSelector } from "react-redux";
import Cart from "../assets/images/empty-cart.png";

const CartPage = () => {
  const cart = useSelector((state) => state.cart?.items);

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="container mx-auto px-4 mt-24 mb-8">
      <h1 className="text-2xl text-center font-bold mb-4">Cart</h1>
      {cart?.length === 0 ? (
        <p className="text-center text-gray-500">
          Your Cart is Empty. Please add some Item
          <img
            src={Cart}
            alt="empty-folder"
            width="340px"
            height="340px"
            className="mx-auto mt-4"
          />
        </p>
      ) : (
        <div>
          {cart?.map((item, index) => (
            <div
              key={index}
              className="flex items-center border border-gray-300 rounded p-4 mb-4"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                <img src={item.image} alt={`Dog ${index}`} />
              </div>
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-bold">
              TOTAL: ${calculateTotal().toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
