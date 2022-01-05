import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
`;

const Announceement = () => {
  return <Container>Free shipping on orders over 30</Container>;
};

export default Announceement;
