<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data/productsData";
import axios from "axios";
=======
import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data/productsData";
>>>>>>> node-server-dev

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
<<<<<<< HEAD
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredproducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http;//localhost:5000/api/products");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);
=======
const Products = () => {
>>>>>>> node-server-dev
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
