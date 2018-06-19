import React from 'react';

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
    <h1>Chipadmin</h1>
    <p>
      Listos los chipacitos? <br />
      Apretá el botón y lanzá las notificaciones. <br />
      <button onClick={launchNotifications}>Launch</button>
    </p>
  </div>);

export default Notify;
