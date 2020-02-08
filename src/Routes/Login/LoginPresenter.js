import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Conatiner = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;

const LoginPresenter = ({ something, loading, error }) => (
  <Conatiner>
    <Title>LOGIN</Title>
  </Conatiner>
);

LoginPresenter.prototype = {
  something: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default LoginPresenter;
