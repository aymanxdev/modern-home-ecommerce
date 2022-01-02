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

const stripe_KEY =
  "pk_test_51ISp76GSiXLf8ZJ0VTz3LM9T3Oo4SEDb3u8X5gqVrEgpw4FZFBW5SarvvyHKk6HwuQw2UF5CTE4GsJoO5BJ7cS8y00DUfJV9Vl";

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
