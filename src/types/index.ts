export type ProductType = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartType = {
  items: CartItemType[];
};

export type ModalRef = HTMLDialogElement & {
  open: () => void;
};
