import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchProductsError, updateAllProducts } from "../store/slices/productSlice";
import { fetchCartItems, fetchCartItemsError, loadCartItems } from "../store/slices/cartSlice";

export default function Header() {

  const dispatch = useDispatch();

  useEffect(() => {

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  making api call in redux ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
    dispatch(fetchProducts());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateAllProducts(data));
      })
      .catch(() => {
        dispatch(fetchProductsError());
      });

    dispatch(fetchCartItems());
    fetch("https://fakestoreapi.com/carts/5")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadCartItems(data));
      })
      .catch(() => {
        dispatch(fetchCartItemsError());
      });


  }, []);

  const cartItems = useSelector((state) => state.cartItems.list)
  // console.log(cartItems)
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopify</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce(
              (acc, currentItem) => acc + currentItem.quantity,
              0
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}
