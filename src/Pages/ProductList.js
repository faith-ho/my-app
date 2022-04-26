import React from "react";
import Product from "../Components/Product";

export default function ProductList() {
  return (
    <div>
      <h2>This is my Product List</h2>
      <Product
        name="iPhone X"
        description="This is the new iPhone"
        price={1000}
      />

      <Product
        name="Macbook Pro"
        description="Everyone's favourite laptop"
        price={2500}
      />

      <Product name="iMac" description="Your new desktop" price={3500} />
    </div>
  );
}
