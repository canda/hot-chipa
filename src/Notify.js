import React from 'react';

const launchNotifications = () => {
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
