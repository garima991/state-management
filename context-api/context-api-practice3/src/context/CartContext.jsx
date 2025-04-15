import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() =>
    localStorage.getItem("cartProduct")
      ? JSON.parse(localStorage.getItem("cartProduct"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);

      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.caloriesPerServing * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
