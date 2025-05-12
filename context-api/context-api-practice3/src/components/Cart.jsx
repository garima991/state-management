import React from "react";
import { useCart } from "../context/CartContext";

const Cart = ({ showCart, toggleCart }) => {
  const { cart, addToCart, removeFromCart, clearCart, cartTotal } = useCart();

  return (
    showCart && (
      <div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm m-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggleCart}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div className="flex justify-between items-center shadow-lg p-3" key={item.id}>
              <div className="flex justify-center items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-md h-32"
                />
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-lg font-bold">{item.name}</h1>
                  <p className="self-start text-gray-600 text-lg font-bold">
                    ₹{item.caloriesPerServing}
                  </p>
                  <div className="flex gap-4">
                    <button
                      className="px-2 py-1 bg-gray-800 text-white text-xs font-bol rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="px-2 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    >
                      {item.quantity > 1 ? "-" : "🗑️"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 ? (
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg font-bold">Total: ₹{cartTotal()}</h1>
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1 className="text-lg font-bold">Your cart is empty</h1>
        )}
      </div>
    )
  );
};

export default Cart;
