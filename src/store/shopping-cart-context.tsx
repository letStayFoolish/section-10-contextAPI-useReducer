import React, { createContext, PropsWithChildren, useState } from "react";
import type { CartItemType, CartType } from "../types";
import { DUMMY_PRODUCTS } from "../dummy-products.ts";

type CartContextType = {
  items: CartItemType[];
  addItemToCart: (id: string) => void;
  updateItemQuantity: (productId: string, amount: number) => void;
};

/**
 * Key moments
 *
 * What happens when Context values change?
 *
 * Component that consuming context's value, will re-execute by React when that context value changes!
 * It is the same as with components which are using internal state, on update they get re-executed by React.
 *
 * This is all for the UI to be updated.
 * */

const CartContext = createContext<CartContextType>({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export function useCartContext() {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
}

// Now provide this context to our application (wrapping out app or part(s) of it
const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<CartType>({
    items: [],
  });

  function handleAddItemToCart(id: string) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id,
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);

        updatedItems.push({
          id: id,
          name: product?.title,
          price: product?.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId: string, amount: number) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId,
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
