import React, { useRef } from "react";

import CartModal from "./CartModal.tsx";
import { ModalRef } from "../types";
import { useCartContext } from "../store/shopping-cart-context.tsx";

const Header: React.FC = () => {
  const dialogRef = useRef<ModalRef>(null);

  const { items } = useCartContext();

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    dialogRef?.current?.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={dialogRef} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
};

export default Header;
