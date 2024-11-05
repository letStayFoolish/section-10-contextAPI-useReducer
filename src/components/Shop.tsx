import { DUMMY_PRODUCTS } from "../dummy-products.ts";
import Product from "./Product.tsx";
import React from "react";

type Props = {
  onAddItemToCart: (productId: string) => void;
};

const Shop: React.FC<Props> = ({ onAddItemToCart }) => {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Shop;
