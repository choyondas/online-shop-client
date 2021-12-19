import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "../Product/Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products">
      <div className="container p-5 ">
        <div className="p-5">
          <h3 style={{ color: "yellow" }}>Most Wanted Products</h3>
          <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>
            Popular products
          </h1>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.slice(0, 6).map((product) => (
            <Product key={product.name} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
