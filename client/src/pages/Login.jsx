import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(46, 45, 45, 0.5), rgba(46, 45, 45, 0.5)),
    url("https://images.unsplash.com/photo-1616464916566-c09efd4272a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1966&q=80"),
    center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
  border-radius: 5px;
  box-shadow: lightgray;
  ${mobile({
    width: " 75%",
  })};
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  border: 0.5px solid lightgray;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid teal;
  margin-bottom: 10px;

  &:hover {
    background-color: white;
    border: 1px solid teal;
    color: teal;
  }
`;
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userCredentials;

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);
  const handleLoginClick = (e) => {
    e.preventDefault();
    loginUser(dispatch, { username, password });
    // setUsername(" ");
    // setPassword(" ");
    setUserCredentials({
      username: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form onSubmit={handleLoginClick}>
          <Input
            name="username"
            value={username}
            placeholder="username"
            onChange={handleChange}
          />
          <Input
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChange}
          />

          <Button onClick={handleLoginClick}> Login</Button>
          <Link>Forgot my password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Login;
