import React, { useState } from "react";
import React from "react";
import styled from "styled-components";
import Announceement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: " 0px 20px",
    display: "flex",
    flexDirection: "column",
  })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 28px;
  ${mobile({
    marginRight: "0px",
  })};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    margin: "10px 0px",
  })};
`;
const Option = styled.option``;
const ProductsList = () => {

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const location = useLocation();
  const catTitle = location.pathname.split("/")[2];
  const handleFilters = (e) => {
    const selectedValue = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: selectedValue,
    });
  };
  console.log(filters);

  return (
    <Container>
      <Announceement />
      <Navbar />

      <Title>{catTitle.toLocaleUpperCase()} </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="colour" onChange={handleFilters}>
            <Option disabled>Color</Option>

            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>

            <Option>Small</Option>
            <Option>Large</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products </FilterText>

          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price Low to high</Option>
            <Option value="des">Price High to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={catTitle} filters={filters} sort={sort} />

      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductsList;
