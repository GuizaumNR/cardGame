import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './frontend/pages/home';
import Login from './frontend/pages/login';
import Register from './frontend/pages/register';
import Game from './frontend/pages/game';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/game" component={Game} />
      </Switch>
    </div>
  );
}

export default App;
