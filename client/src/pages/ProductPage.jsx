import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announceement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({
    flexDirection: "column",
    padding: "10px",
  })};
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({
    height: "40vh",
  })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 20px 50px;
  ${mobile({
    padding: "10px",
  })};
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const Desc = styled.p`
  margin: 20px 0px;
  width: 70%;
  ${mobile({
    width: "90%",
  })};
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "90%",
  })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColour = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: left;
  width: 50%;

  flex-direction: column;
  ${mobile({
    width: "90%",
  })};
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  font-weight: 700;
  cursor: pointer;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  display: flex;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductPage = () => {
  return (
    <Container>
      <Announceement />
      <Navbar />

      <Wrapper>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" />
        </ImageContainer>
        <InfoContainer>
          <Title>Wood Chair</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel
            tempore earum, voluptatibus et enim esse unde tenetur! Nihil harum
            quam officia quis culpa id, ab iure nam voluptatum nemo! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Qui ratione eos
            est ut fugit repellat, dolore temporibus praesentium ab deleniti
            quia, minus harum vitae facilis consequatur dolorum itaque quidem
            voluptatibus?
          </Desc>
          <Price>£250</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Colour</FilterTitle>
              <FilterColour color="black" />
              <FilterColour color="teal" />
              <FilterColour color="coral" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Small</FilterSizeOption>
                <FilterSizeOption> Large</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ProductPage;
