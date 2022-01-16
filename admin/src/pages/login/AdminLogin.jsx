import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../redux/apiCalls";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
} from "./AdminLogin.styles.js";

const AdminLogin = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userCredentials;

  const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);
  const handleLoginClick = (e) => {
    e.preventDefault();
    loginAdmin(dispatch, { username, password });

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
        <Title>Admin Dashboard Login</Title>
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
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AdminLogin;
