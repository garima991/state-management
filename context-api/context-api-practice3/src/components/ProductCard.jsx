import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({item}) => {
  const {addToCart} = useCart();

  return (
    <div className="flex flex-col items-center bg-slate-50 shadow-lg py-4 px-3 max-w-fit rounded-lg">
    <img src = {item.image} alt = {item.name} className = 'rounded-md h-48'/>
        <h1 className="text-sm font-bold text-black">{item.name}</h1>
        <p className="mt-2 font-bold text-lime-600 ">₹{item.caloriesPerServing}</p>
      <button className="px-2 py-1 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-600" onClick={() => addToCart(item)}>
          Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
