import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../redux/apiCalls";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
} from "./AdminLogin.styles.js";
import Alert from "@mui/material/Alert";
import { useLocation, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userCredentials;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const [alertMsg, setAlertMsg] = useState(false);

  //handle login
  const handleLoginClick = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setAlertMsg(true);
      setTimeout(() => {
        setAlertMsg(false);
      }, 3000);
      console.log(error);
    } else {
      loginAdmin(dispatch, { username, password });
    }
    if (location.state?.from) {
      navigate(location.state.from);
    }
  };
  //handle input change object
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Admin Dashboard - TinyHome</Title>
        <Alert severity="info">
          Username: admin <br /> Password: 123456
        </Alert>
        <Form onSubmit={handleLoginClick}>
          <Input
            name="username"
            value={username}
            placeholder="username"
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            value={password}
            placeholder="password"
            type="password"
            onChange={handleChange}
            required
          />

          <Button type="submit" disabled={isFetching}>
            Login
          </Button>
          {alertMsg && (
            <Alert severity="error">
              Something went wrong... Please ensure that you enter valid
              credentials
            </Alert>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AdminLogin;
