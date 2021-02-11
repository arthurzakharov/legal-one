import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import CallPage from './pages/call/call.page';
import AgentPage from './pages/agent/agent.page';
import HomePage from './pages/home/home.page';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/call/123">Call</Link>
            </li>
            <li>
              <Link to="/agent/123">Agent</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/call/:id">
            <CallPage />
          </Route>
          <Route path="/agent/:id">
            <AgentPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
