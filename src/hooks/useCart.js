import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {
  const { cartCount, dispatch } = useContext(CartContext);

  function addToCart() {
    dispatch({ type: "increment" });
  }

  function removeFromCart() {
    dispatch({ type: "decrement" });
  }

  return { cartCount, addToCart, removeFromCart };
}
