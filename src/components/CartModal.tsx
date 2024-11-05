import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart.js";
import type { ModalRef } from "../types";

type Props = {
  title: string;
  actions: any;
};

const CartModalWithRef: React.ForwardRefRenderFunction<ModalRef, Props> =
  function Modal({ title, actions }, ref) {
    const dialogRef = useRef<ModalRef>(null);

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          dialogRef?.current?.showModal();
        },
      };
    });

    return createPortal(
      <dialog id="modal" ref={dialogRef}>
        <h2>{title}</h2>
        <Cart />
        <form method="dialog" id="modal-actions">
          {actions}
        </form>
      </dialog>,
      document.getElementById("modal")!,
    );
  };

const CartModal = forwardRef(CartModalWithRef);

export default CartModal;
