import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Bienvenido a hot chipa</h1>
    <p>
      El último deploy de chipá fue hoy a las 15:00. <br />
      Ponete en camino, está calentito. <br />
      <a href="https://goo.gl/maps/ZXCh4M8ry1s">https://goo.gl/maps/ZXCh4M8ry1s</a> <br />
      <Link to="/notify">About</Link>
    </p>
  </div>);

export default Home;
