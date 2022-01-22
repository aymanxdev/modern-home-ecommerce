import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/login-bg.jpeg"); /* fallback */
  background: linear-gradient(rgba(46, 45, 45, 0.5), rgba(46, 45, 45, 0.5)),
    url("https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"),
    center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
export const Wrapper = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
  border-radius: 5px;
  box-shadow: lightgray;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  border: 0.5px solid lightgray;

  &input:disabled {
    cursor: not-allowed;
    background-color: gray;
  }
  &input:invalid {
    border: 2px solid red;
  }
`;

export const Button = styled.button`
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
