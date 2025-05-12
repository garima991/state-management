import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const {cart} = useCart();
  
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        console.log(data);
        setItems(data.recipes);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  const toggleCart = () => {
    setShowCart(!showCart);
  }

  console.log(cart);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between items-center px-8 py-4">
        <h2 className="text-4xl font-extrabold text-black">Items List</h2>
        {!showCart && (
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggleCart}
          >
            Cart ({totalQuantity})
          </button>
          
        )}
      </div>

      <Cart showCart={showCart} toggleCart={toggleCart} />

      <div className="flex flex-row flex-wrap justify-center items-center gap-5">
        {items.length > 0 ? (
          items.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-500">Loading items...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
