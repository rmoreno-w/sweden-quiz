import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuizContainer = styled.div`
  width: 100%;  
  max-width: 400px;
  /* padding-top: 15px; */
  margin: 2.5% 10% auto 2.5%;
  @media screen and (max-width:700px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;