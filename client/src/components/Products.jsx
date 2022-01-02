import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data/productsData";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
