import React from 'react';
import styled from 'styled-components';

import Header from './common/Header';
import Content from './common/Content';

const Message = styled.p``;

const MapLink = styled.a`
  font-size: 24px;
  color: #1C9EBD;
`;

const Home = () => (
  <div>
    <Header>Bienvenido a hot chipa</Header>
    <Content>
      <Message>
        El último deploy de chipá fue hoy a las 15:00.
        Ponete en camino, está calentito.
      </Message>
      <MapLink href="https://goo.gl/maps/ZXCh4M8ry1s">https://goo.gl/maps/ZXCh4M8ry1s</MapLink>
    </Content>
  </div>);

export default Home;
