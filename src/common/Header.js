import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import hotChipa from '../chipa.png';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #343a40;
  color: white;
`;

const Title = styled.h1`
  flex: 1;
  font-size: 16px;
`;

const Icon = styled.img`
  height: 50px;
`;

const Header = ({ children }) => (
  <Wrapper>
    <Icon src={hotChipa} alt="chipa" />
    <Title>{children}</Title>
  </Wrapper>
);

Header.propTypes = {
  children: PropTypes.string.isRequired
};

export default Header;
