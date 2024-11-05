import React, { createContext } from "react";
import type { CartItemType } from "../types";

type CartContextType = {
  items: CartItemType[];
  addItemToCart: (id: string) => void;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addItemToCart: () => {},
});

// Now provide this context to our application (wrapping out app or part(s) of it:

export default CartContext;

export function useCartContext() {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
}
