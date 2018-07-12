import React from 'react';
import styled from 'styled-components';

import Header from './common/Header';
import Content from './common/Content';

const MapLink = styled.a`
  font-size: 24px;
  color: #1C9EBD;
`;

const Home = () => (
  <div>
    <Header>Bienvenido a hot chipa</Header>
    <Content>
      <p>
        Te avisaremos cuando los chipás estén. Click acá para ponerte en camino.
      </p>
      <MapLink href="https://goo.gl/maps/ZXCh4M8ry1s">https://goo.gl/maps/ZXCh4M8ry1s</MapLink>
    </Content>
  </div>);

export default Home;
