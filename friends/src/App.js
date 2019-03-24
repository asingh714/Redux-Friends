import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
        <Route exact path="/protected" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
