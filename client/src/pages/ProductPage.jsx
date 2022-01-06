import { Add, Remove } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Announceement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

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
  border: 0.5px solid lightgray;
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
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedColour, setSelectedColour] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get("/products/find/" + id);
      setProduct(res.data);
      console.log(res.data);
      try {
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      productQuantity > 1 && setProductQuantity(productQuantity - 1);
    } else {
      setProductQuantity(productQuantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({ ...product, productQuantity, selectedColour, selectedSize })
    );
  };
  return (
    <Container>
      <Announceement />
      <Navbar />

      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price> £ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Colour</FilterTitle>
              {product.colour?.map((chosenColor) => (
                <FilterColour
                  color={chosenColor}
                  key={chosenColor}
                  onClick={() => setSelectedColour(chosenColor)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onClick={(e) => setSelectedSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("decrease")} />
              <Amount>{productQuantity}</Amount>
              <Add onClick={() => handleQuantity("increase")} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ProductPage;
