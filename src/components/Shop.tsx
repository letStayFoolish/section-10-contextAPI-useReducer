import React, { PropsWithChildren } from "react";

const Shop: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">{children}</ul>
    </section>
  );
};
export default Shop;
