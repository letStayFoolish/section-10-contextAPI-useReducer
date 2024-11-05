import React from "react";
import { useCartContext } from "../store/shopping-cart-context.ts";

type Props = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

const Product: React.FC<Props> = ({ id, image, title, price, description }) => {
  const { addItemToCart } = useCartContext();

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
};
export default Product;
