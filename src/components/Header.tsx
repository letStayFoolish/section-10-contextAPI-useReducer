import { useRef } from "react";

import CartModal from "./CartModal.tsx";
import { CartType, ModalRef } from "../types";

type Props = {
  cart: CartType;
  onUpdateCartItemQuantity: (productId: string, amount: number) => void;
};

const Header: React.FC<Props> = ({ cart, onUpdateCartItemQuantity }) => {
  const dialogRef = useRef<ModalRef>(null);

  const cartQuantity = cart.items.length;

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
      <CartModal
        ref={dialogRef}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
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
