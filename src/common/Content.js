import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px;
  font-size: 28px;
  width: 70%;
  margin: auto;
  min-width: 400px;
  max-width: 600px;
`;

const Content = ({ children, className }) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
);

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string
};

Content.defaultProps = {
  className: null
};

export default Content;
