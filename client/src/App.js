import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CallPage from './pages/call/call.page';
import AgentPage from './pages/agent/agent.page';
import HomePage from './pages/home/home.page';
import Header from './components/header/header.component';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/call/:phone" component={CallPage} />
          <Route path="/agent/:id" component={AgentPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
