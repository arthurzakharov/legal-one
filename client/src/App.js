import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CallPage from './pages/call/call.page';
import AgentPage from './pages/agent/agent.page';
import HomePage from './pages/home/home.page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/call/:phone">
          <CallPage />
        </Route>
        <Route path="/agent/:id">
          <AgentPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
