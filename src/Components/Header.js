import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: space-around;
  padding: 10px 18px;
  align-items: center;
`;

const Title = styled.h1``;

const Nav = styled.h4``;

export default () => (
  <Header>
    <Link to="/">
      <Title>HEADER</Title>
    </Link>
    <Link to="login">
      <Nav>Login</Nav>
    </Link>
  </Header>
);
