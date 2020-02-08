import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Conatiner = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;

const HomePresenter = ({ something, loading, error, contents }) => (
  <Conatiner>
    <Title>{contents}</Title>
  </Conatiner>
);

HomePresenter.prototype = {
  something: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  contents: PropTypes.string
};

export default HomePresenter;
