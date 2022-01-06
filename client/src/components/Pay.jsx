import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const Button = styled.button``;

const stripe_KEY = process.env.REACT_APP_STRIPE_KEY;
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  //   const history = useHistory()

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makePaymentRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 20000,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makePaymentRequest();
  }, [stripeToken]);

  return (
    <Container>
      <StripeCheckout
        token={onToken}
        stripeKey={stripe_KEY}
        name="Tiny Home Shope" // the pop-in header title
        currency="USD"
        amount={2000}
        description="Your total is $20"
      />
    </Container>
  );
};

export default Pay;
