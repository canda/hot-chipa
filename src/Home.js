import React from 'react';
import styled from 'styled-components';

import Header from './common/Header';
import Content from './common/Content';

const Message = styled.p`
  color: black;
  text-decoration: none;
`;

const MapLink = styled.a`
  font-size: 24px;
  color: #1C9EBD;
`;

const Home = () => (
  <div>
    <Header>Bienvenido a hot chipa</Header>
    <Content>
      <Message>
        <span>Te avisaremos cuando los chipás estén listos.</span>
        <a href="https://goo.gl/maps/ZXCh4M8ry1s">Click acá para ponerte en camino.</a>
      </Message>
      <MapLink href="https://goo.gl/maps/ZXCh4M8ry1s">https://goo.gl/maps/ZXCh4M8ry1s</MapLink>
    </Content>
  </div>);

export default Home;
