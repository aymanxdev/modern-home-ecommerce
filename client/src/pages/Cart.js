import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announceement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px",
  })};
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })};
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
////// bottom container /////
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })};
`;
const ProductInfo = styled.div`
  flex: 3;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

//////// inside bottom container ///////

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  ${mobile({
    flexDirection: "column",
  })};
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const PorudctName = styled.span``;
const ProductId = styled.span``;
const ProductColour = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const Image = styled.img`
  width: 150px;
`;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({
    marginTop: "25px",
  })};
`;
const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    margin: "5px 15px",
  })};
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
    marginBottom: "20px",
  })};
`;

///// summary column /////

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Cart = () => {
  return (
    <Container>
      <Announceement />
      <Navbar />

      <Wrapper>
        <Title>Cart Items</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Cart 2 </TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <ProductInfo>
            <ProductContainer>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" />
                <Details>
                  <PorudctName>
                    {" "}
                    <b>Product: </b> Wood Chair
                  </PorudctName>
                  <ProductId>
                    {" "}
                    <b>ID</b> 21546588{" "}
                  </ProductId>
                  <ProductColour color="black" />
                  <ProductSize>
                    {" "}
                    <b>Size: </b> 180cm
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>£ 250 </ProductPrice>
              </PriceDetails>
            </ProductContainer>
            <Hr />
            <ProductContainer>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1592434417458-53c96da451e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" />
                <Details>
                  <PorudctName>
                    {" "}
                    <b>Product: </b> Modern Chair
                  </PorudctName>
                  <ProductId>
                    <b>ID</b> 345354353
                  </ProductId>
                  <ProductColour color="coral" />
                  <ProductSize>
                    {" "}
                    <b>Size: </b> One Size
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>£ 180 </ProductPrice>
              </PriceDetails>
            </ProductContainer>
          </ProductInfo>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemText>£ 400</SummaryItemText>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemText>£ 8.9</SummaryItemText>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText> Shipping Discount</SummaryItemText>
              <SummaryItemText>£ 5</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText> Total</SummaryItemText>
              <SummaryItemPrice>£ 404.9</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
