import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Notify from './Notify';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/notify" component={Notify} />
    </div>
  </Router>
);

export default App;
