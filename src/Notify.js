import React from 'react';
import styled from 'styled-components';

import Header from './common/Header';
import Content from './common/Content';

const Button = styled.button`
  display: block;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 20px 40px;
  font-size: 16px;
  cursor: pointer;
  margin: auto;
  margin-top: 60px;
  width: 50%;
  border-radius: 4px;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.25);
`;

const launchNotifications = () => {
  fetch('https://onesignal.com/api/v1/notifications', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic YjExZDVjNGMtM2E2OC00ZGUzLWI0MjUtZDc2MzU4ZjM1MzE3'
    },
    body: JSON.stringify({
      app_id: 'ea0cf40d-f4da-40ec-91be-e33469b3a7f4',
      included_segments: ['Active Users', 'Inactive Users'],
      contents: { en: 'Juancito English Message' }
    })
  });
  console.log('send push notification');
};

const Notify = () => (
  <div>
    <Header>Chipadmin</Header>
    <Content>
      Listos los chipacitos? <br />
      Apretá el botón y lanzá las notificaciones. <br />
      <Button onClick={launchNotifications}>Launch</Button>
    </Content>
  </div>);

export default Notify;
